function HowItWorks() {
  const steps = [
    { number: "1", title: "Choose a Template", desc: "Pick a design that fits your business." },
    { number: "2", title: "Share Your Details", desc: "Send us your business info over WhatsApp." },
    { number: "3", title: "We Customize It", desc: "We build your website with your content." },
    { number: "4", title: "Go Live", desc: "Your website is deployed and ready in days." },
  ];

  return (
    <section className="px-6 py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {steps.map((step) => (
          <div key={step.number} className="text-center">
            <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg mb-4">
              {step.number}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{step.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;