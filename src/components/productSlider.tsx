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
              className="w-full h-64 md:h-full object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
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
            <div>
              <a
                href={currentProduct.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Learn More
              </a>
            </div>
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
