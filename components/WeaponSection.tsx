"use client";

const WeaponSection = () => {
  const weapons = [
    {
      title: "Screener Search",
      description: "Build your list with advanced search filters",
      icon: <img src="/ScreenIcon.png" alt="Screener" className="w-16 h-16" />,
    },
    {
      title: "Enricher Lookup",
      description: "Get verified contact information from Enricher",
      icon: <img src="/EnricherIcon.png" alt="Enricher" className="w-16 h-16" />,
    },
    {
      title: "Email Verifier",
      description: "Reduce bounces with 100% verified emails",
      icon: <img src="/EmailIcon.png" alt="Email" className="w-16 h-16" />,
    },
    {
      title: "Blacklist Shield",
      description: "Monitor and boost your email deliverability",
      icon: <img src="/SheildIcon.png" alt="Shield" className="w-16 h-16" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-200 via-white to-blue-100">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-900 mb-4">
          Choose Your Weapon
        </h2>
        <p className="text-gray-600">
          BrandNav is a multi-dimensional platform designed for revenue growth
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {weapons.map((weapon, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="mb-6 w-16 h-16 flex items-center justify-center">
              {weapon.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              {weapon.title}
            </h3>
            <p className="text-gray-600">{weapon.description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The ultimate eCom leads database
          </h2>
          <p className="text-gray-600 mb-8">
            Discover untapped eCommerce brands with our high-quality unsaturated leads database.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
              Try for free
            </button>
            <button className="text-blue-500 flex items-center gap-2">
              Learn more <span>→</span>
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img 
            src="/dashboardimg.png" 
            alt="Dashboard Preview" 
            className="w-full max-h-fit max-w-fit mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WeaponSection; 