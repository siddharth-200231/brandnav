const WhyBrandNav = () => {
  return (
    <section className="w-full py-12 sm:py-20 bg-[#FAFBFF]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-[40px] font-bold text-[#1E1B4B] mb-4">
            Why should you use BrandNav?
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280]">
            Optimize your workflow for faster results and higher revenue
          </p>
        </div>

        {/* First Feature - Enrich CSV (Image on left) */}
        <div className="w-full lg:grid lg:grid-cols-2 lg:gap-20 items-center mb-20 sm:mb-32">
          {/* Left side - Image */}
          <div className="relative w-full mb-12 lg:mb-0">
            <div className="relative w-full">
              <div className="absolute -left-8 sm:-left-16 -top-8 sm:-top-16 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#EEF2FF] rounded-full opacity-50 blur-3xl" />
              <div className="absolute right-0 bottom-0 w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] bg-blue-50 rounded-full opacity-50 blur-3xl" />
              <div className="relative z-10 w-full">
                <img
                  src="/dashboard.png"
                  alt="Dashboard Preview"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:pl-12">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#FFF4DE] rounded-xl flex items-center justify-center">
                  <img src="/csv-icon.svg" alt="CSV" className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-[28px] font-bold text-[#1E1B4B] mb-3 sm:mb-4">
                  Enrich any CSV
                </h3>
                <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed">
                  BrandNav transforms your CSV files by adding valuable contact, 
                  firmographics, and technographics data. With just a few clicks, you 
                  can enhance your data with enriched information and unlock new 
                  insights and opportunities.
                </p>
                <div className="mt-6 sm:mt-8">
                  <button className="w-full sm:w-auto bg-[#0D6EFD] text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-base font-medium">
                    Grab free leads
                  </button>
                  <div className="mt-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-sm text-[#6B7280]">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <rect width="24" height="24" rx="12" fill="#F3F4F6"/>
                        <path d="M7 13l3 3L17 8" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>No credit card required</span>
                    </div>
                    <span className="hidden sm:inline text-[#D1D5DB]">|</span>
                    <div className="flex items-center">
                      <span className="text-[#FBBF24]">★★★★★</span>
                      <span className="ml-1">4.8/5 G2 Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Feature - Fresh Data Updates (Image on right) */}
        <div className="w-full lg:grid lg:grid-cols-2 lg:gap-20 items-center mb-20 sm:mb-32">
          {/* Left side - Content */}
          <div className="w-full mb-12 lg:mb-0">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#EEF6FF] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#0D6EFD]" viewBox="0 0 24 24" fill="none">
                    <path d="M20 12V8H4V12M20 12V16H4V12M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-[28px] font-bold text-[#1E1B4B] mb-3 sm:mb-4">
                  Fresh data updates everyday
                </h3>
                <p className="text-[#6B7280] text-lg leading-relaxed">
                  BrandNav updates its data every day, providing the most recent and 
                  accurate information to its users. With a constant stream of new 
                  information, BrandNav ensures that users have access to the latest 
                  contact, firmographics, and technographics data for better decision-making.
                </p>
                <div className="mt-8">
                  <button className="bg-[#0D6EFD] text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-base font-medium">
                    Grab free leads
                  </button>
                  <div className="mt-4 flex items-center gap-4 text-sm text-[#6B7280]">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <rect width="24" height="24" rx="12" fill="#F3F4F6"/>
                        <path d="M7 13l3 3L17 8" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>No credit card required</span>
                    </div>
                    <span className="text-[#D1D5DB]">|</span>
                    <div className="flex items-center">
                      <span className="text-[#FBBF24]">★★★★★</span>
                      <span className="ml-1">4.8/5 G2 Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative w-full">
            <div className="absolute -right-16 -top-16 w-[400px] h-[400px] bg-[#EEF2FF] rounded-full opacity-50 blur-3xl" />
            <div className="absolute left-0 bottom-0 w-[200px] h-[200px] bg-blue-50 rounded-full opacity-50 blur-3xl" />
            <div className="relative z-10 w-full">
              <img
                src="/fresh-data-preview.png"
                alt="Fresh Data Updates"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Third Feature - Advanced Search (Image on left) */}
        <div className="w-full lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left side - Image */}
          <div className="relative w-full mb-12 lg:mb-0">
            <div className="relative w-full">
              <div className="absolute -left-8 sm:-left-16 -top-8 sm:-top-16 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#EEF2FF] rounded-full opacity-50 blur-3xl" />
              <div className="absolute right-0 bottom-0 w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] bg-blue-50 rounded-full opacity-50 blur-3xl" />
              <div className="relative z-10 w-full">
                <img
                  src="/advanced-search-preview.png"
                  alt="Advanced Search Preview"
                  className="w-full rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:pl-12">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#F3E8FF] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#9333EA]" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-[28px] font-bold text-[#1E1B4B] mb-3 sm:mb-4">
                  Advanced search with 25+ unique filters
                </h3>
                <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed">
                  BrandNav offers over 25+ filters to help users build highly segmented 
                  lists for better prospecting. With BrandNav, you can create highly 
                  targeted lists that are tailored to your specific needs, streamlining 
                  your workflow and maximizing your productivity.
                </p>
                <div className="mt-6 sm:mt-8">
                  <button className="w-full sm:w-auto bg-[#0D6EFD] text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-base font-medium">
                    Grab free leads
                  </button>
                  <div className="mt-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-sm text-[#6B7280]">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <rect width="24" height="24" rx="12" fill="#F3F4F6"/>
                        <path d="M7 13l3 3L17 8" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>No credit card required</span>
                    </div>
                    <span className="hidden sm:inline text-[#D1D5DB]">|</span>
                    <div className="flex items-center">
                      <span className="text-[#FBBF24]">★★★★★</span>
                      <span className="ml-1">4.8/5 G2 Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBrandNav; 