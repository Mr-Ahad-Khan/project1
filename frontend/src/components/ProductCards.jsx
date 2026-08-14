import { Link } from "react-router-dom";
import products from "../data/product.js";
import useCart from "../hooks/useShoppingCart.js";

export default function ProductCards() {
  const { addToCart, removeFromCart, getProductQuantity } = useCart();

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => {
        const quantity = getProductQuantity(product.id);

        return (
            <div
              key={product.id}
              className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  className="h-52 w-full object-cover"
                  src={product.image}
                  alt={product.name}
                />
              </Link>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <span className="rounded-md bg-green-100 px-2 py-1 text-sm font-semibold text-green-700">
                    {product.quantity}
                  </span>
                </div>

                <p className="mt-3 min-h-12 text-sm leading-6 text-gray-600">
                  {product.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <p className="text-xl font-bold text-gray-900">
                    Rs. {product.amount}
                  </p>
                  {quantity === 0 ? (
                    <button
                      type="button"
                      onClick={() => addToCart(product)}
                      className="rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <div className="flex items-center overflow-hidden rounded-md border border-green-600">
                      <button
                        type="button"
                        onClick={() => removeFromCart(product.id)}
                        className="px-3 py-1.5 font-bold text-green-700 hover:bg-green-50"
                        aria-label={`Remove one ${product.name} from cart`}
                      >
                        -
                      </button>
                      <span className="min-w-8 text-center text-sm font-bold text-green-700">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => addToCart(product)}
                        className="px-3 py-1.5 font-bold text-green-700 hover:bg-green-50"
                        aria-label={`Add one more ${product.name} to cart`}
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
        );
      })}
    </div>
  );
}
