import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [yScroll, setYScroll] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setYScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`h-16 w-full max-xl:px-4 z-20 ${
        yScroll > 20
          ? "bg-white text-neutral-gray-900 shadow-lg border-b border-secondary-teal/20"
          : "bg-transparent text-white"
      } flex items-start justify-center sticky top-0 transition-all duration-300`}
    >
      <div className="flex items-center justify-between w-full max-w-[1400px] h-full">
        <h1 className={`font-bold text-lg xs:text-4xl whitespace-nowrap ${
          yScroll > 20 ? "text-primary-blue" : "text-white"
        }`}>
          School Games
        </h1>
        <nav className="w-full items-center justify-end font-medium">
          <ul className="flex items-center justify-end gap-x-6">
            <li className="text-lg">
              <Link 
                to="/about" 
                className={`hover:text-secondary-teal transition-colors duration-200 ${
                  yScroll > 20 ? "text-neutral-gray-700 hover:text-secondary-teal" : "text-white hover:text-accent-lime"
                }`}
              >
                About
              </Link>
            </li>
            <li className="text-lg">
              <Link 
                to="/tournaments" 
                className={`hover:text-secondary-teal transition-colors duration-200 ${
                  yScroll > 20 ? "text-neutral-gray-700 hover:text-secondary-teal" : "text-white hover:text-accent-lime"
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
                    ? "bg-secondary-teal text-white hover:bg-secondary-teal-dark shadow-md hover:shadow-lg" 
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
                    ? "bg-primary-blue text-white hover:bg-primary-blue-dark shadow-md hover:shadow-lg" 
                    : "bg-primary-blue/80 text-white hover:bg-primary-blue backdrop-blur-sm"
                }`}
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
