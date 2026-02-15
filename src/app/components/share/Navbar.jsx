'use client'
import { useProduct } from "@/app/context/ProductContext";
import { Aperture, FacebookIcon, Instagram, Twitter, Van, Menu, X, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const { cart } = useProduct();
  const [isOpen, setIsOpen] = useState(false);

 const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  

  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-black sticky top-0 z-50 bg-white">

      {/* Top Header */}
      <header className="hidden md:flex justify-between py-3 border-b border-gray-300 text-sm">
        <div className="flex gap-6 items-center">
          <div className="flex gap-2 items-center">
            <Van size={16} />
            <p>Free Delivery |</p>
          </div>

          <div className="flex gap-2 items-center">
            <Aperture size={16} />
            <p>Returns Policy |</p>
          </div>

          <div className="flex gap-3 items-center">
            <p>Follow us</p>
            <FacebookIcon size={16} />
            <Twitter size={16} />
            <Instagram size={16} />
          </div>
        </div>

        <Link href="/login" className="font-medium hover:text-gray-600">
          Login
        </Link>
      </header>

      {/* Main Navbar */}
      <div className="h-16 flex items-center justify-between border-b border-gray-300">

        {/* Logo */}
        <Link href="/" className="font-extrabold text-2xl tracking-wider">
          E-SHOP
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-semibold">
          <Link href="/" className="hover:text-gray-600 transition">Home</Link>
          <Link href="/products" className="hover:text-gray-600 transition">Products</Link>
          <Link href={'/cart'} className="hover:text-gray-600 transition relative">
            <ShoppingCart/>
            {totalItems>0 &&
              
              (<p className="absolute bottom-4 bg-orange-500 px-1  text-white rounded-full -right-1">
                {cart.length||0}
                </p>
              )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden flex gap-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
          <button className="hover:text-gray-600 transition relative">
            <ShoppingCart/>
            <p className="absolute bottom-4 bg-orange-500 px-1  text-white rounded-full left-2 md:-right-1">{cart.length||0}</p>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 py-4 border-b border-gray-300 font-medium">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/products" onClick={() => setIsOpen(false)}>Products</Link>
          
          <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
        </div>
      )}
    </nav>
  );
}

