"use client";

const WeaponSection = () => {
  const weapons = [
    {
      title: "Screener Search",
      description: "Build your list with advanced search filters",
      icon: "🔍",
    },
    {
      title: "Enricher Lookup",
      description: "Get verified contact information from Enricher",
      icon: "📊",
    },
    {
      title: "Email Verifier",
      description: "Reduce bounces with 100% verified emails",
      icon: "✉️",
    },
    {
      title: "Blacklist Shield",
      description: "Monitor and boost your email deliverability",
      icon: "🛡️",
    },
  ];

  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
          Choose Your Weapon
        </h2>
        <p className="text-gray-600">
          BrandNav is a multi-dimensional platform designed for revenue growth
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {weapons.map((weapon, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="mb-4 text-4xl">{weapon.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-navy-900">
              {weapon.title}
            </h3>
            <p className="text-sm text-gray-600">{weapon.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeaponSection; 