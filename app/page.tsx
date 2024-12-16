import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen linear-gradient-bg">
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center">
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
          <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Email Verifier Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-left">Email verifier</h3>
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 mx-auto mb-6 sm:mb-8">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold">5,689</span>
                </div>
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#f0f0f0"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#4ade80"
                    strokeWidth="8"
                    strokeDasharray="220"
                    strokeDashoffset="60"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
                <span className="flex items-center"><span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-400 mr-2"></span>Valid</span>
                <span className="flex items-center"><span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-blue-400 mr-2"></span>Invalid</span>
                <span className="flex items-center"><span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-400 mr-2"></span>Catch-all</span>
              </div>
            </div>

            {/* Ecom Brands Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg flex flex-col items-center justify-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl text-blue-600 font-bold mb-2">14.5M+</div>
              <div className="text-sm sm:text-base text-gray-600">ecom brands</div>
            </div>

            {/* Deliverability Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg flex flex-col items-center justify-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl text-blue-600 font-bold mb-2">100%</div>
              <div className="text-sm sm:text-base text-gray-600">deliverability</div>
            </div>

            {/* Enricher Lookup Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-left">Enricher lookup</h3>
              <div className="space-y-3">
                {[
                  {
                    name: "Alexandria Wayt",
                    role: "Senior product manager",
                    verified: true,
                  },
                  {
                    name: "Michael Taylor",
                    role: "Sales executive",
                    verified: true,
                  },
                  {
                    name: "Murphy Hamilton",
                    role: "Sales executive",
                    verified: true,
                  },
                ].map((person, index) => (
                  <div key={index} className="flex items-center justify-between p-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-gray-900">{person.name}</span>
                          <span className="text-xs px-1.5 py-0.5 bg-green-50 text-green-700 rounded-full">Verified</span>
                        </div>
                        <p className="text-xs text-gray-500">{person.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}