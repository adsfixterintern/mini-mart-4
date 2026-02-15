import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-extrabold mb-4">
              E-SHOP
            </h2>
            <p className="text-sm text-orange-100">
              Premium products curated for your lifestyle.
              Quality, comfort, and performance in one place.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-orange-200 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-orange-200 transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-200 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-200 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-orange-100">
              <li>Electronics</li>
              <li>Home & Living</li>
              <li>Fitness</li>
              <li>Personal Care</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-sm text-orange-100 mb-4">
              Subscribe to get special offers and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-l-md bg-white text-black outline-none"
              />
              <button className="bg-orange-500 text-orange-white px-4 rounded-r-md font-bold hover:bg-orange-100 transition">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-400 mt-10 pt-6 text-center text-sm text-orange-100">
          © {new Date().getFullYear()} E-SHOP. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
