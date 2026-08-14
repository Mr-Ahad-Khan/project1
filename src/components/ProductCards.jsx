import { Link } from "react-router-dom";

export default function ProductCards() {
  const cards = [
    {
      id: 1,
      name: "Premium Apple",
      description: "Fresh and juicy apples picked from trusted farms.",
      amount: 120,
      quantity: "1 kg",
      image:
        "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 2,
      name: "Organic Banana",
      description: "Naturally sweet bananas, perfect for daily nutrition.",
      amount: 60,
      quantity: "1 dozen",
      image:
        "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 3,
      name: "Fresh Orange",
      description: "Vitamin-rich oranges with bright citrus flavor.",
      amount: 90,
      quantity: "1 kg",
      image:
        "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 4,
      name: "Green Grapes",
      description: "Crisp seedless grapes for snacks, juices, and salads.",
      amount: 140,
      quantity: "500 g",
      image:
        "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=700&q=80",
    },
  ];

  return (
    <section className="bg-white px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Popular Products</h2>
          <p className="mt-3 text-gray-600">
            Choose fresh products at the best prices.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Link to={`/product/${card.id}`}>
                <img
                  className="h-52 w-full object-cover"
                  src={card.image}
                  alt={card.name}
                />
              </Link>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {card.name}
                  </h3>
                  <span className="rounded-md bg-green-100 px-2 py-1 text-sm font-semibold text-green-700">
                    {card.quantity}
                  </span>
                </div>

                <p className="mt-3 min-h-12 text-sm leading-6 text-gray-600">
                  {card.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <p className="text-xl font-bold text-gray-900">
                    Rs. {card.amount}
                  </p>
                  <button className="rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
