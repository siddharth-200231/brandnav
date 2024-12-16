const PinpointCustomer = () => {
  const screenerAttributes = [
    {
      icon: (
        <svg className="w-6 h-6 text-[#0D6EFD]" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" fill="currentColor"/>
        </svg>
      ),
      title: "Financials",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#0D6EFD]" viewBox="0 0 24 24" fill="none">
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" fill="currentColor"/>
        </svg>
      ),
      title: "Company Name\n& Website",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#0D6EFD]" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
        </svg>
      ),
      title: "Company\nLocation",
    },
    {
      icon: "🌐",
      title: "Country Code",
    },
    {
      icon: "👥",
      title: "Employee Count",
    },
    {
      icon: "📈",
      title: "Industry",
    },
    {
      icon: "✨",
      title: "and 20+ more",
    },
  ];

  const enricherAttributes = [
    {
      icon: "📱",
      title: "Phone",
    },
    {
      icon: "📧",
      title: "Email",
    },
    {
      icon: "👔",
      title: "Job title",
    },
    {
      icon: "💼",
      title: "Linkedin",
    },
  ];

  return (
    <section className="w-full py-20 bg-[#FAFBFF]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-[40px] font-bold text-[#1E1B4B]">
            Pinpoint your ideal customer with
            <br />
            relevant data attributes
          </h2>
        </div>

        {/* Screener Attributes */}
        <div className="mb-20">
          <h3 className="text-[#0D6EFD] text-2xl font-bold text-center mb-12">
            Screener attributes
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {screenerAttributes.map((attribute, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-[#EEF6FF] rounded-2xl flex items-center justify-center mb-4">
                  {attribute.icon}
                </div>
                <span className="text-[#1E1B4B] text-base whitespace-pre-line">{attribute.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enricher Attributes */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#0D6EFD] text-center mb-10">
            Enricher attributes
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {enricherAttributes.map((attribute, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-[#EEF6FF] rounded-xl flex items-center justify-center mb-4 text-2xl">
                  {attribute.icon}
                </div>
                <span className="text-[#1E1B4B] font-medium">{attribute.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-20 text-center">
          <button className="bg-[#0D6EFD] text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-base font-medium">
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
            <div className="flex items-center">
              <span className="text-[#FBBF24]">★★★★★</span>
              <span className="ml-1">4.8/5 G2 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PinpointCustomer; 