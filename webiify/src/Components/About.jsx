

function About() {
  return (
    <section id="about" className="px-6 py-20 bg-brand-teal/5 dark:bg-gray-800 transition-colors">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-3xl font-semibold text-brand-text dark:text-white mb-6">
          About Webstore
        </h2>
        <p className="font-body text-lg text-brand-muted dark:text-gray-400 leading-relaxed">
          We help businesses get online fast, without the hassle of learning website builders or hiring expensive agencies. 
          Choose a design, share your business details, and we'll take care of the rest.
        </p>
      </div>
    </section>
  );
}

export default About;