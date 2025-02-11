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
          product_name: "Hand Held Oscilloscope", // asd
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
      category_name: "Arbitrary Function Generators & Source Measurement Units",
      products: [
        {
          product_name: "Arbitrary Function Generator",
          description:
            "Versatile and affordable function generator with wide frequency and high resolution.",
          specifications: {
            "Frequency Range": "1 µHz to 80/50 MHz",
            "Sampling Rate": "200 MSa/s",
            "Amplitude Resolution": "16-bit",
            "Waveform Length": "Up to 1M points",
            Display: '4.3" LCD',
            "Waveform Generation":
              "Front panel, CSV upload, Waveform Editing software",
            Interfaces: "USB, RS-232, GPIB",
          },
          image: "/images/products/57.jpg",
        },
        {
          product_name: "Multi-channel Function Generator", // asdsd
          description:
            "Multi-channel generator with broad frequency and modulation options.",
          specifications: {
            "Output Channels": "Up to 5",
            "Arbitrary Frequency": "1 µHz to 200 MHz",
            "RF Frequency": "160/320 MHz",
            "Pulse Frequency": "25 MHz",
            "Power Amplifier": "100 kHz, 20 W",
            Waveform: "250 MSa/s, 14-bit resolution",
            Modulation: "AM, FM, PM, ASK, FSK, PSK, PWM",
            Interfaces: "USB Host/Device, LAN",
          },
          image: "/images/products/61.jpg",
        },
        {
          product_name: "Source Measurement Unit",
          description:
            "Precise source and sink capabilities with high-speed acquisition.",
          specifications: {
            Quadrants: "Two/Four quadrants",
            "Data Acquisition": "FastLog",
            Modes: "Voltage priority, current priority, high-capacitance",
            Configurator: "Online product configurator",
          },
          image: "/images/products/63.jpg",
        },
      ],
    },
    {
      category_name: "Spectrum Analyzer & EMC Test System",
      products: [
        {
          product_name: "Hand Held Spectrum Analyzer",
          description:
            "Portable spectrum analyzer with multi-function capabilities for field use.",
          specifications: {
            Sensitivity: "< -161 dBm (1 Hz)",
            "All-in-One": "Spectrum & network analyzer, CAT",
            Features: "Internal tracking generator, VSWR bridge, bias tee",
            Durability: "Rugged, splash-proof housing",
          },
          image: "/images/products/69.jpg",
        },
        {
          product_name: "Signal & Spectrum Analyzer",
          description:
            "Signal and spectrum analyzer with wide frequency range and high performance.",
          specifications: {
            "Frequency Range": "10 Hz to 50 GHz",
            Bandwidth: "Up to 200 MHz",
            "Phase Noise": "-114 dBc/Hz at 10 kHz offset",
            Interface: "Multi-touch GUI, SCPI recorder",
            "Signal Analysis": "Analog, digital, 5G NR",
          },
          image: "/images/products/70.png",
        },
        {
          product_name: "Spectrum Analyzer",
          description:
            "Spectrum analyzer with built-in features for advanced analysis.",
          specifications: {
            "Frequency Range": "9 kHz to 3.25 GHz",
            Sensitivity: "-149 dBm/Hz",
            Features: "Preamp, 50 dB attenuator",
            Analysis: "2FSK, AM/FM/FSK demodulation",
            Interface: "LAN, USB, RS-232",
          },
          image: "/images/products/71.jpg",
        },
        {
          product_name: "Compact EMS/EMI Test Platform",
          description:
            "EMS/EMI test system for commercial and scalable EMC testing.",
          specifications: {
            Certifiable: "Meets commercial standards",
            "EMS Range": "80 MHz to 3 GHz",
            "Dual Function": "EMS & EMI measurements",
            Scalable: "Expandable for additional EMC applications",
          },
          image: "/images/products/72.jpg",
        },
      ],
    },
    {
      category_name: "Digital Meters",
      products: [
        {
          product_name: "Measurement Multimeter",
          description:
            "Multimeter with 12 measurement functions and high accuracy.",
          specifications: {
            Display: "6½-digit, 1,200,000 counts",
            Accuracy: "DCV: 0.0035%",
            Functions: "12 including DCV, ACV, resistance, frequency",
            Interfaces: "USB, RS-232C, LAN",
          },
          image: "/images/products/95.png",
        },
        {
          product_name: "DC Milli-Ohm Meter",
          description: "Precise meter for low-resistance measurements.",
          specifications: {
            Display: "50,000 counts",
            Accuracy: "0.05%",
            Resolution: "0.1 µΩ",
            Interfaces: "USB, RS-232C, GPIB",
          },
          image: "/images/products/96.jpg",
        },
        {
          product_name: "Battery Meter",
          description: "Meter for DC voltage and AC resistance measurements.",
          specifications: {
            Display: '3.5" TFT LCD',
            Measurement: "DCV, AC resistance",
            Accuracy: "Voltage: 0.01%, resistance: 0.5%",
            Interfaces: "USB, RS-232C",
          },
          image: "/images/products/97.png",
        },
      ],
    },
    {
      category_name: "Power Supplies",
      products: [
        {
          product_name: "Programmable AC Power Source", /// add
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
          product_name: "Programmable DC Power Supply", // addd
          description:
            "High-efficiency DC power supply with customizable outputs.",
          specifications: {
            "Output Range": "35V/50A/1.5kW to 300V/10A/3kW",
            Display: "LCD with digital keys",
            Protection:
              "Voltage drop compensation, overload capacity up to 110%",
            Interfaces: "RS232, RS485, USB, LAN",
          },
          image: "/images/products/81.png",
        },
      ],
    },
    // ... existing code ...
    {
      category_name: "DC Power Supply",
      products: [
        {
          product_name: "DC Regulated Power Supply",
          description: "High-efficiency regulated power supply with protection features.",
          specifications: {
            "Work Modes": "CV, CC",
            "Design": "High power density, standard case",
            "Display": "LCD with 10 presets",
            "Protection": "Short circuit, overcurrent, overheat",
            "Interfaces": "RS232, RS485, analog"
          },
          image: "/images/products/127.jpg"
        },
        {
          product_name: "Programmable DC Power Supply",
          description: "Versatile power supply with overload protection.",
          specifications: {
            "Output Range": "35V/50A/1.5kW to 300V/10A/3kW",
            "Display": "LCD with digital keys",
            "Overload": "110% capacity",
            "Features": "Voltage compensation, protection",
            "Programming": "Custom waveform support"
          },
          image: "/images/products/128.jpg"
        },
        {
          product_name: "Switching DC Power Supply",
          description: "High-voltage switching supply with multiple modes.",
          specifications: {
            "Voltage Range": "30V to 800V",
            "Power": "360W to 1080W",
            "Features": "Series/Parallel operation",
            "Interfaces": "LAN, USB, Analog"
          },
          image: "/images/products/129.jpg"
        },
        {
          product_name: "Multi-Channel DC Power Supply",
          description: "Advanced multi-channel supply with monitoring features.",
          specifications: {
            "Output": "Up to 217W, 4 channels",
            "Display": '4.3" TFT LCD',
            "Modes": "CC, CV, CR",
            "Protection": "OVP, OCP, OTP",
            "Interfaces": "RS-232, USB, LAN, GPIB"
          },
          image: "/images/products/131.png"
        }
      ]
    },
    {
      category_name: "DC Electric Load",
      products: [
        {
          product_name: "Programmable DC Load",
          description: "Advanced load with multiple operation modes.",
          specifications: {
            "Voltage": "0-150V/0-800V",
            "Modes": "CC/CV/CR/CP combinations",
            "Power": "Up to 9,450W",
            "Functions": "Program, Sequence, Dynamic",
            "Protection": "OCP, OVP, OPP, UVP"
          },
          image: "/images/products/137.jpg"
        },
        {
          product_name: "AC/DC Load",
          description: "Versatile load with AC/DC capabilities.",
          specifications: {
            "Modes": "CC, CR, CV, CP, AC Rectifier",
            "Frequency": "DC, 40-440Hz",
            "Power": "Up to 90kW",
            "Features": "Phase control, waveform support",
            "Interfaces": "GPIB, USB, LAN"
          },
          image: "/images/products/138.jpg"
        },
        {
          product_name: "High Power DC Load",
          description: "High-density load with precision control.",
          specifications: {
            "Power": "6kW to 24kW",
            "Precision": "±0.015% voltage, ±0.04% current",
            "Features": "Dynamic loading, FLEX mode",
            "Functions": "CC, CV, CR, CP",
            "Protection": "Complete protection suite"
          },
          image: "/images/products/139.jpg"
        }
      ]
    },
    {
      category_name: "Bidirectional DC Supply",
      products: [
        {
          product_name: "Programmable Bidirectional Supply",
          description: "Compact supply with source/load functions.",
          specifications: {
            "Voltage": "Up to 2250V",
            "Design": "3U chassis with generator",
            "Efficiency": "95% feedback",
            "Features": "MPPT, solar simulation",
            "Protection": "OTP, OVP, OCP, OPP"
          },
          image: "/images/products/155.jpg"
        },
        {
          product_name: "High Power Bidirectional Supply",
          description: "Advanced system for industrial applications.",
          specifications: {
            "Range": "24V-1200V, 90kW-1300kW",
            "Precision": "0.05% voltage, 0.1% current",
            "Response": "<5ms switching",
            "Features": "Energy feedback, programmable",
            "Applications": "EV, solar, battery testing"
          },
          image: "/images/products/156.jpg"
        }
      ]
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
    {
      category_name: "Impulse Voltage Generator & High Voltage Testing",
      products: [
        {
          product_name: "Impulse Voltage Generator",
          description: "High-precision impulse voltage generator with comprehensive control features and international standard compliance.",
          specifications: {
            "Voltage": "0.3KV to 20KV",
            "Display": "10.1-inch touch screen",
            "Rise Time": "1.2µs ±30%",
            "Duration": "50µs ±20%",
            "Interfaces": "RJ45, RS232",
            "Standards": "IEC60255-5, IEC61000-4-5"
          },
          image: "/images/products/186.png"
        },
        {
          product_name: "HV Surge Simulator",
          description: "Advanced high-voltage surge simulator with precise control and multi-channel testing capabilities.",
          specifications: {
            "Voltage": "Up to 20000V",
            "Display": "10.1-inch touch screen",
            "Features": "Multi-channel testing",
            "Rise Time": "1.2µs ±30%",
            "Duration": "50µs ±20%",
            "Standards": "IEC/EN60664, IEC61000-4-5"
          },
          image: "/images/products/187.png"
        },
        {
          product_name: "High Power Dips Simulator",
          description: "Three-phase power dips simulator with advanced coupling and precise phase control.",
          specifications: {
            "Load": "AC 380V, 200A, 3-phase",
            "Phase": "0-360° injection",
            "Voltage Drop": "Up to 100%",
            "Duration": "0.5-6000 cycles",
            "Display": "10.1-inch touch screen",
            "Interface": "RJ45 with remote control"
          },
          image: "/images/products/188.png"
        }
      ]
    },
    {
      category_name: "Safety Tester and Motor Test Scheme",
      products: [
        {
          product_name: "Multi Channel Electrical Safety Tester", //
          description:
            "High-speed tester for comprehensive AC/DC safety tests.",
          specifications: {
            "Testing Types": "AC/DC withstand, insulation, grounding",
            Detection: "Arc, short/open, low pass filter",
            Voltage: "AC 5kV, DC 6kV, Insulation 2.5kV",
            Interfaces: "RS232, USB, LAN, PLC",
            Application: "Power supplies, motors, batteries",
          },
          image: "/images/products/164.jpg",
        },
        {
          product_name: "Comprehensive DC Brushless Motor Test Scheme",
          description: "Complete test system for brushless DC motors.",
          specifications: {
            "Signal Range": "0.5Hz to 100kHz",
            Accuracy: "0.2%",
            Efficiency: "One-time wiring for all tests",
            Modular: "Customizable setup",
            Interfaces: "USB, RS232, LAN",
          },
          image: "/images/products/165.jpg",
        },
        {
          product_name: "Intelligent Electrical Safety Comprehensive Analyzer", ///
          description: "Advanced analyzer for electrical safety testing.",
          specifications: {
            Functions: "AC/DC withstand, IR, GB, LC",
            Speed: "0.5s testing",
            System: "Android OS, barcode scanning",
            Accuracy: "1%",
          },
          image: "/images/products/167.png",
        },
      ],
    },
    {
      category_name: "Power Analyzer, Power Meter and DAQ",
      products: [
        {
          product_name: "Multiple Channel Power Analyzer",
          description: "Multi-channel analyzer for power measurement.",
          specifications: {
            Channels: "6",
            Accuracy: "0.1%",
            Bandwidth: "0.5Hz - 100kHz",
            "Power Range": "Up to 20A",
            Harmonics: "Up to 50th",
            Applications: "PV inverters, EVs",
          },
          image: "/images/products/172.jpg",
        },
        {
          product_name: "Multi-channel High Precision Power Analyzer",
          description: "High-precision power analyzer.",
          specifications: {
            Accuracy: "0.03% + 0.05%",
            Bandwidth: "DC - 1MHz",
            Voltage: "Up to 1500V",
            Current: "50nA - 30A",
            Display: "Touchscreen",
          },
          image: "/images/products/173.jpg",
        },
        {
          product_name: "Digital Power Meter",
          description:
            "Digital meter for voltage, current, and harmonic measurements.",
          specifications: {
            Accuracy: "DC - 100kHz",
            Harmonics: "Up to 50th",
            Interfaces: "RS-232C, USB, LAN",
            Display: '5" TFT',
          },
          image: "/images/products/174.png",
        },
        {
          product_name: "Data Acquisition System",
          description: "High-speed DAQ for signal measurement.",
          specifications: {
            Accuracy: "0.0035% DCV",
            Channels: "14 signals",
            Speed: "450 channels/sec",
            Expandable: "3-slot",
            Display: '4.3" TFT',
          },
          image: "/images/products/175.jpg",
        },
      ],
    },
    {
      category_name: "Sound and Vibration",
      products: [
        {
          product_name: "Vibration Comparator",
          description:
            "High-precision vibration analysis with simultaneous frequency monitoring.",
          specifications: {
            Precision: "Advanced digital filters",
            TEDS: "Built-in for quick setup",
            Design: "DIN-sized (96mm x 96mm)",
            Interface: "Visual and auditory monitoring",
          },
          image: "/images/products/212.jpg",
        },
        {
          product_name: "Comparator",
          description:
            "Accurate pass/fail judgment for sound and vibration quality control.",
          specifications: {
            FFT: "Advanced for precise control",
            Detection: "Amplitude modulation detection",
            Functions: "Band-pass, envelope, auditory inspection",
            Design: "Compact, production line ready",
          },
          image: "/images/products/213.jpg",
        },
        {
          product_name: "FFT Analyzer",
          description:
            "High-performance signal analysis for precise frequency-domain analysis.",
          specifications: {
            Analysis: "FFT algorithms",
            Display: "Advanced, multi-channel",
            "Frequency Range": "Low to high",
            Portability: "Field-use ready, 24-bit ND converter",
          },
          image: "/images/products/214.jpg",
        },
        {
          product_name: "Digital Engine Tachometer",
          description: "High-accuracy RPM measurements for engines and motors.",
          specifications: {
            Accuracy: "Precise RPM measurements",
            Portability: "Compact, field/lab use",
            Display: "Easy-to-read digital display",
            Performance: "Reliable, efficient",
          },
          image: "/images/products/215.jpg",
        },
        {
          product_name: "Sound Level Meter",
          description:
            "Sound level meter with enhanced features for comprehensive analysis.",
          specifications: {
            Display: "Large color LCD, touch panel",
            "Real-Time Listening": "Measure while listening",
            Functionality: "Upgradeable to analyzer/recorder",
            Range: "10 Hz to 20 kHz, 20 to 128 dB",
          },
          image: "/images/products/216.jpg",
        },
      ],
    },
    {
      category_name: "DAQ & Power Analyzers",
      products: [
        {
          product_name: "Genesis HighSpeed-DAQ - GEN3iA/GEN7iA",
          description:
            "High-speed data acquisition system for medium to high channel counts.",
          specifications: {
            PC: "Intel i5/16GB RAM or Intel i3/4GB RAM",
            "Data Transfer": "350MB/s SSD or 200MB/s SSD, 1GB Ethernet",
            System: "Portable, medium to high channel count",
            Touchscreen: '17" TFT, 1280x1024',
          },
          image: "/images/products/222.jpg",
        },
        {
          product_name: "eGrid Power Analyzer - 1-EGRD-6P-7TA",
          description:
            "Power analyzer with advanced performance for real-time analysis.",
          specifications: {
            Channels: "6 power channels",
            Sampling: "200kS/s",
            Software: "Real-time display with Perception Enterprise",
            Expandable: "Up to 21 channels",
          },
          image: "/images/products/223.jpg",
        },
        {
          product_name: "eDrive Power Analyzer - 1-EDRV-6P-31",
          description:
            "High-speed power analyzer with integrated system and versatile inputs.",
          specifications: {
            Channels: "6 power channels",
            Sampling: "2 MS/s",
            System: 'Built-in PC, SSD, 17" touchscreen',
            Inputs: "Supports voltage, current, torque, speed",
            Expandable: "Additional power channels and input boards",
          },
          image: "/images/products/224.jpg",
        },
      ],
    },
    {
      category_name: "Clamp Meters & Data Loggers",
      products: [
        {
          product_name: "Clamp Meter",
          description:
            "Measures current and voltage for inverters and VFD systems.",
          specifications: {
            "Current Capacity": "Up to 1000 A AC/DC",
            "Clamp Size": "Up to 35 mm diameter conductors",
            Functions: "INRUSH, LoZ for accurate readings",
          },
          image: "/images/products/238.png",
        },
        {
          product_name: "Insulation Resistance Meter",
          description:
            "Tests insulation resistance with surge protection and dielectric discharge.",
          specifications: {
            "Voltage Range": "10V to 2500V",
            "Testing Features":
              "Step voltage, RampTest, low-voltage continuity",
            Memory: "9999-entry with USB transmission",
          },
          image: "/images/products/239.jpg",
        },
        {
          product_name: "Battery Tester",
          description:
            "Evaluates battery health with internal impedance and ripple voltage measurements.",
          specifications: {
            Current: "Up to 400 A",
            Voltage: "Up to 500 V AC/DC",
            Applications: "Automotive, electrical, renewable energy",
          },
          image: "/images/products/240.jpg",
        },
        {
          product_name: "Winding & Low Resistance Meter",
          description:
            "Measures resistive and inductive objects with high accuracy.",
          specifications: {
            Current: "Up to 200 A resistive, 10 A inductive",
            Display: "5-inch color touchscreen",
            Connectivity: "Wi-Fi, USB, LAN",
          },
          image: "/images/products/241.png",
        },
        {
          product_name: "Data Logger",
          description: "High-speed data logger with multi-channel support.",
          specifications: {
            "Sampling Rate": "1 MS/s",
            Channels: "Up to 112",
            Operation: "Standalone with touch display",
          },
          image: "/images/products/242.png",
        },
      ],
    },
    {
      category_name: "Other Accessories",
      products: [
        {
          product_name: "Oscilloscope Accessories & Racks",
          specifications: {
            Probes: "GTP, GCP Series",
            "Logic Analyzer": "DS2-08LA, DS2-16LA",
            Software: "DS3-PWR, DS3-SBD",
            Adapters: "GPIB, LAN",
          },
          description:
            "A range of accessories and racks designed for oscilloscopes, providing probes, logic analyzers, software, and adapters for enhanced performance and compatibility.",
          image: "/images/products/267.jpg",
        },
        {
          product_name: "Function Generator Accessories & Racks",
          specifications: {
            Adapters: "ADP-003, GPA-501",
            Racks: "GRA-432",
            "Special Applications": "Ground Lead, RF Cable",
          },
          description:
            "Accessories and racks for function generators, including various adapters, racks, and special application tools like ground leads and RF cables.",
          image: "/images/products/268.jpg",
        },
        {
          product_name: "Spectrum Analyzer Accessories & Racks",
          specifications: {
            Adapters: "BNC to N, SMA to N",
            Racks: 'GRA-415 (19" 6U)',
            "Special Applications": "EMI Probe Kit, DC Block",
          },
          description:
            "Spectrum analyzer accessories and racks for improved signal analysis, with adapters, racks, and special tools like EMI probe kits and DC blocks.",
          image: "/images/products/269.jpg",
        },
        {
          product_name: "Power & Load Accessories & Racks",
          specifications: {
            "Interface Cards": "APS Series",
            Racks: "GRA Series",
            "Special Applications": "Module Cables, Parallel/Series Cables",
          },
          description:
            "Accessories and racks for power and load testing, including interface cards, racks, and specialized cables for different test configurations.",
          image: "/images/products/270.jpg",
        },
        {
          product_name: "T&M Accessories & Racks",
          specifications: {
            Leads: "GBM Series",
            Racks: "GRA-404/417",
            "Special Applications": "Test Fixtures, High Voltage Adapters",
          },
          description:
            "Test and measurement accessories and racks, offering leads, racks, and special application tools for precise testing, including high voltage adapters and test fixtures.",
          image: "/images/products/282.jpg",
        },
      ],
    },
    {
      category_name: "NI LabVIEW",
      products: [
        {
          product_name: "NI LabVIEW Customized Integration Projects",
          specifications: {
            "Custom Systems": "Tailored test setups with NI LabVIEW.",
            Automation: "Automated sequences, real-time monitoring.",
            Reporting: "Automated test reports.",
            Scalability: "Adaptable for various industries.",
          },
          description:
            "Custom integration projects using NI LabVIEW, designed to provide tailored systems, automate testing processes, and generate real-time reports for scalable applications.",
          image: "/images/products/283.jpg",
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
