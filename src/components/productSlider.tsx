"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const products = [
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
    name: "Kistler",
    product: "KiDAQ Data Acquisition System",
    description:
      "A modular data acquisition system for high-speed applications in research and development.",
    rating: 4.8,
    image:
      "https://kistler.cdn.celum.cloud/SAPCommerce_CMSGalleryStandard_720x480/kidaq-and-kistudio-lab-with-jbeam-44429.webp",
    url: "https://www.kistler.com/INT/en/c/kidaq-data-acquisition-system/CG21-kidaq-data-acquisition-system",
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
    name: "Hand Held Oscilloscope",
    product: "Portable Oscilloscope with Isolated Channels",
    description:
      "This handheld oscilloscope offers portable and isolated channel capabilities, designed specifically for high voltage measurements. Its compact design and high-performance specifications make it ideal for field testing and electrical troubleshooting. With a wide bandwidth range and high sample rate, this oscilloscope is perfect for professionals who need to perform accurate and reliable measurements in remote or challenging environments.",
    rating: 4.7,
    image: "/images/products/285.png",
    url: "",
  },
  {
    name: "Multi-channel Function Generator",
    product:
      "Multi-channel Generator with Broad Frequency and Modulation Options",
    description:
      "The Multi-channel Function Generator is a versatile signal generation tool designed for complex testing and analysis. With up to 5 output channels and a wide frequency range from 1 µHz to 200 MHz, this generator supports various modulation types including AM, FM, PM, ASK, FSK, PSK, and PWM. Ideal for applications in communication systems, radar, and RF testing, it features easy interface options like USB and LAN for seamless integration into your test setup.",
    rating: 4.6,
    image: "/images/products/61.jpg",
    url: "",
  },
  {
    name: "Programmable AC Power Source",
    product: "Versatile AC Power Source for Compliance Testing",
    description:
      "The Programmable AC Power Source offers a high level of flexibility, providing AC, DC, and AC+DC output modes for comprehensive power testing. Designed to meet IEC standards, this power source is perfect for compliance testing in industries such as electronics and automotive. It supports programmable output features like voltage dips and sequence output, making it ideal for dynamic test scenarios where precise control over power parameters is required.",
    rating: 4.5,
    image: "/images/products/31.png",
    url: "",
  },
  {
    name: "Programmable DC Power Supply",
    product: "High-efficiency DC Power Supply with Customizable Outputs",
    description:
      "This high-efficiency DC power supply delivers customizable voltage and current outputs, ideal for testing a wide range of electronic components. With an output range from 35V/50A/1.5kW to 300V/10A/3kW, it offers precise control for both low and high-power applications. Features include overload protection, voltage drop compensation, and a clear LCD display for easy operation. Perfect for research and development, repair, and quality control applications, the supply is equipped with multiple communication interfaces for easy integration into automated test systems.",
    rating: 4.8,
    image: "/images/products/81.jpg",
    url: "",
  },
  {
    name: "High Power DC Electronic Load",
    product: "High-density Electronic Load for Industrial Testing",
    description:
      "The High Power DC Electronic Load is engineered for industrial applications requiring high-density testing. With power densities up to 6kW in just 4U and 24kW in 13U, this unit is perfect for high-power testing of power supplies, batteries, and renewable energy systems. It offers dynamic loading capabilities up to 50kHz and various operating modes such as constant current (CC), constant voltage (CV), constant resistance (CR), and constant power (CP). Equipped with multiple protection mechanisms and interfaces like RS232, RS485, and LAN, it ensures safe and reliable testing even under extreme conditions.",
    rating: 4.6,
    image: "/images/products/80.jpg",
    url: "",
  },
  {
    name: "Multi Channel Electrical Safety Tester",
    product: "High-speed Tester for Comprehensive AC/DC Safety Tests",
    description:
      "The Multi-Channel Electrical Safety Tester provides high-speed testing for a wide range of electrical safety parameters, including AC/DC withstand, insulation, and grounding tests. With support for voltages up to 5kV AC and 6kV DC, and an insulation testing range of up to 2.5kV, this tester ensures your products meet the highest safety standards. Its fast testing speed, arc detection, and low-pass filter capabilities make it ideal for testing power supplies, motors, batteries, and other electrical systems in a wide variety of industries.",
    rating: 4.7,
    image: "/images/products/164.jpg",
    url: "",
  },
  {
    name: "Intelligent Electrical Safety Comprehensive Analyzer",
    product: "Advanced Analyzer for Electrical Safety Testing",
    description:
      "The Intelligent Electrical Safety Comprehensive Analyzer combines advanced testing features with a user-friendly interface, powered by Android OS. It supports a variety of electrical safety tests, including AC/DC withstand, insulation resistance, ground bond, and leakage current tests. With a testing speed of just 0.5 seconds and a high degree of accuracy (1%), this analyzer ensures fast and reliable results. The system is equipped with barcode scanning capabilities for easy data management and is designed to optimize the testing workflow in safety-critical applications.",
    rating: 4.9,
    image: "/images/products/167.png",
    url: "",
  },
];

export default function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    if (isAutoScrolling) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoScrolling, nextSlide]);

  const currentProduct = products[currentIndex];
  return (
    <section
      className="relative overflow-hidden py-10 md:py-20 bg-gradient-to-br from-[#e6f5fb] to-[#d4e1f7] opacity-90"
      onMouseEnter={() => setIsAutoScrolling(false)}
      onMouseLeave={() => setIsAutoScrolling(true)}
    >
      <div className="relative container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src={currentProduct.image}
              alt={currentProduct.product}
              className="w-full object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                {currentProduct.product}
              </h2>
              <p className="text-xs md:text-sm text-gray-600 mb-4 truncate">
                {currentProduct.name}
              </p>
              <p className="text-gray-700 mb-4">{currentProduct.description}</p>
            </div>
            {currentProduct.url ? <div>
              <a
                href={currentProduct.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Learn More
              </a>
            </div> : null}
          </div>
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </section>
  );
}
