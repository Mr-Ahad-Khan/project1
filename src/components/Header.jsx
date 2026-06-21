const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200 shadow-sm">
      {/* Logo */}
      <div className="text-4xl font-bold text-yellow-400 cursor-pointer">
        blinkit
      </div>

      {/* Location */}
      <div className="ml-4 hidden md:block">
        <h3 className="text-lg font-bold">Delivery in 8 minutes</h3>
        <p className="text-sm text-gray-600">
          V3RF+CQJ, Uttardhona, Uttar Pradesh ▼
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder='Search "chocolate"'
          className="w-full px-5 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Login */}
      <button className="text-lg font-medium mr-4 hover:text-green-600">
        Login
      </button>

      {/* Cart */}
      <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-semibold flex items-center gap-2">
        🛒 My Cart
      </button>
    </header>
  );
};

export default Header;
