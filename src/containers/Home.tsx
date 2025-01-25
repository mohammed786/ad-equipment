import ProductSlider from "@/components/productSlider";
import Partners from "./Partner";
import Products from "./Products";

function Home() {
  // const navigate = useNavigate();
  // const companies = [
  //   {
  //     name: "GW Instek",
  //     product: "GDS-2000E Series Digital Storage Oscilloscope",
  //     description:
  //       "A versatile digital storage oscilloscope offering up to 200MHz bandwidth, designed for various applications in testing and analysis.",
  //     rating: 4.5,
  //     image:
  //       "https://www.spiengineers.com/products/GDS-2000E-Series-Digital-Storage-Oscilloscopes1.jpg",
  //     url: "https://www.gwinstek.com/en-IN/products/detail/GDS-2000E",
  //   },
  //   {
  //     name: "Ainuo Instrument Co., Ltd.",
  //     product: "AN61 Series Programmable AC Test Power Source",
  //     description:
  //       "The AN61 Series is a programmable AC test power source that uses SPWM and digital processing technologies. It provides precise AC, DC, and AC+DC outputs, ideal for laboratories and production lines in power electronics, avionics, and IEC standard tests. With capabilities to simulate power grid abnormalities, it's suited for testing surge current and voltage stability.",
  //     rating: 4.5,
  //     image:
  //       "https://tiimg.tistatic.com/fp/3/007/776/an9632-f-withstand-voltage-insulation-resistance-tester-ac-dc-withstand-097.jpg",
  //     url: "https://www.ainuoworld.com/shows/140/22.html", // Placeholder - check for accuracy
  //   },
  //   {
  //     name: "Rohde & Schwarz",
  //     product: "R&S®RTM3000 Digital Oscilloscope",
  //     description:
  //       "A high-performance digital oscilloscope with a 5 Gsample/s sampling rate and up to 1 GHz bandwidth. It features a deep memory of 80 Msample, advanced trigger functions, FFT analysis, and optional protocol and logic analysis capabilities, making it suitable for detailed signal analysis in engineering applications.",
  //     rating: 4.5,
  //     image:
  //       "https://cdn.rohde-schwarz.com/image/products/test-and-measurement/oscilloscopes/rtm3000/rtm3004-oscilloscope-front-view-rohde-schwarz_200_646_2880_1620_2.jpg",
  //     url: "https://www.rohde-schwarz.com/au/products/test-and-measurement/oscilloscopes/rs-rtm3000-oscilloscope_63493-427459.html",
  //   },
  //   {
  //     name: "Shanghai Prima Electronic Co., Ltd.",
  //     product: "PESD-20T1 ESD Simulator",
  //     description:
  //       "An electrostatic discharge simulator designed for EMC testing, used to evaluate equipment performance under ESD conditions according to IEC61000-4-2 standards.",
  //     rating: 4.3,
  //     image:
  //       "https://omo-oss-image.thefastimg.com/portal-saas/new2023090620384833880/cms/image/78767c15-ed0d-4329-a81f-98969c2a0a20.png_366xaf.png",
  //     url: "http://en.emcprima.com/products/26.html", // Placeholder - check for accuracy
  //   },
  //   {
  //     name: "Onosokki Co., Ltd.",
  //     product: "MI-1271M12 TEDS Microphone",
  //     description:
  //       "A measurement microphone with built-in preamplifier, featuring a titanium diaphragm for long-term stability and wide frequency response.",
  //     rating: 4.5,
  //     image:
  //       "https://www.onosokki.co.jp/HP-WK/products/keisoku/soundvib/images/mi3140.webp",
  //     url: "https://www.onosokki.co.jp/English/hp_e/products/keisoku/s_v/mi1271m12.htm",
  //   },
  //   {
  //     name: "National Instruments",
  //     product: "LabVIEW",
  //     description:
  //       "A system-design platform and development environment for a visual programming language from National Instruments.",
  //     rating: 4.6,
  //     image:
  //       "https://ni.scene7.com/is/image/ni/02061803_cRIO_16x9?&$ni-card-md$",
  //     url: "https://www.ni.com/en/support/downloads/software-products/download.labview.html",
  //   },
  //   {
  //     name: "HBK",
  //     product: "Genesis High-Speed Data Acquisition System",
  //     description:
  //       "A powerful data acquisition system ideal for a wide range of applications including structural testing and dynamic measurement.",
  //     rating: 4.7,
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaICAHF73DYxDnPhaeH4cBYAlFaWtljqYsg&s",
  //     url: "https://www.hbkworld.com/en/products/instruments/daq-systems/genhs",
  //   },
  //   {
  //     name: "Graphtec",
  //     product: "GL Series Data Logger",
  //     description:
  //       "A multi-channel data logger for measuring temperature, humidity, and other parameters with high accuracy.",
  //     rating: 4.3,
  //     image:
  //       "https://cdn.vector.com/cms/content/products/gl_logger/Graphics/GL3400_Front_web_3200x2000px-2021.jpg",
  //     url: "https://www.graphteccorp.com/logger/gl100/",
  //   },
  //   {
  //     name: "Kistler",
  //     product: "KiDAQ Data Acquisition System",
  //     description:
  //       "A modular data acquisition system for high-speed applications in research and development.",
  //     rating: 4.8,
  //     image:
  //       "https://kistler.cdn.celum.cloud/SAPCommerce_CMSGalleryStandard_720x480/kidaq-and-kistudio-lab-with-jbeam-44429.webp",
  //     url: "https://www.kistler.com/INT/en/c/kidaq-data-acquisition-system/CG21-kidaq-data-acquisition-system",
  //   },
  // ];

  return (
    <main className="flex-1">
      <ProductSlider />
      <section className="w-full py-8 md:py-12 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-6">
          Our Products
        </h2>
        <Products />
        {/* <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-6">
            Featured Products
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {companies.map((company, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardHeader>
                  <div className="w-full h-48 relative overflow-hidden">
                    <img
                      src={company.image}
                      alt={company.product}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardTitle>{company.product}</CardTitle>
                  <CardDescription>{company.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {company.description}
                  </p>
                  <div className="flex items-center mt-4">
                    <Badge variant="secondary" className="ml-2">
                      New
                    </Badge>
                  </div>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(company.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-500">
                      {company.rating.toFixed(1)}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    target="_blank"
                    className="flex items-center justify-center"
                    to={company.url}
                  >
                    <Button className="w-full">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div> */}
      </section>
    </main>
  );
}

export default Home;
