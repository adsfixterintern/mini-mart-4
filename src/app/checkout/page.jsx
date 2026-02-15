"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function CheckoutPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [success, setSuccess] = useState(false);

  const onSubmit = (data) => {
    setSuccess(true);
    reset();
  };

  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      
      <h1 className="text-3xl font-extrabold mb-10 text-center">
        Checkout
      </h1>

      {success && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md text-center font-semibold">
         Checkout Successful!
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 bg-white p-8 rounded-xl shadow-md"
      >

        {/* Name */}
        <div>
          <label className="block mb-2 font-semibold">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email",
              },
            })}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Address */}
        <div>
          <label className="block mb-2 font-semibold">Address</label>
          <textarea
            rows="4"
            {...register("address", { required: "Address is required" })}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">
              {errors.address.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-400 transition text-white font-bold py-3 rounded-md"
        >
          Place Order
        </button>
      </form>
    </section>
  );
}
