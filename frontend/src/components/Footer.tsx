import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-600 to-gray-700 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4">
        {/* Branding + Copyright */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.pixabay.com/photo/2022/08/25/18/45/nautical-logo-7411051_1280.png"
              alt="KyU Games Logo"
              className="h-8 w-8"
            />
            <h2 className="text-lg font-bold">
              <span className="text-primary-teal">KyU</span> Games
            </h2>
          </div>
          <p className="text-xs text-neutral-gray-300 text-center">
            © {new Date().getFullYear()} KyU Games. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
