const FixDataAccuracy = () => {
  return (
    <section className="w-full py-16 bg-[#FAFBFF]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1E1B4B]">
            Fix data accuracy problems
            <br />
            with BrandNav
          </h2>
        </div>

        {/* Before & After Images */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 mb-10">
          {/* Before */}
          <div className="relative w-full max-w-[500px]">
            <div className="absolute -left-6 -top-6 w-[250px] h-[250px] bg-[#FFE4E4] rounded-full opacity-30 blur-[60px]" />
            <div className="relative">
              <div className="bg-[#FFF8F8] rounded-[24px] p-6">
                {/* Failed Delivery Notifications */}
                <div className="absolute -top-4 left-10 bg-white rounded-xl shadow-md p-2 rotate-[-6deg] z-10">
                  <div className="flex items-center gap-1">
                    <div className="w-5 h-5 bg-[#FF4D4D] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="text-xs font-medium">Failed Delivery</span>
                  </div>
                  <div className="mt-1 text-xs text-[#FF4D4D]">Outdated Emails</div>
                </div>

                <img
                  src="/before.png"
                  alt="Before data accuracy"
                  className="w-fit h-fit rounded-2xl relative z-0"
                />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[#FF4D4D] font-medium bg-white px-6 py-1 rounded-t-2xl shadow-sm">
                Before
              </div>
            </div>
          </div>

          {/* After */}
          <div className="relative w-full max-w-[500px]">
            <div className="absolute -right-6 -top-6 w-[250px] h-[250px] bg-[#E4F2FF] rounded-full opacity-30 blur-[60px]" />
            <div className="relative">
              <div className="bg-[#F8FBFF] rounded-[24px] p-6">
                {/* Verified Badge */}
                <div className="absolute -top-3 right-10 bg-white rounded-xl shadow-md p-1 z-10">
                  <div className="w-6 h-6 bg-[#0D6EFD] bg-opacity-10 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#0D6EFD]" viewBox="0 0 24 24" fill="none">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>

                <img
                  src="/after.png"
                  alt="After data accuracy"
                  className="w-full rounded-2xl relative z-0"
                />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[#0D6EFD] font-medium bg-white px-6 py-1 rounded-t-2xl shadow-sm">
                After
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-24">
          <button className="bg-[#0D6EFD] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
            Grab free leads
          </button>
          <div className="mt-3 flex items-center justify-center gap-3 text-xs text-[#6B7280]">
            <div className="flex items-center gap-1">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
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

        {/* Who is using section */}
        <div className="mt-20 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1E1B4B] mb-2">
            Who is using BrandNav?
          </h2>
          <p className="text-[#6B7280] text-sm mb-10">
            BrandNav has become an irreplaceable tool for businesses
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6 text-[#0D6EFD]" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="currentColor"/>
                  </svg>
                ),
                title: "Sales & Marketing Teams",
                description: "Sales and marketing teams are using BrandNav to efficiently locate and verify prospect contact information and identify key decision-makers."
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-[#0D6EFD]" viewBox="0 0 24 24" fill="none">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                  </svg>
                ),
                title: "Software & IT Companies",
                description: "IT companies are using BrandNav to build lists for outreach, identify target organizations, and verify email addresses of leads to improve email deliverability."
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-[#0D6EFD]" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" fill="currentColor"/>
                  </svg>
                ),
                title: "Service Providers",
                description: "Service providers use BrandNav to locate accurate emails, build contact lists, and improve sales efficiency."
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-[#0D6EFD]" viewBox="0 0 24 24" fill="none">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor"/>
                  </svg>
                ),
                title: "Recruiters",
                description: "Recruiters are using BrandNav to locate and verify the email addresses of job candidates, build a talent pool, and streamline their hiring process."
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-[#0D6EFD]" viewBox="0 0 24 24" fill="none">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="currentColor"/>
                  </svg>
                ),
                title: "Backlinks Outreach",
                description: "SEO link builders are using BrandNav to locate and verify the email addresses of potential link partners, and build outreach lists for link-building purposes."
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-[#0D6EFD]" viewBox="0 0 24 24" fill="none">
                    <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="currentColor"/>
                  </svg>
                ),
                title: "Investors",
                description: "Investors are using BrandNav to quickly find and verify contact information for key executives and decision-makers and streamline their workflow."
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-4">
                <div className="w-12 h-12 bg-[#0D6EFD] bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  {item.icon}
                </div>
                <h3 className="text-[#1E1B4B] text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12">
            <button className="bg-[#0D6EFD] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
              Grab free leads
            </button>
            <div className="mt-3 flex items-center justify-center gap-3 text-xs text-[#6B7280]">
              <div className="flex items-center gap-1">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
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
    </section>
  );
};

export default FixDataAccuracy; 