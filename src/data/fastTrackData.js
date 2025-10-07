import { COMPANY_NAME } from "../consts";

const fastTrackZeroToCFIData = {
  pageTitle: `Fast-Track Programs | ${COMPANY_NAME}`,

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/stock-echo-aviation-flight-training-independent-cfis-affordable-accelerated.jpg",
    headerH1: `Fast-Track Programs`,
    paragraph: `An all-inclusive, structured program designed to take you from zero experience to a Certified Flight Instructor (CFI). Build flight hours, gain real-world experience, and launch your professional aviation career.`,
    buttons: [
      {
        name: "Apply Now",
        link: "/start-flying",
        primary: false,
      },
      {
        name: "Roadmap",
        link: "#info",
        primary: false,
      },
    ],
  },

  // Program Details
  details: {
    upperHeading: "Accelerate Your Aviation Career",
    heading: `Fast-Track Program Zero to Hero (PPL to CFI)`,
    subHeading:
      "For aspiring pilots who want an efficient and structured path to becoming a professional pilot, this all-inclusive program takes students from zero flight hours to Certified Flight Instructor (CFI).",

    title: "Overview",
    description: `
      Echo Aviation’s <strong>Fast-Track Program Zero to Hero (PPL to CFI)</strong> is designed for students looking to complete their training efficiently and advance toward a career in aviation.
      <br/><br/>
      🚀 <strong>Accelerated Program:</strong> Complete from <strong>zero to CFI in 12-18 months</strong>.<br/>
      📆 <strong>Flexible Training:</strong> Choose a self-paced option if needed.<br/>
      ✈️ <strong>Training Location:</strong> Echo Aviation's nationwide network of independent CFIs.<br/>
      💰 <strong>Estimated Cost:</strong> <strong>$86,125</strong> (based on <strong>265 total flight hours</strong>; additional expenses apply).<br/>
      🛩 <strong>Aircraft Used:</strong> Locally sourced aircraft tailored to your training needs.<br/>
      📜 <strong>FAA Requirements:</strong> Includes all required licenses and ratings for professional pilot training.<br/>
      <br/>
      This program provides <strong>one-on-one mentorship, scenario-based training, and full checkride preparation</strong> to ensure you graduate ready for a successful aviation career.
    `,

    keyPoints: [
      "Complete Training from Zero to CFI in 12–18 Months",
      "Includes PPL, Instrument, CPL, and CFI Ratings",
      "265 Flight Hours with One-on-One Instructor Mentorship",
      "Hands-On Experience in Locally Sourced Aircraft",
      "Structured Ground School & FAA Exam Preparation",
      "Comprehensive Checkride Preparation",
    ],

    // What's Included
    included: {
      heading: "What’s Included in Your Training Package?",
      items: [
        "265 flight training hours with experienced CFIs",
        "One-on-one instructor mentorship throughout the entire program",
        "Ground school & exam preparation for all ratings",
        "Gleim Deluxe Private Pilot Kit",
        "Gleim Instrument Pilot Materials",
        "Gleim Commercial Pilot Materials",
        "Gleim Flight/Ground Instructor + FOI Kit",
        "Foggles (for instrument training)",
        "Fuel tester",
        "Advanced flight maneuvers and scenario-based training",
        "Pre-checkride preparation for each certification level",
        "Emphasis on leadership, safety, and real-world flight operations",
      ],
    },

    // Additional Costs
    additionalCosts: {
      heading: "What’s Not Included (Additional Student Costs)?",
      items: [
        "Noise-canceling aviation headset (~$600 - $1,100; Recommended: Bose, Lightspeed, David Clark)",
        "iPad with GPS (~$500 - $700; Cellular capable, no data plan required)",
        "Aircraft rental insurance (~$600/year; Required for training flights)",
        "ForeFlight subscription (~$250/year; Flight planning & in-flight navigation)",
        "FAA 1st Class Medical clearance (~$150; Required for professional pilots)",
      ],
    },

    // Benefits
    benefits: {
      heading: "Why Train with Echo Aviation?",
      items: [
        "Structured, Accelerated Program for Career-Oriented Pilots",
        "Comprehensive Training from Zero Experience to CFI",
        "Expert Instructors and One-on-One Mentorship",
        "Real-World Scenario-Based Training & Advanced Flight Maneuvers",
        "Locally Sourced Training Aircraft for Flexible Scheduling",
        "Comprehensive Checkride Preparation for Every Certification Level",
      ],
    },

    cta: {
      imagePath: "/src/assets/stock-echo-aviation-flight-training-independent-cfis-affordable-accelerated.jpg",
      title: "Launch Your Aviation Career with Echo Aviation",
      description:
        "Train with expert independent CFIs, gain hands-on experience, and complete your flight training in as little as 12–18 months. Start your journey toward a professional aviation career today!",
      button: {
        name: "Apply Now",
        link: "/start-flying",
      },
    },

    // FAQs
    faqs: [
      {
        question: "How long does it take to complete the Fast-Track Program Zero to Hero?",
        answer:
          "Our accelerated program allows students to complete training in <strong>12–18 months</strong>. A self-paced option is also available for those needing more flexibility.",
      },
      {
        question: "Can I finance my training?",
        answer:
          "Yes! We partner with <a href='https://stratus.finance' target='_blank' class='hover:brightness-125 text-primary-600'>Stratus Financial</a> to offer financing options. Contact us to learn more about making your flight training affordable.",
      },
      {
        question: "What kind of aircraft will I train on?",
        answer:
          "Students train in locally sourced aircraft, chosen based on availability and tailored to your training needs.",
      },
      {
        question: "Will I be ready for my checkride after training?",
        answer:
          "Yes! Our program includes <strong>comprehensive checkride preparation</strong> and <strong>scenario-based flight training</strong> to ensure you're fully prepared.",
      },
      {
        question: "What happens after I complete my CFI training?",
        answer:
          "Many graduates become flight instructors to build experience before transitioning into airline careers. Echo Aviation also provides networking opportunities and guidance for career progression.",
      },
    ],
  },
};

export default fastTrackZeroToCFIData;
