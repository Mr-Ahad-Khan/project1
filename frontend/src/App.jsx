import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProductDetails from "./pages/Productdetails1.jsx";
import ProtectRoutes from "./components/ProtectRoutes.jsx";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => window.localStorage.getItem("blinkit_user") !== null,
  );

  const handleLogout = () => {
    window.localStorage.removeItem("blinkit_user");
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/product/:id"
          element={
            <ProtectRoutes isLoggedIn={isLoggedIn}>
              <ProductDetails />
            </ProtectRoutes>
          }
        />

        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" replace />
            ) : (
              <LoginPage setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
