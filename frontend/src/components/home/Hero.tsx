import { Link } from 'react-router-dom';
import heroAnimation from "../../assets/hero-animation.json";
import Lottie from "lottie-react";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-emerald-400 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative h-full flex flex-col lg:flex-row items-center overflow-hidden">
        {/* Left Content */}
        <div className="relative z-20 w-full lg:w-1/2 px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 border border-teal-200 rounded-full text-teal-700 font-semibold text-sm mb-6 backdrop-blur-sm">
            Interactive Learning Platform
            </div>
            
            {/* Main Heading */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">Learning</span><br />
              Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Competition</span>
            </h3>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Transform your education through <span className="font-bold text-teal-600">gamified learning</span> experiences that make studying fun and engaging
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <button className="group px-10 py-5 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-teal-500/25 transform hover:scale-105 transition-all duration-300">
                <span className="flex items-center justify-center gap-3">
                  Start Your Journey
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <Link 
                to="/tournaments" 
                className="group px-10 py-5 bg-white/90 backdrop-blur-sm text-gray-800 border-2 border-teal-200 hover:border-teal-300 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-teal-50"
              >
                <span className="flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  View Tournaments
                </span>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40">
                <div className="text-3xl font-bold text-teal-600 mb-2">500+</div>
                <div className="text-sm text-gray-600 font-medium">Active Students</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40">
                <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
                <div className="text-sm text-gray-600 font-medium">Games Available</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40">
                <div className="text-3xl font-bold text-cyan-600 mb-2">95%</div>
                <div className="text-sm text-gray-600 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Animation */}
        <div className="relative z-10 w-full lg:w-1/2 h-full flex items-center justify-center mt-8 lg:mt-0">
          <div className="w-full h-full max-w-2xl">
            <div className="relative">
              {/* Animation Container with Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>
              <Lottie 
                animationData={heroAnimation} 
                loop={true} 
                className="w-full h-full relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero;