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
          ? "bg-secondary-white text-black shadow-lg border-b border-primary-teal/20"
          : "bg-transparent text-secondary-white"
      } flex items-start justify-center sticky top-0 transition-all duration-300`}
    >
      <div className="flex items-center justify-between w-full max-w-[1400px] h-full">
        <Link to="/" className="flex items-center gap-2 select-none">
          <img src="https://cdn.pixabay.com/photo/2022/08/25/18/45/nautical-logo-7411051_1280.png" alt="School Games Logo" className="h-8 w-8" />
          <h1 className={`font-bold text-lg xs:text-4xl whitespace-nowrap ${
            yScroll > 20 ? "text-primary-teal" : "text-secondary-white"
          }`}>
            School Games
          </h1>
        </Link>
        <nav className="w-full items-center justify-end font-medium">
          <ul className="flex items-center justify-end gap-x-6">
            <li className="text-lg">
              <Link 
                to="/about" 
                className={`hover:text-primary-teal transition-colors duration-200 ${
                  yScroll > 20 ? "text-neutral-gray-700 hover:text-primary-teal" : "text-secondary-white hover:text-secondary-white/80"
                }`}
              >
                About
              </Link>
            </li>
            <li className="text-lg">
              <Link 
                to="/tournaments" 
                className={`hover:text-primary-teal transition-colors duration-200 ${
                  yScroll > 20 ? "text-neutral-gray-700 hover:text-primary-teal" : "text-secondary-white hover:text-secondary-white/80"
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
                    ? "bg-primary-teal text-secondary-white hover-primary-teal shadow-md hover:shadow-lg" 
                    : "bg-secondary-white/20 text-secondary-white hover:bg-secondary-white/30 backdrop-blur-sm"
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
                    ? "bg-neutral-black text-secondary-white hover:primary-teal shadow-md hover:shadow-lg" 
                    : "bg-neutral-black/80 text-secondary-white hover:bg-neutral-black backdrop-blur-sm"
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
