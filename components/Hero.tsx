"use client"; // Marking as a Client Component for React state

import { useState } from "react";

const Hero = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [showResources, setShowResources] = useState(false);

  return (
    <div>
      <nav className="relative">
        <img src="/logo.png" alt="" className="hover:cursor-pointer" />

        <div className="hidden md:flex space-x-5 text-md text-lg font-poppins font-medium">
          {/* Products Dropdown */}
          <div
            className="relative hover:text-sky-800"
            onMouseEnter={() => setShowProducts(true)}
            onMouseLeave={() => setShowProducts(false)}
          >
            <a href="" className="hover:text-sky-800">
              Products
            </a>
            {showProducts && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Product 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Product 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Product 3
                </a>
              </div>
            )}
          </div>

          {/* Features */}
          <a href="" className="hover:text-sky-800">
            Features
          </a>

          {/* Blog */}
          <a href="" className="hover:text-sky-800">
            Blog
          </a>

          {/* Resources Dropdown */}
          <div
            className="relative hover:text-sky-800"
            onMouseEnter={() => setShowResources(true)}
            onMouseLeave={() => setShowResources(false)}
          >
            <a href="" className="hover:text-sky-800">
              Resources
            </a>
            {showResources && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Guides
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Support
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Hero;
