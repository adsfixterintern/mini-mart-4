"use client";

import { useMemo, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  const { data, isLoading, isError, error } = useProducts();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const categories = useMemo(() => {
    if (!data) return [];
    return ["All", ...new Set(data.map((item) => item.category))];
  }, [data]);

  const filteredProducts = useMemo(() => {
    if (!data) return [];

    let filtered = [...data];

    if (search) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "All") {
      filtered = filtered.filter(
        (product) => product.category === category
      );
    }


    if (sort === "low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [data, search, category, sort]);

  if (isLoading) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Loading products...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-20 text-red-500">
        {error.message}
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">

      <h1 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center">
        Our Products
      </h1>

    
      <div className="mb-10 bg-white p-6 rounded-xl shadow-sm  grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category Filter */}
        <select
          className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
        </select>

      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center text-gray-500 py-20">
          No products found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
