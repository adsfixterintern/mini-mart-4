import React from 'react'
import Image from 'next/image'
import img from '../../../../public/hero.jpg'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Relegio Faminio
          </h1>

          <p className="text-sm sm:text-base text-gray-600">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Error explicabo eaque quidem inventore at nulla molestiae unde optio. Veritatis velit est ea quisquam consequuntur corporis a vitae, porro at pariatur iste placeat doloribus? Laudantium ratione illum quibusdam autem nemo, architecto delectus sint corporis, explicabo quas provident reiciendis mollitia ut magni.
          </p>

         <Link href={'/products'}>
          <button className="bg-orange-500 px-6 py-3 sm:py-4 hover:bg-orange-400 transition rounded-md font-bold text-white">
            View Collections
          </button>
         </Link>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={img}
            alt="hero-img"
            className="rounded-xl w-full max-w-md md:max-w-lg h-[400] md:h-[600]"
            priority
          />
        </div>

      </div>
    </section>
  )
}
