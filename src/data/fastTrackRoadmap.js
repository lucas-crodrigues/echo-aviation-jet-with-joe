import { COMPANY_NAME } from "../consts";

const fastTrackRoadmap = {
  upperHeading: "Roadmap",
  heading: "Fast-Track Your Flight Training Journey",
  descriptions: [
    `Explore Echo Aviation’s Fast-Track Programs — a flexible, modular path from zero experience to Certified Flight Instructor (CFI). Whether you're starting from scratch or advancing your existing training, our national network of independent CFIs can get you there faster, for less.`
  ],
  steps: [
    {
      title: "Earn a Private Pilot License (PPL)",
      link: "/training-programs/private-pilot",
      paragraphs: [
        "Your journey begins with the Private Pilot License (PPL). This certification teaches the basics of aircraft operations, navigation, and airspace communication — giving you the foundation to fly for recreation or career advancement.",
        "At Echo Aviation, your PPL training is one-on-one, highly personalized, and conducted by an independent CFI who works with your schedule and learning style."
      ],
      imagePath: "/src/assets/stock-private-pilot-training-echo-affordable.jpg",
    },
    {
      title: "Add an Instrument Rating (IR)",
      link: "/training-programs/instrument-rating",
      paragraphs: [
        "An Instrument Rating allows you to fly in clouds and reduced visibility using instruments alone. It’s a critical rating for any pilot planning to fly long-distance, cross-country, or professionally.",
        "Echo’s IR program focuses on decision-making, weather interpretation, and real-world IFR procedures, taught by experienced independent CFIs."
      ],
      imagePath: "/src/assets/stock-instrument-rating-fast-affordable.jpg",
    },
    {
      title: "Earn a Commercial Pilot License (CPL)",
      link: "/training-programs/commercial-pilot",
      paragraphs: [
        "The Commercial Pilot License (CPL) allows you to fly for compensation. This rating builds advanced flight proficiency, precision maneuvers, and prepares you for professional operations.",
        "With Echo Aviation, you receive direct mentorship and hands-on training from an independent CFI, using a schedule and location that works for you."
      ],
      imagePath: "/src/assets/stock-commercial-pilot-training-fast-affordable-echo-aviation.jpg",
    },
    {
      title: "Earn a Flight Instructor Certificate (CFI)",
      link: "/training-programs/certified-flight-instructor-cfi",
      paragraphs: [
        "Becoming a Certified Flight Instructor (CFI) is the most common and efficient way to build flight hours for professional goals. It also deepens your knowledge of aeronautical decision-making and instruction.",
        "Our CFI program prepares you to teach safely and effectively, with guidance from instructors who have walked the same path."
      ],
      imagePath: "/src/assets/stock-certified-flight-instructor-training-pilots-fast-affordable-echo-aviation.jpg",
    },
    {
      title: "Add a Certified Flight Instructor - Instrument (CFII)",
      link: "/training-programs/cfii-add-on",
      paragraphs: [
        "The CFII credential allows you to instruct instrument students, increasing your flight time and teaching experience even further.",
        "Echo Aviation’s CFII program strengthens your IFR instructional capabilities and opens the door to more diverse flight operations and income opportunities."
      ],
      imagePath: "/src/assets/stock-instrument-instructor-rating-echo-aviation.jpg",
    },
    {
      title: "Optional: Add a Multi-Engine Rating (ME)",
      link: "/training-programs/multi-engine#top",
      paragraphs: [
        "A Multi-Engine Rating enhances your qualifications for charter, corporate, and airline paths. It demonstrates your ability to manage complex aircraft and engine-out scenarios.",
        "Echo’s Multi-Engine Add-On is fast and efficient, typically completed in under a month with personalized instruction in a modern twin-engine aircraft."
      ],
      imagePath: "/src/assets/stock-multi-engine-rating-fast-affordable.jpg",
    },
    {
      title: "Build Flight Hours & Gain Experience",
      paragraphs: [
        "Once your instructor certifications are complete, your focus shifts to building hours and refining your skills. Most Echo Aviation graduates build time as CFIs, instructing others while preparing for airline qualifications.",
        "You also gain the flexibility to fly cross-country routes and train in different regions — a real-world advantage only possible through our independent CFI network."
      ],
      imagePath: "/src/assets/stock-experience-flying-affordable-fun-fast-freeing.jpg",
    },
    {
      title: "Interview with Airlines & Begin ATP Training",
      paragraphs: [
        "Once you’ve reached the 1,500-hour mark, you’ll be eligible for the Airline Transport Pilot (ATP) certificate — the final step to becoming an airline pilot.",
        "Echo Aviation students are supported with connections, mentorship, and resources to help prepare for airline interviews and ATP training with confidence."
      ],
      imagePath: "/src/assets/stock-tim-gouw-women-meeting-interview.jpg",
    },
    {
      title: "Begin Your Airline Career",
      paragraphs: [
        "After completing ATP training, you’ll be eligible for your first commercial airline role. Most graduates begin as First Officers with regional carriers, gaining essential airline experience.",
        "From there, you’ll continue to build flight time and advance toward Captain and major airline opportunities — turning your dream into a lifelong aviation career."
      ],
      imagePath: "/src/assets/stock-commercial-airlines-career-pilot.jpg",
    }
  ],
  finalParagraph:
    "Ready to map your flight training journey? Explore Echo Aviation’s flexible programs and accelerate your path to the skies.",
  finalButton: {
    name: "View Programs",
    link: "/training-programs",
    primary: true
  }
};

export default fastTrackRoadmap;
