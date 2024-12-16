"use client";

import { useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [showResources, setShowResources] = useState(false);

  return (
    <>
      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Products Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setShowProducts(true)}
              onMouseLeave={() => setShowProducts(false)}
            >
              <button className="flex items-center space-x-2 text-gray-800 hover:text-blue-600 font-semibold transition-colors">
                <span>Products</span>
                <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showProducts && (
                <div className="absolute left-0 mt-2 w-64 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-2">
                  <div className="py-1" role="menu">
                    <a href="#" className="flex items-start space-x-4 px-4 py-3 rounded-lg hover:bg-gray-50">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Brand Management</p>
                        <p className="text-sm text-gray-500">Control your brand identity</p>
                      </div>
                    </a>
                    {/* Add more product items similarly */}
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors">
              Solutions
            </a>

            <a href="#" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors">
              Pricing
            </a>

            {/* Resources Dropdown - similar structure to Products */}
            <div
              className="relative group"
              onMouseEnter={() => setShowResources(true)}
              onMouseLeave={() => setShowResources(false)}
            >
              <button className="flex items-center space-x-2 text-gray-800 hover:text-blue-600 font-semibold transition-colors">
                <span>Resources</span>
                <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Similar dropdown content as Products */}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="text-gray-800 hover:text-white border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 transition-colors font-normal"
              >
                Log in
              </a>
              <a
                href="#"
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors font-semibold"
              >
                Start For Free
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className="p-2 rounded-lg text-gray-700 hover:bg-gray-100">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Hero;
