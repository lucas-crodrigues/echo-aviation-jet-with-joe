import { COMPANY_NAME } from "../consts";

const multiEngineData = {
  pageTitle: `Multi-Engine Rating in 3 Weeks | Twin Engine Certification | ${COMPANY_NAME}`,

  // Top Header
  header: {
    stars: false,
    imagePath: "/src/assets/stock-chris-michals-PQXjU65EPKE-unsplash.webp",
    headerH1: `Multi-Engine <br>ADD-ON`,
    paragraph: `Expand your capabilities and career options. Our Multi-Engine Add-On is designed for pilots looking to build time, meet airline requirements, and operate complex aircraft with confidence.`,
    buttons: [
      {
        name: "Apply Now",
        link: "/start-flying",
        primary: false,
      },
      {
        name: "Request Info",
        link: "/about#contact",
        primary: false,
      },
    ],
  },

  // Program Details
  details: {
    upperHeading: "Expand Your Capabilities With a",
    heading: "Multi-Engine Add-On",
    subHeading:
      "Train for complex, high-performance aircraft and build multi-engine time with personalized instruction at Echo Aviation.",

    title: "Overview",
    description: `
      Speedway’s <strong>Multi-Engine Add-On</strong> program is perfect for pilots ready to <strong>advance into commercial or airline operations</strong>. With experienced instructors and modern twin-engine aircraft, you’ll gain the confidence and skills to pass your ME checkride and operate more complex platforms.
      <br/><br/>
      🚀 <strong>Accelerated Program:</strong> Complete in <strong>3–5 weeks</strong><br/>
      📆 <strong>Flexible Scheduling:</strong> Train on your time<br/>
      ✈️ <strong>Training Location:</strong> Echo Aviation at <strong>Atlanta Speedway Airport (KHMP)</strong><br/>
      💰 <strong>Estimated Cost:</strong> <strong>$15,000</strong> (based on 25 flight hours; additional expenses apply)<br/>
      🛩 <strong>Aircraft Used:</strong> Modern, well-maintained multi-engine aircraft<br/>
      📜 <strong>FAA Requirements:</strong> Minimum <strong>25 hours of multi-engine training</strong><br/>
      <br/>
      The program includes <strong>advanced flight maneuvers</strong>, <strong>engine-out procedures</strong>, <strong>Vmc demos</strong>, and <strong>checkride prep</strong>—all with one-on-one mentorship.
    `,

    keyPoints: [
      "Accelerated Multi-Engine Training in 3–5 Weeks",
      "One-on-One Instruction with Experienced ME Instructors",
      "Advanced Engine-Out & Emergency Procedures",
      "Hands-On Flight Time in Modern Multi-Engine Aircraft",
      "Full Checkride Prep Included",
      "Ideal for Pilots Pursuing Airline or Corporate Careers",
    ],

    included: {
      heading: "What’s Included in Your Training Package?",
      items: [
        "Up to 25 hours of multi-engine flight training",
        "One-on-one instruction with experienced multi-engine instructors",
        "Ground school & exam preparation",
        "Training in advanced multi-engine maneuvers and emergency procedures",
        "Gleim multi-engine training materials",
        "Pre-checkride evaluation and maneuver review",
        "Scenario-based training focused on real-world decision-making",
      ],
    },

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

    benefits: {
      heading: "Why Add a Multi-Engine Rating at Speedway?",
      items: [
        " Get Multi-Engine Certified in Just 3–5 Weeks",
        " Train with Instructors Who Specialize in ME Checkride Prep",
        " Learn in a Controlled, Low-Traffic Training Environment (KHMP)",
        " Build Complex Aircraft Time for Airline Applications",
        " Boost Your Confidence & Emergency Procedure Mastery",
        " Join a Community That Supports Your Aviation Goals",
      ],
    },

    cta: {
      imagePath: "/src/assets/stock-multi-engine-rating-fast-affordable.jpg",
      title: "Advance Your Aviation Career",
      description:
        "Get your multi-engine rating and fly with confidence. Our team is ready to guide you through every step of the process—apply today to get started.",
      button: {
        name: "Apply Now",
        link: "/start-flying",
      },
    },

    faqs: [
      {
        question: "How long does the Multi-Engine Add-On take?",
        answer:
          "The program is designed to be completed in <strong>as little as 3–5 weeks</strong>, depending on scheduling and student availability.",
      },
      {
        question: "Can I finance my multi-engine training?",
        answer:
          "Yes. We work with <a href='https://stratus.finance' target='_blank' class='hover:brightness-125 text-primary-600'>Stratus Financial</a> and other partners to help you finance your program.",
      },
      {
        question: "Is multi-engine training required for airline jobs?",
        answer:
          "Yes. <strong>Multi-engine time is often a requirement</strong> for airline, cargo, and corporate flying. Adding this rating helps you stay competitive.",
      },
      {
        question: "What kind of aircraft will I fly?",
        answer:
          "You’ll train in <strong>modern, well-maintained twin-engine aircraft</strong> that are equipped for advanced training and checkride preparation.",
      },
      {
        question: "Can I combine this with my Commercial training?",
        answer:
          "Yes. If you haven’t yet earned your CPL, we offer <a href='/fast-track' class='hover:underline text-primary-600'>Fast Track</a> bundles that include your multi-engine add-on at the end.",
      },
    ],
  },
};

export default multiEngineData;
