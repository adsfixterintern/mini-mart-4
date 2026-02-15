// components/ProductCard.jsx
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {

  console.log(product.image)
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
      
    <div className="relative w-full h-60 bg-gray-50 overflow-hidden">
  {product.image && (
    <Image
      src={product.image}
      alt={product.name}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-300"
      sizes="(max-width: 768px) 100vw, 25vw"
    />
  )}
</div>


      <div className="p-6 flex flex-col grow">
        <span className="text-xs uppercase tracking-wide text-orange-500 font-semibold mb-2">
          {product.category}
        </span>

        <h3 className="text-lg font-bold text-gray-800 line-clamp-2 mb-2">
          {product.name}
        </h3>

        <p className="text-xl font-extrabold text-orange-500 mb-5">
          ${product.price}
        </p>

        <div className="mt-auto">
          <Link href={`/products/${product.id}`}>
            <button className="w-full bg-orange-500 hover:bg-orange-400 transition rounded-md font-bold text-white py-3">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
