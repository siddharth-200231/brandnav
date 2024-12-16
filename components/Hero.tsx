"use client";

import { useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showResources, setShowResources] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-poppins">
      <nav className="flex items-center justify-between py-4 sm:py-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <div className="flex items-center">
              <img src="/logo.png" alt="BrandNav" className="h-8 sm:h-12 w-auto" />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-navy-900"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="relative group">
            <button 
              onClick={() => setShowProducts(!showProducts)}
              className="flex items-center space-x-1 text-navy-900 hover:text-blue-600 transition-colors"
            >
              <span>Products</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <Link href="#" className="text-navy-900 hover:text-blue-600 transition-colors">
            Pricing
          </Link>
          <Link href="#" className="text-navy-900 hover:text-blue-600 transition-colors">
            Blogs
          </Link>
          
          <div className="relative group">
            <button 
              onClick={() => setShowResources(!showResources)}
              className="flex items-center space-x-1 text-navy-900 hover:text-blue-600 transition-colors"
            >
              <span>Resources</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link 
            href="/login" 
            className="px-6 py-2 text-blue-600 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
          >
            Log in
          </Link>
          <Link 
            href="/signup" 
            className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start for free
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <Link href="/">
              <img src="/logo.png" alt="BrandNav" className="h-8 w-auto" />
            </Link>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-navy-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            <button 
              onClick={() => setShowProducts(!showProducts)}
              className="flex items-center justify-between w-full py-2 text-navy-900"
            >
              <span>Products</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <Link href="#" className="block py-2 text-navy-900">
              Pricing
            </Link>
            <Link href="#" className="block py-2 text-navy-900">
              Blogs
            </Link>

            <button 
              onClick={() => setShowResources(!showResources)}
              className="flex items-center justify-between w-full py-2 text-navy-900"
            >
              <span>Resources</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="pt-4 space-y-4">
              <Link 
                href="/login" 
                className="block w-full px-6 py-2 text-center text-blue-600 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Log in
              </Link>
              <Link 
                href="/signup" 
                className="block w-full px-6 py-2 text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start for free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
