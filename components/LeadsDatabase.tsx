const LeadsDatabase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
              The ultimate eCom leads database
            </h2>
            <p className="text-gray-600 mb-8">
              Get powerful insights of 99.99% eCommerce and DTC brands that can help you build your ideal prospect list.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Try for free
              </button>
              <button className="px-6 py-2 text-blue-600 hover:text-blue-700 flex items-center gap-2">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="relative">
              <img
                src="/dashboard-preview.png"
                alt="Dashboard Preview"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadsDatabase; 