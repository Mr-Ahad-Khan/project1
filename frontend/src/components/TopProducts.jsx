import ProductCards from "./ProductCards.jsx";
export default function TopProducts() {
  return (
    <section className="bg-white px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Top Products</h2>
          <p className="mt-3 text-gray-600">
            Choose fresh products at the best prices.
          </p>
        </div>
        <ProductCards />
      </div>
    </section>
  );
}
