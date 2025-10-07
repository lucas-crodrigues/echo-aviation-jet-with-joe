import { COMPANY_NAME } from "../consts";

const allProgramsPage = {
  pageTitle: `Flight Training Programs in Akron | ${COMPANY_NAME}`,

  // Top Header
  header: {
    stars: true,
    imagePath:
      "/src/assets/stock-flight-training-affordable-independent-fast.jpg",
    headerH1: `Flight Training Programs in Akron`,
    paragraph: `From your first flight lesson in Akron to advanced instructor certifications, Echo Aviation offers a flexible path forward at every stage of your aviation journey. Work one-on-one with independent Akron-based CFIs and train at your pace, locally and affordably.`,
    buttons: [
      {
        name: "Apply Now",
        link: "/start-flying",
        primary: false,
      },
      {
        name: "Talk to an Advisor",
        link: "/discovery-call",
        primary: false,
      },
    ],
  },

  roadmap: {
    heading: "Pilot Training Roadmap in Akron",
    steps: [
      {
        title: "Private Pilot License (PPL)",
        link: "/training-programs/private-pilot",
        paragraphs: [
          "The Private Pilot License is your entry point into aviation. Learn the fundamentals of flight, airspace, weather, and basic navigation while building real-world experience flying out of Akron.",
          "Echo Aviation’s independent CFIs in Akron deliver one-on-one instruction tailored to your pace and schedule. This certificate is your first major milestone toward more advanced ratings.",
        ],
        imagePath:
          "/src/assets/stock-private-pilot-training-echo-affordable.jpg",
      },
      {
        title: "Instrument Rating (IR)",
        link: "/training-programs/instrument-rating",
        paragraphs: [
          "An Instrument Rating allows you to fly in low visibility and under Instrument Flight Rules (IFR). It’s a critical step for any pilot aiming to fly professionally.",
          "Echo Aviation in Akron offers flexible IR training that emphasizes safety, precision, and mastery of in-flight systems — all with personalized instruction.",
        ],
        imagePath: "/src/assets/stock-instrument-rating-fast-affordable.jpg",
      },
      {
        title: "Commercial Pilot License (CPL)",
        link: "/training-programs/commercial-pilot",
        paragraphs: [
          "A Commercial Pilot License enables you to fly for compensation. Echo Aviation’s CPL training in Akron includes advanced maneuvers, cross-country proficiency, and professional-level airmanship.",
          "Train with a dedicated Akron instructor who can customize the pace and location of your training based on your availability.",
        ],
        imagePath:
          "/src/assets/stock-commercial-pilot-training-fast-affordable-echo-aviation.jpg",
      },
      {
        title: "Multi-Engine Rating (ME)",
        link: "/training-programs/multi-engine#top",
        paragraphs: [
          "The Multi-Engine Add-On certifies you to fly aircraft with more than one engine — often required by airlines, charters, and corporate operators.",
          "This optional rating at Echo Aviation in Akron is delivered by independent CFIs with access to twin-engine aircraft, covering advanced aerodynamics, engine-out procedures, and cross-country operations.",
        ],
        imagePath: "/src/assets/stock-multi-engine-rating-fast-affordable.jpg",
      },
      {
        title: "Certified Flight Instructor (CFI)",
        link: "/training-programs/certified-flight-instructor-cfi",
        paragraphs: [
          "Becoming a CFI is a common next step after earning your CPL — it allows you to start earning income while building hours toward airline minimums.",
          "Echo Aviation’s Akron-based CFI program includes lesson planning, fundamentals of instruction (FOI), and checkride prep with real-world mentorship from active instructors.",
        ],
        imagePath:
          "/src/assets/stock-certified-flight-instructor-training-pilots-fast-affordable-echo-aviation.jpg",
      },
      {
        title: "Certified Flight Instructor – Instrument (CFII)",
        link: "/training-programs/cfii-add-on",
        paragraphs: [
          "A CFII allows you to teach instrument flying — expanding your teaching opportunities and accelerating your time building.",
          "Our Akron CFII program focuses on IFR teaching techniques, safety procedures, and ensuring you're confident in both the left and right seat under the hood.",
        ],
        imagePath:
          "/src/assets/stock-instrument-instructor-rating-echo-aviation.jpg",
      },
    ],
  },
};

export default allProgramsPage;
