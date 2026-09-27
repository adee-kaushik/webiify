function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 py-16 md:py-20 bg-brand-bg dark:bg-brand-bg-dark transition-colors overflow-hidden">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-brand-teal/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-24 -right-16 w-80 h-80 bg-brand-accent/20 rounded-full blur-3xl animate-blob [animation-delay:2s]"></div>

      <div className="relative z-10 max-w-2xl">
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-brand-text dark:text-white leading-tight animate-fade-in-up">
          Ready-to-launch websites for every small business
        </h1>
        <p className="mt-4 font-body text-lg text-brand-muted dark:text-gray-400 max-w-lg mx-auto animate-fade-in-up [animation-delay:150ms]">
          Whatever your business — cafe, gym, salon, clinic, or anything else — choose a design, share your details, and get a live website in days.
        </p>
        <a
          href="#templates"
          className="inline-block mt-6 px-6 py-3 bg-brand-accent text-white font-body font-semibold rounded-lg hover:opacity-90 animate-fade-in-up [animation-delay:300ms]"
        >
          View Templates
        </a>
      </div>
    </section>
  );
}

export default Hero;