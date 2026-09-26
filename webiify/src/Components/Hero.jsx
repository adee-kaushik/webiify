function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gray-50">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-2xl">
        Ready-to-launch websites for Indian Businesses,
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-xl">
        Choose a design, share your details, and get a live website in days — no coding, no hassle.
      </p>
      <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
        View Templates
      </button>
    </section>
  );
}

export default Hero;