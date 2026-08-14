const User = require("../Models/userModel");

const handleDatabaseError = (res, error, fallbackMessage) => {
  console.error(fallbackMessage, error);

  if (error.code === 11000) {
    return res.status(409).json({ message: "A user with that name, email, or phone already exists" });
  }

  if (error.name === "ValidationError") {
    return res.status(400).json({ message: error.message });
  }

  if (error.name === "CastError") {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  return res.status(500).json({ message: "Internal Server Error" });
};

const AllUsers = async (_req, res) => {
  try {
    const users = await User.find().sort({ createdAt: 1 });
    return res.status(200).json(users);
  } catch (error) {
    return handleDatabaseError(res, error, "Error fetching users:");
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    return handleDatabaseError(res, error, "Error fetching user:");
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    return res.status(201).json({ message: "User created successfully", data: newUser });
  } catch (error) {
    return handleDatabaseError(res, error, "Error creating user:");
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User updated successfully", data: updatedUser });
  } catch (error) {
    return handleDatabaseError(res, error, "Error updating user:");
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    return handleDatabaseError(res, error, "Error deleting user:");
  }
};

module.exports = { AllUsers, getUserById, createUser, updateUser, deleteUser };