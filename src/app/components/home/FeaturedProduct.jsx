"use client";

import ProductCard from "../ProductCard"
import { useProducts } from "@/app/hooks/useProducts";



export default function FeaturedProducts() {

  const { data, isLoading, isError } = useProducts();
  if (isLoading) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-20">
        <p className="text-center col-span-full">Loading products...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-20">
        <p className="text-center col-span-full text-red-500">Failed to load products.</p>
      </section>
    );
  }

 
  const featuredProducts = data?.slice(0, 4) || [];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-black font-extrabold text-2xl md:text-4xl text-center mb-12">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {featuredProducts.length > 0 ? (
          featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-full">No featured products available.</p>
        )}
      </div>
    </section>
  );
}