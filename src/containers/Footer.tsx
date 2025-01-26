import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg md:text-xl font-bold">
              AD Equipment & Technologies
            </h2>
            <p className="text-sm md:text-base mt-1">A-510, Sun Westbank</p>
            <p className="text-sm md:text-base">
              Near Vallabh Sadan Riverfront
            </p>
            <p className="text-sm md:text-base">
              Opp. City Gold Cinema, Ashram Rd
            </p>
            <p className="text-sm md:text-base">Ahmedabad, Gujarat – 380015</p>
            <p className="text-sm md:text-base">India</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
            <div className="mb-4 md:mb-0">
              <h3 className="font-semibold text-base md:text-lg">Contact Us</h3>
              <p className="text-sm md:text-base">
                Email:{" "}
                <a
                  href="mailto:aliasgar@adequipment.in"
                  className="text-blue-400 hover:underline"
                >
                  aliasgar@adequipment.in
                </a>
              </p>
              <p className="text-sm md:text-base">
                Phone:{" "}
                <span className="text-blue-400 hover:underline">
                  +91 9714610605 / +91 9825819947
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-xs md:text-base flex flex-col md:flex-row md:justify-between">
          <p className="text-gray-500 dark:text-gray-400 mb-2 md:mb-0">
            © {new Date().getFullYear()} AD Equipment & Technologies, All rights
            reserved.
          </p>
          <nav className="flex flex-col md:flex-row md:ml-auto gap-2 md:gap-4">
            <Link to={"/terms-and-privacy"} className="hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link to={"/terms-and-privacy"} className="hover:underline underline-offset-4">
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
