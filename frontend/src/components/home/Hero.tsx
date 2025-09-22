import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="min-h-screen bg-school-gradient">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/30 via-transparent to-secondary-teal/30"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-gray-900 mb-6">
            Welcome to <span className="text-secondary-white">School</span> <span className="text-primary-teal">Games</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-gray-700 mb-8">
            Compete, Learn, and Excel in Educational Gaming
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary-teal text-secondary-white rounded-lg font-semibold text-lg hover-primary-teal shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Start Playing
            </button>
            <Link to="/tournaments" className="px-8 py-4 bg-neutral-black text-secondary-white rounded-lg font-semibold text-lg hover:opacity-90 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              View Tournaments
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero;