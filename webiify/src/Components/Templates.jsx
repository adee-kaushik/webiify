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

  const categoryDemos = {
    "Textile & Garment Shops": {
      Starter: "https://starter-amber-five.vercel.app",
    },
  };

  const plans = [
    { tier: "Starter", price: "₹1,999", recommended: false },
    { tier: "Business", price: "₹4,599", recommended: true },
    { tier: "Pro", price: "₹8,999", recommended: false },
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
          {plans.map((plan) => {
            const demoLink = categoryDemos[selectedCategory]?.[plan.tier];
            const CardWrapper = demoLink ? "a" : "div";

            return (
              <CardWrapper
                key={plan.tier}
                {...(demoLink && { href: demoLink, target: "_blank", rel: "noopener noreferrer" })}
                className={`relative rounded-xl p-6 text-center hover:scale-105 transition duration-300 block ${
                  plan.recommended
                    ? "bg-brand-teal/5 dark:bg-gray-800 shadow-lg"
                    : "border border-brand-teal/15 dark:border-gray-700"
                } ${demoLink ? "cursor-pointer" : ""}`}
              >
                {plan.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-accent text-white text-xs font-body font-semibold px-3 py-1 rounded-full">
                    Recommended
                  </span>
                )}
                <div className="h-40 bg-brand-teal/5 dark:bg-gray-800 rounded-lg mb-4 flex items-center justify-center text-brand-muted">
                  Preview
                </div>
                <h3 className="font-display text-xl font-semibold text-brand-text dark:text-white">
                  {selectedCategory} — {plan.tier}
                </h3>
                <p className="font-body text-2xl font-semibold text-brand-accent mt-2">
                  {plan.price}
                </p>
                {demoLink ? (
                  <p className="text-sm font-semibold text-brand-teal mt-1">View Demo →</p>
                ) : (
                  <p className="text-sm text-brand-muted mt-1">Coming Soon</p>
                )}
              </CardWrapper>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Templates;