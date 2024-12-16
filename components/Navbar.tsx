"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showResources, setShowResources] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="BrandNav" width={150} height={40} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button 
                className="flex items-center gap-2 text-[#1E293B] hover:text-[#0D6EFD] transition-colors"
                onClick={() => setShowProducts(!showProducts)}
              >
                Products
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <Link href="/pricing" className="text-[#1E293B] hover:text-[#0D6EFD] transition-colors">
              Pricing
            </Link>

            <Link href="/blogs" className="text-[#1E293B] hover:text-[#0D6EFD] transition-colors">
              Blogs
            </Link>

            <div className="relative group">
              <button 
                className="flex items-center gap-2 text-[#1E293B] hover:text-[#0D6EFD] transition-colors"
                onClick={() => setShowResources(!showResources)}
              >
                Resources
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link 
              href="/login" 
              className="px-6 py-2 text-[#0D6EFD] border border-[#0D6EFD] rounded-lg hover:bg-blue-50 transition-colors"
            >
              Log in
            </Link>
            <Link 
              href="/signup" 
              className="px-6 py-2 text-white bg-[#0D6EFD] rounded-lg hover:bg-blue-600 transition-colors"
            >
              Start for free
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#1E293B]"
            >
              {!isOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 pt-20">
          <div className="p-4 space-y-4">
            <button className="flex items-center justify-between w-full py-2 text-[#1E293B]">
              <span>Products</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <Link href="/pricing" className="block py-2 text-[#1E293B]">
              Pricing
            </Link>
            <Link href="/blogs" className="block py-2 text-[#1E293B]">
              Blogs
            </Link>
            <button className="flex items-center justify-between w-full py-2 text-[#1E293B]">
              <span>Resources</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="pt-4 space-y-2">
              <Link 
                href="/login" 
                className="block w-full px-6 py-2 text-center text-[#0D6EFD] border border-[#0D6EFD] rounded-lg hover:bg-blue-50 transition-colors"
              >
                Log in
              </Link>
              <Link 
                href="/signup" 
                className="block w-full px-6 py-2 text-center text-white bg-[#0D6EFD] rounded-lg hover:bg-blue-600 transition-colors"
              >
                Start for free
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 