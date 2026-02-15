"use client";

import { useProduct } from "@/app/context/ProductContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    totalAmount,
  } = useProduct();

  if (cart.length === 0) {
    return (
      <div className="text-center py-24 text-gray-500">
        Your cart is empty.
      </div>
    );
  }

 

  return (
    <section className="max-w-5xl mx-auto px-4 py-16 space-y-8">

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex gap-6 items-center border p-6 rounded-xl shadow-sm"
        >
          <div className="relative w-24 h-24">
            <Image src={item.image} alt={item.name} fill className="object-cover rounded-md" />
          </div>

          <div className="flex-1">
            <h3 className="font-bold">{item.name}</h3>
            <p className="text-orange-500 font-semibold">
              ${item.price}
            </p>

            {/* Quantity */}
            <div className="flex items-center gap-3 mt-3">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-3 py-1 border rounded"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => increaseQty(item.id)}
                className="px-3 py-1 border rounded"
              >
                +
              </button>
            </div>
          </div>

          {/* Remove */}
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 font-semibold"
          >
            Remove
          </button>
        </div>
      ))}

      {/* Total */}
      <div className="text-right space-y-4">
        <h2 className="text-2xl font-extrabold">
          Total: ${totalAmount.toFixed(2)}
        </h2>

        <Link
         href='/checkout'
          className="bg-orange-500 hover:bg-orange-400 text-white px-8 py-3 rounded-md font-bold"
        >
          Checkout
        </Link>
      </div>
    </section>
  );
}
