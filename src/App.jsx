import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import ProductDetails from "./pages/Productdetails1.jsx";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}
