import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, ChevronRight, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const companies = [
    {
      name: "GW Instek",
      product: "GDS-2000E Series Digital Storage Oscilloscope",
      description:
        "A versatile digital storage oscilloscope offering up to 200MHz bandwidth, designed for various applications in testing and analysis.",
      rating: 4.5,
      image:
        "https://www.spiengineers.com/products/GDS-2000E-Series-Digital-Storage-Oscilloscopes1.jpg",
      url: "https://www.gwinstek.com/en-IN/products/detail/GDS-2000E",
    },
    {
      name: "Ainuo Instrument Co., Ltd.",
      product: "AN61 Series Programmable AC Test Power Source",
      description:
        "The AN61 Series is a programmable AC test power source that uses SPWM and digital processing technologies. It provides precise AC, DC, and AC+DC outputs, ideal for laboratories and production lines in power electronics, avionics, and IEC standard tests. With capabilities to simulate power grid abnormalities, it's suited for testing surge current and voltage stability.",
      rating: 4.5,
      image:
        "https://tiimg.tistatic.com/fp/3/007/776/an9632-f-withstand-voltage-insulation-resistance-tester-ac-dc-withstand-097.jpg",
      url: "https://www.ainuoworld.com/shows/140/22.html", // Placeholder - check for accuracy
    },
    {
      name: "Rohde & Schwarz",
      product: "R&S®RTM3000 Digital Oscilloscope",
      description:
        "A high-performance digital oscilloscope with a 5 Gsample/s sampling rate and up to 1 GHz bandwidth. It features a deep memory of 80 Msample, advanced trigger functions, FFT analysis, and optional protocol and logic analysis capabilities, making it suitable for detailed signal analysis in engineering applications.",
      rating: 4.5,
      image:
        "https://cdn.rohde-schwarz.com/image/products/test-and-measurement/oscilloscopes/rtm3000/rtm3004-oscilloscope-front-view-rohde-schwarz_200_646_2880_1620_2.jpg",
      url: "https://www.rohde-schwarz.com/au/products/test-and-measurement/oscilloscopes/rs-rtm3000-oscilloscope_63493-427459.html",
    },
    {
      name: "Shanghai Prima Electronic Co., Ltd.",
      product: "PESD-20T1 ESD Simulator",
      description:
        "An electrostatic discharge simulator designed for EMC testing, used to evaluate equipment performance under ESD conditions according to IEC61000-4-2 standards.",
      rating: 4.3,
      image:
        "https://omo-oss-image.thefastimg.com/portal-saas/new2023090620384833880/cms/image/78767c15-ed0d-4329-a81f-98969c2a0a20.png_366xaf.png",
      url: "http://en.emcprima.com/products/26.html", // Placeholder - check for accuracy
    },
    {
      name: "Onosokki Co., Ltd.",
      product: "MI-1271M12 TEDS Microphone",
      description:
        "A measurement microphone with built-in preamplifier, featuring a titanium diaphragm for long-term stability and wide frequency response.",
      rating: 4.5,
      image:
        "https://www.onosokki.co.jp/HP-WK/products/keisoku/soundvib/images/mi3140.webp",
      url: "https://www.onosokki.co.jp/English/hp_e/products/keisoku/s_v/mi1271m12.htm",
    },
    {
      name: "National Instruments",
      product: "LabVIEW",
      description:
        "A system-design platform and development environment for a visual programming language from National Instruments.",
      rating: 4.6,
      image:
        "https://ni.scene7.com/is/image/ni/02061803_cRIO_16x9?&$ni-card-md$",
      url: "https://www.ni.com/en/support/downloads/software-products/download.labview.html",
    },
    {
      name: "HBK",
      product: "Genesis High-Speed Data Acquisition System",
      description:
        "A powerful data acquisition system ideal for a wide range of applications including structural testing and dynamic measurement.",
      rating: 4.7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaICAHF73DYxDnPhaeH4cBYAlFaWtljqYsg&s",
      url: "https://www.hbkworld.com/en/products/instruments/daq-systems/genhs",
    },
    {
      name: "Graphtec",
      product: "GL Series Data Logger",
      description:
        "A multi-channel data logger for measuring temperature, humidity, and other parameters with high accuracy.",
      rating: 4.3,
      image:
        "https://cdn.vector.com/cms/content/products/gl_logger/Graphics/GL3400_Front_web_3200x2000px-2021.jpg",
      url: "https://www.graphteccorp.com/logger/gl100/",
    },
    {
      name: "Kistler",
      product: "KiDAQ Data Acquisition System",
      description:
        "A modular data acquisition system for high-speed applications in research and development.",
      rating: 4.8,
      image:
        "https://kistler.cdn.celum.cloud/SAPCommerce_CMSGalleryStandard_720x480/kidaq-and-kistudio-lab-with-jbeam-44429.webp",
      url: "https://www.kistler.com/INT/en/c/kidaq-data-acquisition-system/CG21-kidaq-data-acquisition-system",
    },
  ];

  return (
    <main className="flex-1">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e6f5fb] to-[#d4e1f7] opacity-90" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-[#122786]">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AD Equipment & Technologies
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-[#31b1e4]">
              Providing cutting-edge Test & Measurement Solutions and
              Integration Projects
            </p>
            <ul className="text-left text-lg inline-block text-[#122786]">
              <li className="flex items-center mb-2">
                <ChevronRight className="mr-2 h-5 w-5 text-[#31b1e4]" />
                Electrical & Electronic Solutions
              </li>
              <li className="flex items-center mb-2">
                <ChevronRight className="mr-2 h-5 w-5 text-[#31b1e4]" />
                RF/Wireless Communications
              </li>
              <li className="flex items-center mb-2">
                <ChevronRight className="mr-2 h-5 w-5 text-[#31b1e4]" />
                Automation/DAQ Solutions
              </li>
              <li className="flex items-center mb-2">
                <ChevronRight className="mr-2 h-5 w-5 text-[#31b1e4]" />
                EMI/EMC Testing Solutions
              </li>
              <li className="flex items-center mb-2">
                <ChevronRight className="mr-2 h-5 w-5 text-[#31b1e4]" />
                Sound & Vibration Testing
              </li>
              <li className="flex items-center">
                <ChevronRight className="mr-2 h-5 w-5 text-[#31b1e4]" />
                LabVIEW based Customized ATE Solutions
              </li>
              <Button
                size="lg"
                onClick={() => navigate("/about-us")}
                className="font-semibold bg-[#31b1e4] text-white hover:bg-[#122786] transition-colors my-3"
              >
                Learn More About Us
              </Button>
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Featured Products
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {companies.map((company, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardHeader>
                  <div className="w-full h-48 relative overflow-hidden">
                    <img src={company.image} alt={company.product} />
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
        </div>
      </section>
    </main>
  );
}

function LogoIcon(props: any) {
  return <img src="/logo.png" alt="Logo" {...props} />;
}

export default Home;
