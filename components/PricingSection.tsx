"use client";

const PricingSection = () => {
  const features = [
    "All BrandNav features included",
    "200 Screener credits",
    "25 Enricher credits",
    "100 Verifier credits",
    "Monitor your blacklists",
    "Chat support with real humans"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#1a0b2e] to-[#2f1c4a] text-white w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center max-w-[1400px] mx-auto">
          <div className="text-center lg:text-left mb-12 lg:mb-0">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Not convinced yet?
            </h2>
            <div className="text-3xl sm:text-4xl font-bold">
              Take it for a <span className="text-[#0D6EFD]">FREE</span> spin
            </div>
            <div className="text-2xl mt-4 text-gray-300">
              before committing
            </div>
          </div>

          <div className="max-w-xl mx-auto lg:max-w-none">
            <div className="bg-white rounded-3xl p-8 text-navy-900">
              <div className="flex items-center justify-center mb-6">
                <img src="/gift-icon.png" alt="Gift" className="w-16 h-16" />
              </div>
              <div className="text-center mb-6">
                <div className="text-[#4F566B] mb-1">Free</div>
                <div className="text-5xl font-bold mb-6">$0</div>
                <button className="w-full bg-[#0D6EFD] text-white rounded-lg py-3 hover:bg-blue-700 transition-colors text-lg font-medium mb-4">
                  Grab free leads
                </button>
                <div className="flex items-center justify-center text-sm text-[#4F566B] gap-2">
                  <span>No credit card required</span>
                  <span className="text-[#4F566B]">•</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-1">4.8/5 G2 Rating</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#32D583] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#4F566B] text-base">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <div className="flex justify-center -space-x-2 mb-2">
                  {Array(6).fill(0).map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white" />
                  ))}
                  <div className="w-8 h-8 rounded-full bg-[#F9FAFB] border-2 border-white flex items-center justify-center">
                    <span className="text-sm text-[#4F566B]">10k+</span>
                  </div>
                </div>
                <div className="text-sm text-[#4F566B]">
                  Trusted by 10,000+ users
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 