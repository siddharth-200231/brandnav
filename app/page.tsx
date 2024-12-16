import Hero from "@/components/Hero";
import WeaponSection from "@/components/WeaponSection";
import LeadsDatabase from "@/components/LeadsDatabase";
import PricingSection from "@/components/PricingSection";
import WhyBrandNav from "@/components/WhyBrandNav";
import PinpointCustomer from "@/components/PinpointCustomer";
import FixDataAccuracy from "@/components/FixDataAccuracy";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="pt-20 pb-16 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-navy-900 mb-6">
              <span className="block">Weapons to Grow</span>
              <span className="block">Your Business</span>
            </h1>
            
            <div className="max-w-2xl mx-auto px-4 sm:px-6">
              <p className="text-lg sm:text-xl text-gray-600 mb-8">
                <span className="block">Turbocharge your business growth.</span>
                <span className="block mt-2">Our products help ignite sales and entrepreneurship.</span>
              </p>
            </div>

            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-base sm:text-lg font-medium">
              Start for free
            </button>

            <div className="mt-6 text-sm sm:text-base text-gray-500 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2">
              <span>No credit card required</span>
              <span className="hidden sm:inline">|</span>
              <div className="flex items-center">
                <span className="text-yellow-400">★★★★★</span>
                <span className="ml-1">4.8/5 G2 Rating</span>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Email Verifier Card */}
              <div className="bg-white p-8 rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                <h3 className="text-lg font-semibold text-[#1E1B4B] mb-8">Email verifier</h3>
                <div className="relative w-48 h-48 mx-auto mb-8">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[32px] font-bold text-[#1E1B4B]">5,689</span>
                    <span className="text-[#6B7280] text-sm ml-2">Valid</span>
                  </div>
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    {/* Background circles */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="8"
                    />
                    {/* Valid segment (green) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#4ADE80"
                      strokeWidth="8"
                      strokeDasharray="220"
                      strokeDashoffset="60"
                    />
                    {/* Invalid segment (blue) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#60A5FA"
                      strokeWidth="8"
                      strokeDasharray="80"
                      strokeDashoffset="-160"
                    />
                    {/* Catch-all segment (red) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#F87171"
                      strokeWidth="8"
                      strokeDasharray="40"
                      strokeDashoffset="-240"
                    />
                  </svg>
                </div>
                <div className="flex justify-center gap-6 text-sm">
                  <div className="flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4ADE80] mr-2"></span>
                    <span className="text-[#6B7280]">Valid</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#60A5FA] mr-2"></span>
                    <span className="text-[#6B7280]">Invalid</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F87171] mr-2"></span>
                    <span className="text-[#6B7280]">Catch-all</span>
                  </div>
                </div>
              </div>

              {/* Ecom Brands Card */}
              <div className="bg-white p-8 rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-[#EEF2FF] rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-[#0D6EFD]" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4h16v16H4V4zm1 1v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h10v2H7v-2z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="text-[56px] font-bold text-[#0D6EFD] leading-none">14.5M+</div>
                </div>
                <div className="text-[#6B7280]">ecom brands</div>
              </div>

              {/* Deliverability Card */}
              <div className="bg-white p-8 rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-[#EEF2FF] rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-[#0D6EFD]" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="text-[56px] font-bold text-[#0D6EFD] leading-none">100%</div>
                </div>
                <div className="text-[#6B7280]">deliverability</div>
              </div>

              {/* Enricher Lookup Card */}
              <div className="bg-white p-8 rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                <h3 className="text-[20px] font-semibold text-[#1E1B4B] mb-6">Enricher lookup</h3>
                <div className="space-y-6">
                  {[
                    {
                      name: "Alexandria Wayt",
                      role: "Senior product manager",
                      image: "/alexa.png"
                    },
                    {
                      name: "Michael Taylor",
                      role: "Sales executive",
                      image: "/john.png"
                    },
                    {
                      name: "Murphy Hamilton",
                      role: "Sales executive",
                      image: "/nancy.png"
                    },
                  ].map((person, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img src={person.image} alt={person.name} className="w-12 h-12 rounded-full object-cover" />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-[15px] font-medium text-[#1E293B]">{person.name}</span>
                              <span className="text-xs px-2 py-0.5 bg-[#ECFDF5] text-[#059669] rounded-full font-medium">
                                Verified
                              </span>
                            </div>
                            <p className="text-[13px] text-[#64748B]">{person.role}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 ml-[60px]">
                        <button className="p-2 bg-[#F1F5F9] hover:bg-[#E2E8F0] rounded-lg transition-colors">
                          <svg className="w-4 h-4 text-[#64748B]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                          </svg>
                        </button>
                        <button className="p-2 bg-[#F1F5F9] hover:bg-[#E2E8F0] rounded-lg transition-colors">
                          <svg className="w-4 h-4 text-[#64748B]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                          </svg>
                        </button>
                        <button className="p-2 bg-[#F1F5F9] hover:bg-[#E2E8F0] rounded-lg transition-colors">
                          <svg className="w-4 h-4 text-[#64748B]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Modern companies section */}
          <div className="text-center mt-20">
            <p className="text-lg text-gray-600 mb-8">
              Modern companies are using BrandNav
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <img src="/sentry-ecom.png" alt="Sentry Ecom" className="h-8" />
              <img src="/xlr-media.png" alt="XLR Media" className="h-8" />
              <img src="/utrech-clerk.png" alt="Utrech Clerk" className="h-8" />
              <img src="/cg.png" alt="CG" className="h-8" />
              <img src="/acexmedia.png" alt="Acexmedia" className="h-8" />
            </div>
          </div>

          {/* Weapon and Leads sections */}
          <WeaponSection />
          <LeadsDatabase />
        </div>

        {/* Full-width sections */}
        <div className="w-full">
          <PricingSection />
          <WhyBrandNav />
          <PinpointCustomer />
          <FixDataAccuracy />
          <Testimonials />
        </div>
      </main>
    </div>
  );
}