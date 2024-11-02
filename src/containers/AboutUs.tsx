import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  Building2,
  Clock,
  Cog,
  Cpu,
  Factory,
  Radio,
  Users,
  Volume2,
  Wifi,
  Zap,
} from "lucide-react";

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        About AD Equipment & Technologies
      </h1>

      <Card className="mb-8">
        <CardContent className="p-6">
          <p className="text-lg mb-4">
            AD Equipment & Technologies provides Test & Measurement Instruments
            cum Solutions as well as Integration Projects. Our expertise are in
            the field of Power Electronics, Digital, RF, Electrical,
            Electronics, Automation and Projects.
          </p>
        </CardContent>
      </Card>

      <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <ServiceCard
          icon={<Cpu className="w-6 h-6 text-primary" />}
          title="Electrical & Electronic Solutions"
          description="Integration and Supply of Electrical & Electronic Test & Measurement Solutions."
        />
        <ServiceCard
          icon={<Radio className="w-6 h-6 text-primary" />}
          title="RF/Wireless Communications"
          description="Integration and Supply of RF/Wireless Communications Solutions."
        />
        <ServiceCard
          icon={<Cog className="w-6 h-6 text-primary" />}
          title="Automation/DAQ Solutions"
          description="Integration and Supply of Automation/DAQ Solutions."
        />
        <ServiceCard
          icon={<Wifi className="w-6 h-6 text-primary" />}
          title="EMI/EMC Testing"
          description="EMI/EMC Testing Solutions."
        />
        <ServiceCard
          icon={<Volume2 className="w-6 h-6 text-primary" />}
          title="Sound & Vibration Testing"
          description="Sound & Vibration Testing Solutions."
        />
        <ServiceCard
          icon={<Cog className="w-6 h-6 text-primary" />}
          title="LabVIEW ATE Solutions"
          description="LabVIEW based Customized ATE Solutions."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FeatureCard
          icon={<Building2 className="w-8 h-8 text-primary" />}
          title="Our Offices"
          description="ADET has full-fledged offices in Ahmedabad and Vadodara, with resident sales & application engineers in Bhopal, Indore, Pune, New Delhi, and Bangalore for local support."
        />

        <FeatureCard
          icon={<Users className="w-8 h-8 text-primary" />}
          title="Our Partners"
          description="We are partnered with reputed companies such as Rohde & Schwarz (Germany), GWINSTEK (Taiwan), Ainuo Instrument (China), Onosokki (Japan), HBK (Germany), PRIMA (China), RIGOL (China), SIGLENT (China), and NI LabVIEW (USA)."
        />

        <FeatureCard
          icon={<Briefcase className="w-8 h-8 text-primary" />}
          title="Our Value"
          description="We empower our principals to expand their reach and engage with customers efficiently. We add value through need identification, application selling, and configuring the right solutions with excellent technical support."
        />

        <FeatureCard
          icon={<Zap className="w-8 h-8 text-primary" />}
          title="LabVIEW Expertise"
          description="We have a highly qualified Certified LabVIEW team for simple and complex ATE Project Automation Solutions."
        />

        <FeatureCard
          icon={<Factory className="w-8 h-8 text-primary" />}
          title="Industries We Serve"
          description="We work closely with customers from various verticals including Appliance Manufacturers, Aerospace & Defense, Education Research, Electrical/Electronics Manufacturing, Oil & Gas, Automotive, EVs, Batteries, Telecom, LED Driver and Solar PV Manufacturers."
        />

        <FeatureCard
          icon={<Clock className="w-8 h-8 text-primary" />}
          title="Our Commitment"
          description="We are committed to adhering to values like customer satisfaction, on-time pre-sales and after-sales support & services."
        />
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {icon}
          <h2 className="text-2xl font-semibold ml-4">{title}</h2>
        </div>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center mb-2">
          {icon}
          <h3 className="text-lg font-semibold ml-2">{title}</h3>
        </div>
        <p className="text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
