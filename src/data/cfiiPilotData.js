import { COMPANY_NAME } from "../consts";

const cfiiPilotData = {
  pageTitle: `Certified Flight Instructor – Instrument (CFII) | ${COMPANY_NAME}`,

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/atlanta-airport-Speedway-Flight-Training-129-croped.webp",
    headerH1: `Flight Instructor <br>INSTRUMENT (CFII)</span>`,
    paragraph: `Take your instructional skills to the next level with Speedway’s CFII program. Learn to teach instrument flight techniques and expand your professional opportunities in aviation education.`,
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
    upperHeading: "Advance Your Instructor Credentials with a",
    heading: "Certified Flight Instructor – Instrument (CFII)",
    subHeading:
      "Speedway’s CFII program prepares you to instruct aspiring pilots in IFR procedures, giving you more teaching opportunities and making you a more versatile flight instructor.",

    title: "Overview",
    description: `
      Echo Aviation’s <strong>Certified Flight Instructor – Instrument (CFII) program</strong> is ideal for current CFIs looking to expand their credentials and teach instrument students.
      <br/><br/>
      🚀 <strong>Accelerated Program:</strong> Complete your CFII in as little as <strong>4–6 weeks</strong>.<br/>
      ✈️ <strong>Training Location:</strong> Echo Aviation at <strong>Atlanta Speedway Airport (KHMP)</strong>.<br/>
      💰 <strong>Estimated Cost:</strong> <strong>$8,125</strong> (based on <strong>25 flight training hours</strong>; additional expenses apply).<br/>
      🛩 <strong>Aircraft Used:</strong> Modern, well-maintained fleet equipped for <strong>IFR training</strong>.<br/>
      📜 <strong>FAA Requirements:</strong> <strong>25 hours</strong> of instrument instructor flight training.<br/>
      <br/>
      This course includes <strong>advanced IFR instruction techniques, scenario-based training, and simulator practice</strong> to fully prepare you to train instrument-rated pilots.
    `,

    keyPoints: [
      "Complete in 4–6 weeks with accelerated training",
      "Train one-on-one with experienced CFII instructors",
      "Use of modern aircraft and IFR-capable simulators",
      "Scenario-based teaching methods for real-world preparation",
      "Ground school and FAA exam prep included",
      "Comprehensive checkride preparation and evaluation",
    ],

    // What's Included
    included: {
      heading: "What’s Included in Your Training Package?",
      items: [
        "25 flight hours of instrument instructor training",
        "One-on-one instruction with experienced CFII mentors",
        "Ground school & FAA exam preparation",
        "Gleim Flight/Ground Instructor + FOI Kit",
        "Advanced instrument instruction techniques and simulator training",
        "Scenario-based IFR teaching methodologies",
        "Pre-checkride preparation and evaluation",
      ],
    },

    // Additional Costs
    additionalCosts: {
      heading: "What’s Not Included (Additional Student Costs)?",
      items: [
        "Noise-canceling aviation headset (~$600 - $1,100; Recommended brands: Bose, Lightspeed, David Clark)",
        "iPad with GPS (~$500 - $700; Cellular capable, no data plan required)",
        "Aircraft rental insurance (~$600/year; Required for training flights)",
        "ForeFlight subscription (~$250/year; For flight planning and in-flight navigation)",
        "FAA 1st Class Medical clearance (~$150; Required for those pursuing a professional pilot career)",
      ],
    },

    // Benefits
    benefits: {
      heading: "Why Train with Speedway?",
      items: [
        "Accelerated CFII training in as little as 4–6 weeks",
        "Mentorship from experienced, active CFII instructors",
        "Access to IFR-equipped aircraft and simulators",
        "Scenario-based instruction and advanced teaching techniques",
        "Supportive, safety-first learning environment",
        "Preparation for real-world instrument training scenarios",
      ],
    },

    // CTA
    cta: {
      imagePath: "/src/assets/stock-koon-chakhatrakan-SA-ALYhGjj8-unsplash.webp",
      title: "Expand Your Career as an Instrument Instructor",
      description:
        "Train with Echo Aviation and earn your CFII in a focused, professional environment. Build your skills and prepare to guide future pilots through instrument training.",
      button: {
        name: "Apply Now",
        link: "/start-flying",
      },
    },

    // FAQs
    faqs: [
      {
        question: "How long does it take to complete the CFII program?",
        answer:
          "With our accelerated structure, most students complete the CFII program in <strong>4–6 weeks</strong> depending on their schedule and availability.",
      },
      {
        question: "What are the prerequisites for this program?",
        answer:
          "You must already hold a Commercial Pilot License with an Instrument Rating and be a Certified Flight Instructor (CFI) before starting CFII training.",
      },
      {
        question: "Is simulator training included?",
        answer:
          "Yes! We include simulator-based instruction alongside real-world flight training to prepare you for teaching in IFR conditions.",
      },
      {
        question: "Can I teach IFR students after earning my CFII?",
        answer:
          "Absolutely. Earning your CFII qualifies you to instruct students working toward their Instrument Rating under both Part 61 and Part 141 (if the school is approved).",
      },
      {
        question: "Do you offer financing options?",
        answer:
          "Yes! We partner with <a href='https://stratus.finance' target='_blank' class='hover:brightness-125 text-primary-600'>Stratus Financial</a> to help students fund their flight training programs.",
      },
    ],
  },
};

export default cfiiPilotData;
