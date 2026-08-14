import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalizedEmail = formData.email.trim().toLowerCase();

    window.localStorage.setItem("blinkit_user", normalizedEmail);
    setIsLoggedIn(true);
    navigate("/", { replace: true });
  };

  return (
    <main className="flex min-h-[calc(100vh-69px)] items-center justify-center bg-gray-100 px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-96 rounded-lg bg-white p-8 shadow-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
            minLength={6}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
        >
          Login
        </button>

        <Link
          to="/"
          className="mt-5 block text-center text-sm font-semibold text-gray-600 hover:text-gray-950"
        >
          Back to home
        </Link>
      </form>
    </main>
  );
};

export default LoginPage;
