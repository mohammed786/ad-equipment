import ProductSlider from "@/components/productSlider";
import Products from "./Products";

function Home() {
  return (
    <main className="flex-1">
      <ProductSlider />
      {/* <section className="w-full py-8 md:py-12 bg-gray-100 dark:bg-gray-800">
        <div className="relative container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-6">
            Who We Are
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 px-6 flex justify-center">
              <img
                src={"/images/whoweare.jpeg"}
                alt={"Who We Are"}
                className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </div>

            <div className="w-full md:w-1/2 px-6 flex flex-col justify-center">
              <div className="max-w-screen-xl mx-auto">
                <p className="text-lg mb-6">
                  Specializing in Test & Measurement Instruments and Integrated
                  Solutions for Power Electronics, Digital, RF, Electrical, and
                  Automation Projects.
                </p>

                <h2 className="text-2xl font-semibold mb-2">Products:</h2>
                <ul className="grid grid-cols-2 gap-4 text-left text-sm md:text-base">
                  <li>Oscilloscopes</li>
                  <li>Function Generators & SMU</li>
                  <li>Spectrum Analyzers & EMC Test Systems</li>
                  <li>Digital Meters (LCR, DMM, Battery)</li>
                  <li>AC & DC Power Supplies</li>
                  <li>Safety Testers & Motor Test Systems</li>
                  <li>Power Analyzers/Meters & DAQ</li>
                  <li>Surge & Impulse Simulators</li>
                  <li>DAQ Systems & Power Quality Analyzers</li>
                  <li>Thermal Imagers & Clamp Meters</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="w-full py-8 md:py-12 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-6">
          Our Products
        </h2>
        <Products />
      </section>
    </main>
  );
}

export default Home;
