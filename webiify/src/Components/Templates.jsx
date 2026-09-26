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

  function handleSelect(category) {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  }

  return (
    <section id="templates" className="px-6 py-20 bg-white dark:bg-gray-900 transition-colors">
  <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
        Our Templates
      </h2>

      <div className={`whitespace-nowrap px-5 py-2 rounded-full border font-medium transition ${
  selectedCategory === category
    ? "bg-blue-600 text-white border-blue-600"
    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400"
}`}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleSelect(category)}
            className={`whitespace-nowrap px-5 py-2 rounded-full border font-medium transition ${
              selectedCategory === category
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="border dark:border-gray-700 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition"
            >
              <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 flex items-center justify-center text-gray-400">
                Preview
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white>
                {selectedCategory} Template {num}
              </h3>
              <p className="text-sm text-gray-500 mt-1">Coming Soon</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Templates;