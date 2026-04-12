export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1762086897132-06c07fe78ae1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbmZyYXN0cnVjdHVyZSUyMHdhdGVyJTIwbWFuYWdlbWVudHxlbnwxfHx8fDE3Njk2ODA2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl mb-6">KRISHNA ENTERPRISES</h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Our mission is to deliver innovative, sustainable and efficient engineering solutions that exceed client expectations while contributing to the development of infrastructure and communities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
          >
            Learn More
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white rounded-lg transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}