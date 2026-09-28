import Reveal from './Reveal';

function HowItWorks() {
  const steps = [
    { number: "1", title: "Choose a Template", desc: "Pick a design that fits your business." },
    { number: "2", title: "Share Your Details", desc: "Send us your business info over WhatsApp." },
    { number: "3", title: "We Customize It", desc: "We build your website with your content." },
    { number: "4", title: "Go Live", desc: "Your website is deployed and ready in days." },
  ];

  return (
    <section className="relative px-6 py-14 bg-linear-to-b from-brand-bg to-brand-teal/5 dark:from-brand-bg-dark dark:to-gray-900 transition-colors overflow-hidden">
      <div className="absolute top-0 right-10 w-60 h-60 bg-brand-accent/10 rounded-full blur-3xl animate-blob [animation-delay:5s]"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-center text-brand-text dark:text-white mb-12">
            How It Works
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.12}>
              <div className="w-10 h-10 mx-auto flex items-center justify-center rounded-full bg-brand-teal text-white font-body font-semibold mb-4">
                {step.number}
              </div>
              <h3 className="font-display text-lg font-semibold text-brand-text dark:text-white">{step.title}</h3>
              <p className="font-body text-sm text-brand-muted dark:text-gray-400 mt-2">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;