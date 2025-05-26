const Hero = () => {
  return (
    <section className="bg-green-50 min-h-[100vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Seamless <span className="text-green-700">Crypto</span> &{" "}
          <span className="text-green-700">Giftcard</span> Exchange You Can
          Trust
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Trade your crypto and giftcards effortlessly at unbeatable rates —
          fast, secure, and available 24/7.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/2348123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-700 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-green-800 transition"
          >
            Get Started
          </a>
          <a
            href="#how-it-works"
            className="border border-green-700 text-green-700 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-green-100 transition"
          >
            How It Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
