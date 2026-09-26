import { useState } from 'react';

function Templates() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    "Cafes",
    "Restaurants & Banquets",
    "Gyms",
    "Salons",
    "Hotels",
    "Textile & Garment Shops",
    "Jewellery Shops",
    "Clinics",
    "Coaching Institutes",
  ];

  const plans = [
    { tier: "Starter", price: "₹1,999" },
    { tier: "Business", price: "₹4,599" },
    { tier: "Pro", price: "₹8,999" },
  ];

  function handleSelect(category) {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  }

  return (
    <section id="templates" className="px-6 py-20 bg-brand-bg dark:bg-brand-bg-dark transition-colors">
      <h2 className="font-display text-3xl font-semibold text-center text-brand-text dark:text-white mb-10">
        Our Templates
      </h2>

      <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleSelect(category)}
            className={`whitespace-nowrap px-5 py-2 rounded-full border font-body font-medium transition ${
              selectedCategory === category
                ? "bg-brand-teal text-white border-brand-teal"
                : "bg-transparent text-brand-text dark:text-gray-300 border-brand-teal/30 dark:border-gray-600 hover:border-brand-teal"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8 animate-fade-in-up">
          {plans.map((plan, index) => (
            <div
              key={plan.tier}
              className="border border-brand-teal/15 dark:border-gray-700 rounded-xl p-6 text-center hover:scale-105 transition duration-300"
            >
              <div className="h-40 bg-brand-teal/5 dark:bg-gray-800 rounded-lg mb-4 flex items-center justify-center text-brand-muted">
                Preview
              </div>
              <h3 className="font-display text-xl font-semibold text-brand-text dark:text-white">
                {selectedCategory} : {plan.tier}
              </h3>
              <p className="font-body text-2xl font-semibold text-brand-accent mt-2">
                {plan.price}
              </p>
              <p className="text-sm text-brand-muted mt-1">Coming Soon</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Templates;