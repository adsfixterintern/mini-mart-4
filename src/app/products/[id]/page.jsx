"use client";

import { useParams } from "next/navigation";
import { useProducts } from "@/app/hooks/useProducts";
import Image from "next/image";
import Link from "next/link";
import { useProduct } from "@/app/context/ProductContext";

export default function ProductDetailsPage() {
    const { addToCart } = useProduct();
  const { id } = useParams();
  const { data, isLoading, isError } = useProducts();

  if (isLoading) {
    return (
      <div className="text-center py-24 text-xl font-semibold">
        Loading product...
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="text-center py-24 text-red-500">
        Failed to load product.
      </div>
    );
  }

  const product = data.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="text-center py-24 text-gray-500">
        Product not found.
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px- md:px-6 lg:px-8 py-16">

      {/* Back Button */}
      <Link
        href="/products"
        className="text-orange-500 font-semibold hover:underline mb-8 inline-block"
      >
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* Product Image */}
        <div className="relative w-full h-112.5 bg-gray-50 rounded-2xl overflow-hidden shadow-md">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">

          {/* Category */}
          <span className="text-sm uppercase tracking-wide text-orange-500 font-semibold">
            {product.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            {product.name}
          </h1>

          {/* Price */}
          <p className="text-3xl font-extrabold text-orange-500">
            ${product.price}
          </p>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
  onClick={() => addToCart(product)}
  className="bg-orange-500 hover:bg-orange-400 transition px-8 py-3 rounded-md font-bold text-white"
>
  Add to Cart
</button>
          </div>

        </div>
      </div>

    </section>
  );
}
