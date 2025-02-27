import { Link, Route, Routes } from "react-router-dom";

// Import your components here
import { useState } from "react";
import AboutUs from "./containers/AboutUs";
import ContactUs from "./containers/ContactUs";
import Home from "./containers/Home";
import Footer from "./containers/Footer";
import TermsAndPrivacyPage from "./containers/TermsAndPrivacy";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <header className="pr-4 lg:px-6 h-16 flex items-center justify-between">
        <Link to={"/"} className="flex items-center">
          <LogoIcon className="h-15 w-20" />
          <div>
            <span className="text-lg md:text-2xl font-bold block md:block whitespace-nowrap">
              <b>AD Equipment & Technologies</b>
              <div className="border-t border-brandBorder"></div>
            </span>
            <p className="text-md font-medium text-black">
              Ensuring Path to Success..
            </p>
            <div className="border-t border-black"></div>
          </div>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="/about-us"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="/contact-us"
          >
            Contact
          </Link>
        </nav>
        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden ml-4 p-2 text-[#122786] focus:outline-none bg-gray-100"
          aria-label="Toggle Navigation"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute top-16 right-4 bg-white shadow-md rounded-md z-10 p-4 md:hidden">
            <nav className="flex flex-col gap-2">
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                to="/about-us"
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                About
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                to="/contact-us"
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms-and-privacy" element={<TermsAndPrivacyPage />} />
      </Routes>
      -
      <Footer />
    </div>
  );
}

function LogoIcon(props: any) {
  return <img src="/logo.png" alt="Logo" {...props} />;
}

export default App;
