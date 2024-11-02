import { Link, Route, Routes } from "react-router-dom";

// Import your components here
import AboutUs from "./containers/AboutUs";
import ContactUs from "./containers/ContactUs";
import Home from "./containers/Home";
import Partners from "./containers/Partner";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" to="/">
          <LogoIcon className="h-12 w-12" />
          <span>AD Equipment & Technologies</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="/partners"
          >
            Partners
          </Link>
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
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 AD Equipment & Technologies, All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function LogoIcon(props: any) {
  return <img src="/logo.png" alt="Logo" {...props} />;
}

export default App;
