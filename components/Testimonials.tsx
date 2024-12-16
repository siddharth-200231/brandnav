const Testimonials = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Final CTA */}
        <div className="text-center py-20 bg-gradient-to-r from-[#EEF2FF] via-[#F5F8FF] to-[#FFF5F9] rounded-[32px]">
          <h2 className="text-[40px] font-bold text-[#1E1B4B] mb-4">
            Want to see BrandNav in action?
          </h2>
          <p className="text-[#6B7280] text-lg mb-8">
            Try BrandNav for free today!
          </p>
          <button className="bg-[#0D6EFD] text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-base font-medium shadow-[0_4px_16px_rgba(13,110,253,0.24)]">
            Grab free leads
          </button>
          <div className="mt-4 flex items-center justify-center gap-4 text-sm text-[#6B7280]">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="12" fill="#F3F4F6"/>
                <path d="M7 13l3 3L17 8" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>No credit card required</span>
            </div>
            <span className="text-[#D1D5DB]">|</span>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#FBBF24]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <span className="ml-1">4.8/5 G2 Rating</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-32">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <h3 className="text-xl font-bold text-[#1E1B4B] mb-4">BrandNav.io</h3>
              <p className="text-[#6B7280] text-base leading-relaxed mb-6">
                BrandNav is the ultimate platform combining lead generation, email verification, data enrichement and blacklist monitoring you need to scale your business.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-[#6B7280] hover:text-[#1E1B4B]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a href="#" className="text-[#6B7280] hover:text-[#1E1B4B]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-[#6B7280] hover:text-[#1E1B4B]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[#1E1B4B] font-bold mb-4">Blogs</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#0D6EFD] hover:underline">All Blogs</a></li>
                <li><a href="#" className="text-[#0D6EFD] hover:underline">Sales Hacks</a></li>
                <li><a href="#" className="text-[#0D6EFD] hover:underline">Cold Emailing Tips</a></li>
                <li><a href="#" className="text-[#0D6EFD] hover:underline">Lead Generation</a></li>
                <li><a href="#" className="text-[#0D6EFD] hover:underline">BrandNav Updates</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#1E1B4B] font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#0D6EFD] hover:underline">Latest Updates</a></li>
                <li><a href="#" className="text-[#0D6EFD] hover:underline">Roadmap</a></li>
                <li><a href="#" className="text-[#0D6EFD] hover:underline">About Us</a></li>
                <li><a href="#" className="text-[#0D6EFD] hover:underline">Reports</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#1E1B4B] font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#0D6EFD] hover:underline">Terms & Conditions</a></li>
                <li><a href="#" className="text-[#0D6EFD] hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="text-[#0D6EFD] hover:underline">Refund Policy</a></li>
                <li><a href="#" className="text-[#0D6EFD] hover:underline">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Testimonials; 