// components/ui/Button.jsx
import React from "react";

export default function Button({ variant = "primary", children, className = "", ...props }) {
  const baseStyles = "px-6 py-2 rounded-md font-bold transition-all duration-300 ease-in-out";
  
  // Using your custom background and text color classes
  const variants = {
    primary: "bg-primary text-white hover:bg-accent",
    secondary: "bg-secondary text-accent hover:bg-primary hover:text-white",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}