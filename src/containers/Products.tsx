import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const productData = {
  categories: [
    {
      category_name: "Oscilloscopes",
      products: [
        {
          product_name: "Hand Held Oscilloscope",
          description:
            "Portable oscilloscope with isolated channels suitable for high voltage measurements.",
          specifications: {
            Bandwidth: "60 MHz to 500 MHz",
            "Sample Rate": "up to 5 Gsample/s",
            "Memory Depth": "500 kpts, 50 Mpts segmented memory",
            "ADC Resolution": "10-bit",
            Isolation: "CAT IV 600 V (RMS) / CAT III 1000 V (RMS)",
          },
          image: "/images/products/handheld-oscilloscope.jpg",
        },
        {
          product_name: "Performance Windows Based Oscilloscope",
          description:
            "High-performance oscilloscope for advanced waveform analysis.",
          specifications: {
            Bandwidth: "4 GHz to 16 GHz",
            "Max Sample Rate": "40 Gsample/s",
            "Max Memory Depth": "3 Gpoints per channel",
            Resolution: "Up to 16-bit",
            "Trigger Events": "Full bandwidth",
          },
          image: "/images/products/51.jpg",
        },
        {
          product_name: "Mixed Signal Performance Oscilloscope",
          description:
            "Oscilloscope with high update rate and deep memory for mixed-signal applications.",
          specifications: {
            Bandwidth: "350 MHz - 2 GHz",
            Channels: "4 or 8",
            "Update Rate": "> 4.5 million wims/s",
            "Memory Depth": "500 Mpoints",
            Resolution: "18-bit vertical resolution",
          },
          image: "/images/products/11.png",
        },
        {
          product_name: "Cost Effective Oscilloscope",
          description:
            "Affordable oscilloscope with essential functionality for basic analysis.",
          specifications: {
            Bandwidth: "150-500 MHz",
            Channels: "2 or 4",
            "Sample Rate": "5GSa/s RT",
            Display: "8-inch 800x600",
            "Special Features": "Split Screen Function, VPO Technology",
          },
          image: "/images/products/53.jpg",
        },
      ],
    },
    {
      category_name: "Power Supplies",
      products: [
        {
          product_name: "Programmable AC Power Source",
          description:
            "Versatile AC power source for compliance testing with programmable features.",
          specifications: {
            "Output Modes": "AC, DC, AC+DC",
            "Compliance Testing": "IEC standards support",
            "Special Functions": "Voltage dips, sequence output",
            Interfaces: "RS232, RS485, GPIB, Ethernet",
          },
          image: "/images/products/31.png",
        },
        {
          product_name: "Regenerative Grid Simulation AC Power Source",
          description:
            "Simulates grid conditions for energy testing with regenerative capabilities.",
          specifications: {
            "Output Modes": "AC, DC, AC+DC",
            "Feedback Efficiency": "100%",
            "Operation Modes": "Three-phase and single-phase",
            Interfaces: "RS485, Ethernet",
          },
          image: "/images/products/72.png",
        },
        {
          product_name: "Programmable DC Power Supply",
          description:
            "High-efficiency DC power supply with customizable outputs.",
          specifications: {
            "Output Range": "35V/50A/1.5kW to 300V/10A/3kW",
            Display: "LCD with digital keys",
            Protection:
              "Voltage drop compensation, overload capacity up to 110%",
            Interfaces: "RS232, RS485, USB, LAN",
          },
          image: "/images/products/81.jpg",
        },
      ],
    },
    {
      category_name: "Electronic Loads",
      products: [
        {
          product_name: "Programmable DC Electronic Load",
          description:
            "Programmable load for testing various power sources under simulated conditions.",
          specifications: {
            "Operating Voltage": "0-150V or 0-800V",
            Modes: "CC, CV, CR, CP",
            "Slew Rate": "Max 16A/us",
            Protections: "Adjustable OCP, OVP, UVP",
            Display: '3.5" TFT LCD',
          },
          image: "/images/products/78.jpg",
        },
        {
          product_name: "High Power DC Electronic Load",
          description:
            "High-density electronic load for industrial testing with dynamic loading capabilities.",
          specifications: {
            "Power Density": "4U for 6kW, 13U for 24kW",
            "Dynamic Loading": "Up to 50kHz",
            Modes: "CC, CV, CR, CP",
            Protection: "Overcurrent, overvoltage, over temperature",
            Interfaces: "RS232, RS485, LAN, GPIB",
          },
          image: "/images/products/80.jpg",
        },
      ],
    },
    {
      category_name: "Meters and Analyzers",
      products: [
        {
          product_name: "High-Frequency LCR Meter",
          description: "LCR meter for accurate high-frequency measurements.",
          specifications: {
            "Frequency Range": "DC to 50 MHz",
            Display: '7" LCD color display',
            Accuracy: "0.08% basic accuracy",
            Interfaces: "RS-232C, USB, LAN, GPIB",
          },
          image: "/images/products/62.jpg",
        },
        {
          product_name: "Power Analyzer",
          description:
            "Precision power analyzer with multi-channel support for power measurement.",
          specifications: {
            Channels: "Up to 6",
            Accuracy: "0.1% basic accuracy",
            "Power Range": "up to 20A per channel",
            Applications:
              "Suitable for PV inverters, EVs, lighting, transformers",
          },
          image: "/images/products/62.jpg",
        },
        {
          product_name: "Battery Meter",
          description:
            "Meter for battery health analysis and voltage measurement.",
          specifications: {
            "Voltage Measurement": "up to 1000V",
            "Resistance Accuracy": "0.5%",
            Resolution: "up to 0.1 uΩ",
            Interfaces: "USB, RS-232C",
          },
          image: "/images/products/62.jpg",
        },
      ],
    },
    {
      category_name: "Test Systems",
      products: [
        {
          product_name: "ESD Simulator",
          description:
            "Simulator for electrostatic discharge testing with customizable voltage.",
          specifications: {
            "Test Voltage": "up to 30kV",
            Display: "10.1-Inch Color Touch Screen",
            "Discharge Options": "Contact and air discharge",
            Compliance: "IEC61000-4-2, IS010605",
          },
          image: "/images/products/92.png",
        },
        {
          product_name: "EFT/Burst Simulator",
          description:
            "Simulator for electrical fast transient pulse immunity testing.",
          specifications: {
            "Output Range": "200V to 5000V",
            Display: "10.1-inch color touch screen",
            Compliance: "GB/T 17626.4, IEC 61000-4-4",
            "Additional Features": "Phase synchronization",
          },
          image: "/images/products/94.png",
        },
        {
          product_name: "Ringwave Simulator",
          description:
            "Simulator for ring wave testing with adjustable settings.",
          specifications: {
            "Voltage Range": "200V to 6600V",
            "Phase Setting": "0° to 359°",
            Compliance: "IEC61000-4-12, IEC255-22-1",
            "Control Interface": "RJ45 for remote control",
          },
          image: "/images/products/98.png",
        },
      ],
    },
  ],
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState(
    productData.categories[0].category_name
  );

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 640); // Set your mobile breakpoint here
  };

  useEffect(() => {
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <Tabs
        value={activeCategory}
        onValueChange={setActiveCategory}
        className="w-full"
      >
        {isMobile ? (
          <Select onValueChange={(val: string) => setActiveCategory(val)}>
            <SelectTrigger className={"bg-white"}>
              <SelectValue placeholder={activeCategory} />
            </SelectTrigger>
            <SelectContent>
              {productData.categories.map((category) => (
                <SelectItem value={category.category_name}>
                  {category.category_name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ) : (
          <TabsList className="mb-4 w-full flex flex-wrap justify-start">
            {productData.categories.map((category) => (
              <TabsTrigger
                key={category.category_name}
                value={category.category_name}
                className="flex-grow sm:flex-grow-0"
              >
                {category.category_name}
              </TabsTrigger>
            ))}
          </TabsList>
        )}

        {productData.categories.map((category) => (
          <TabsContent
            key={category.category_name}
            value={category.category_name}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {category.products.map((product, index) => (
                <Card key={index} className="overflow-hidden flex flex-col">
                  <div className="mx-auto p-2 overflow-hidden">
                    <img src={product.image} alt={product.product_name} />
                  </div>
                  <CardHeader className="p-4 sm:p-6 flex-none">
                    <CardTitle className="text-lg sm:text-xl">
                      {product.product_name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
                    <p className="text-sm sm:text-base text-gray-600 mb-4">
                      {product.description}
                    </p>
                    <ul className="space-y-2">
                      {Object.entries(product.specifications).map(
                        ([key, value]) => (
                          <li
                            key={key}
                            className="text-xs flex justify-between"
                          >
                            <span className="font-medium">{key}:</span>
                            <span>{value}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
