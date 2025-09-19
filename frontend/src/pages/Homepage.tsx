

const Homepage = () => {
  return (
    <div className="min-h-screen bg-school-gradient">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/30 via-transparent to-secondary-teal/30"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-gray-900 mb-6">
            Welcome to <span className="text-primary-blue">School</span> <span className="text-secondary-teal">Games</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-gray-700 mb-8">
            Compete, Learn, and Excel in Educational Gaming
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-secondary-teal text-white rounded-lg font-semibold text-lg hover:bg-secondary-teal-dark shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Start Playing
            </button>
            <button className="px-8 py-4 bg-primary-blue text-white rounded-lg font-semibold text-lg hover:bg-primary-blue-dark shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              View Tournaments
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-neutral-gray-900 mb-16">
            Why Choose School Games?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-secondary-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-gray-900 mb-2">Interactive Learning</h3>
              <p className="text-neutral-gray-700">Engage with educational content through fun, interactive games.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-gray-900 mb-2">Competitive Spirit</h3>
              <p className="text-neutral-gray-700">Compete with peers and climb the leaderboards.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-accent-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-blue">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-gray-900 mb-2">Educational Focus</h3>
              <p className="text-neutral-gray-700">Learn while having fun with curriculum-aligned content.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage