import { useEffect, useRef } from "react";

const partners = [
  {
    name: "GW Instek",
    url: "https://www.gwinstek.com",
    logo: "/images/partners/gw_instek.jpeg",
  },
  {
    name: "Ainuo",
    url: "https://www.ainuoworld.com",
    logo: "/images/partners/ainuo.png",
  },
  {
    name: "Rohde & Schwarz",
    url: "https://www.rohde-schwarz.com",
    logo: "/images/partners/rohde-schwarz.jpg",
  },
  {
    name: "EMC Prima",
    url: "http://en.emcprima.com/",
    logo: "/images/partners/emc-prima.png",
  },
  {
    name: "Onosokki",
    url: "https://www.onosokki.co.jp",
    logo: "/images/partners/onosokki.png",
  },
  {
    name: "National Instruments",
    url: "https://www.ni.com",
    logo: "/images/partners/national-instruments.png",
  },
  {
    name: "HBK",
    url: "https://www.hbkworld.com",
    logo: "/images/partners/hbk.jpg",
  },
  {
    name: "Graphtec",
    url: "http://www.graphteccorp.com",
    logo: "/images/partners/graphtec.png",
  },
  {
    name: "Sonel",
    url: "https://www.sonel.in",
    logo: "/images/partners/sonel.jpg",
  },
  {
    name: "Kistler",
    url: "https://www.kistler.com",
    logo: "/images/partners/kistler.jpg",
  },
];

export default function Partners() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth;
      let scrollPosition = 0;
      const scroll = () => {
        scrollPosition += 0.5;
        if (scrollPosition > scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      };

      const intervalId = setInterval(scroll, 20);

      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <section className="py-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-[#122786] mb-6">
          Our Trusted Brands
        </h2>
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden whitespace-nowrap"
        >
          <div className="flex animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 mx-3"
              >
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white p-3 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={80}
                    height={40}
                    className="mx-auto"
                  />
                  <p className="text-center text-xs mt-2 text-[#122786]">
                    {partner.name}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
