function Templates() {
  const templates = [
    { name: "Cafe Template 1", status: "Coming Soon" },
    { name: "Cafe Template 2", status: "Coming Soon" },
    { name: "Cafe Template 3", status: "Coming Soon" },
  ];

  return (
    <section id="templates" className="px-6 py-20 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Our Templates
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {templates.map((template, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition"
          >
            <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
              Preview
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{template.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{template.status}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Templates;