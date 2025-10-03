import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [yScroll, setYScroll] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setYScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`h-16 w-full px-4 z-20 ${
        yScroll > 20
          ? "bg-white text-black shadow-lg border-b border-teal-200"
          : "bg-transparent text-white"
      } flex items-center justify-center sticky top-0 transition-all duration-300`}
    >
      <div className="flex items-center justify-between w-full max-w-[1400px] h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 select-none" onClick={closeMobileMenu}>
          <img src="https://cdn.pixabay.com/photo/2022/08/25/18/45/nautical-logo-7411051_1280.png" alt="School Games Logo" className="h-8 w-8" />
          <h1 className={`font-bold text-lg sm:text-xl whitespace-nowrap ${
            yScroll > 20 ? "text-teal-600" : "text-white"
          }`}>
            School Games
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-end font-medium">
          <ul className="flex items-center justify-end gap-x-6">
            <li className="text-lg">
              <Link 
                to="/about" 
                className={`hover:text-teal-600 transition-colors duration-200 ${
                  yScroll > 20 ? "text-gray-700 hover:text-teal-600" : "text-white hover:text-white/80"
                }`}
              >
                About
              </Link>
            </li>
            <li className="text-lg">
              <Link 
                to="/tournaments" 
                className={`hover:text-teal-600 transition-colors duration-200 ${
                  yScroll > 20 ? "text-gray-700 hover:text-teal-600" : "text-white hover:text-white/80"
                }`}
              >
                Tournaments
              </Link>
            </li>
            <li className="text-lg">
              <Link 
                to="/register" 
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  yScroll > 20 
                    ? "bg-teal-600 text-white hover:bg-teal-700 shadow-md hover:shadow-lg" 
                    : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                }`}
              >
                Register
              </Link>
            </li>
            <li className="text-lg">
              <Link 
                to="/login" 
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  yScroll > 20 
                    ? "bg-gray-800 text-white hover:bg-gray-900 shadow-md hover:shadow-lg" 
                    : "bg-gray-800/80 text-white hover:bg-gray-800 backdrop-blur-sm"
                }`}
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
            yScroll > 20 
              ? "text-gray-700 hover:bg-gray-100" 
              : "text-white hover:bg-white/10"
          }`}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg border-b border-teal-200 md:hidden">
          <nav className="px-4 py-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  to="/about" 
                  className="block px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/tournaments" 
                  className="block px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  Tournaments
                </Link>
              </li>
              <li>
                <Link 
                  to="/register" 
                  className="block px-4 py-2 bg-teal-600 text-white hover:bg-teal-700 rounded-lg font-semibold transition-colors duration-200 text-center"
                  onClick={closeMobileMenu}
                >
                  Register
                </Link>
              </li>
              <li>
                <Link 
                  to="/login" 
                  className="block px-4 py-2 bg-gray-800 text-white hover:bg-gray-900 rounded-lg font-semibold transition-colors duration-200 text-center"
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
