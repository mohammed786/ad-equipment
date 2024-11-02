import { Card, CardContent } from "@/components/ui/card";

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
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Partners</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {partners.map((partner) => (
          <Card
            key={partner.name}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardContent className="p-6">
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="w-full h-48 relative overflow-hidden">
                  <img src={partner.logo} alt={partner.name} />
                </div>
                <h2 className="text-lg font-semibold text-center">
                  {partner.name}
                </h2>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
