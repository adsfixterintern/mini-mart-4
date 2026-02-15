"use client"; 

import Link from "next/link";
import ProductCard from '../app/components/ProductCard'; 
import Button from "../app/components/ui/Button";
import { useEffect, useState } from "react";
import Hero from "./components/home/Hero";
import FeaturedProducts from "../app/components/home/FeaturedProduct";

export default function HomePage() {
  const [data, setData] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/mockData.json');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const featuredProducts = data.slice(0, 4);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
     <Hero/>

      {/* Featured Products */}
     <FeaturedProducts/>
    </main>
  );
}