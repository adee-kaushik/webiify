

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-21 md:py-32 bg-brand-bg dark:bg-brand-bg-dark transition-colors">
      <h1 className="font-display text-4xl md:text-5xl font-semibold text-brand-text dark:text-white leading-tight max-w-2xl animate-fade-in-up">
        Ready-to-launch websites for Indian Businesses
      </h1>
      <p className="mt-4 font-body text-lg text-brand-muted dark:text-gray-400 max-w-lg animate-fade-in-up [animation-delay:150ms]">
        Choose a design, share your details, and get a live website in a day.
      </p>
      <a
        href="#templates"
        className="inline-block mt-8 px-6 py-3 bg-brand-accent text-white font-body font-semibold rounded-lg hover:opacity-90 animate-fade-in-up [animation-delay:300ms]"
      >
        View Templates
      </a>
    </section>
  );
}

export default Hero;