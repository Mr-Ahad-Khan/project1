import Hero from "../components/Hero.jsx";
import ProductCards from "../components/ProductCards.jsx";
import TopProducts from "../components/TopProducts.jsx";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductCards />

      <TopProducts />
    </div>
  );
}
