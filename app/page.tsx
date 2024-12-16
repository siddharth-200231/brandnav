import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
            <span className="block">Weapons to</span>
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Grow Your Business</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            Turbocharge your business growth.

            Our products help ignite sales and entrepreneurship.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="px-8 py-3 rounded-md text-white max-w-fit mx-auto bg-blue-600 hover:bg-blue-700 transition-colors font-medium text-lg"
            >
              Start Free Trial
            </a>

          </div>

          {/* Trust badges */}
          <div className="mt-16">
            <p className="text-sm text-gray-500 mb-6">No credit card required
              |
              rating-star
              4.8/5 G2 Rating</p>
            <div className="flex justify-center items-center space-x-12 grayscale opacity-60">
              {/* Add your client logos here */}
              {/* Example: */}
              <img src="/client-logo-1.png" alt="Client" className="h-8" />
              <img src="/client-logo-2.png" alt="Client" className="h-8" />
              <img src="/client-logo-3.png" alt="Client" className="h-8" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
