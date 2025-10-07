import { COMPANY_NAME } from "../consts";

const spinEndorsementData = {
  pageTitle: `Spin Endorsement | ${COMPANY_NAME}`,

  header: {
    stars: false,
    imagePath: "/src/assets/atlanta-airport-Speedway-Flight-Training-96.webp",
    headerH1: `Spin </br>Endorsement`,
    paragraph: `Meet the FAA requirement for your flight instructor certificate and sharpen your stall/spin recovery skills. Speedway’s Spin Endorsement program offers a focused, one-day course with expert instruction and certified aircraft.`,
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

  details: {
    upperHeading: "Complete Your",
    heading: "Spin Endorsement",
    subHeading:
      "Required for flight instructor applicants and beneficial for all pilots, this program builds spin recovery proficiency in a structured environment.",

    title: "Overview",
    description: `
      Echo Aviation’s <strong>Spin Endorsement program</strong> is designed for aspiring flight instructors and pilots seeking greater confidence in stall/spin scenarios.
      <br/><br/>
      🛩 <strong>Accelerated Format:</strong> Complete in as little as <strong>1 day</strong>.<br/>
      💰 <strong>Estimated Cost:</strong> <strong>$700</strong> (Includes 2 hours of flight instruction).<br/>
      📍 <strong>Location:</strong> Echo Aviation at <strong>Atlanta Speedway Airport (KHMP)</strong>.<br/>
      📜 <strong>FAA Requirement:</strong> Endorsement required for CFIs under <strong>14 CFR §61.183(i)</strong>.<br/>
      ✈️ <strong>Aircraft:</strong> Certified for spin maneuvers with dual controls.<br/>
      <br/>
      This course includes <strong>briefing, in-flight instruction, and a logbook endorsement</strong> upon demonstrating proficiency.
    `,

    keyPoints: [
      "Earn FAA-required spin endorsement for CFI certification",
      "One-on-one instruction in spin-capable aircraft",
      "Hands-on stall, incipient spin, and spin recovery training",
      "Convenient single-day scheduling",
      "Safe, structured training environment with experienced CFIs",
    ],

    included: {
      heading: "What’s Included in Your Training Package?",
      items: [
        "2 hours of dual flight instruction in a spin-certified aircraft",
        "Pre-flight briefing and post-flight debrief",
        "One-on-one instruction from a spin-endorsed flight instructor",
        "Hands-on training in stall recognition, incipient spins, and spin recovery",
        "FAA-compliant logbook endorsement for spin training",
      ],
    },

    additionalCosts: {
      heading: "What’s Not Included (Additional Student Costs)?",
      items: [
        "Noise-canceling aviation headset (~$600 - $1,100; Recommended: Bose, Lightspeed, David Clark)",
        "iPad with GPS (~$500 - $700; Cellular capable, no data plan required)",
        "Aircraft rental insurance (~$600/year; Required for training flights)",
        "ForeFlight subscription (~$250/year; For planning and in-flight use)",
        "FAA 1st Class Medical clearance (~$150; Required for professional pilot careers)",
      ],
    },

    benefits: {
      heading: "Why Train with Speedway?",
      items: [
        "Meet CFI certification requirements quickly and affordably",
        "Hands-on emergency scenario training in real aircraft",
        "Expert instructors with experience in stall/spin recovery techniques",
        "FAA-compliant training and endorsements",
        "Located at KHMP – a quiet airport ideal for focused training",
        "Trusted by students pursuing careers in flight instruction and commercial aviation",
      ],
    },

    cta: {
      imagePath: "/src/assets/stock-victor-zhuk-3MYtBMg8Ex4-unsplash.webp",
      title: "Ready to Earn Your Spin Endorsement?",
      description:
        "Echo Aviation makes it easy to complete your spin training and meet FAA CFI requirements. Schedule your one-day session and train with confidence.",
      button: {
        name: "Apply Now",
        link: "/start-flying",
      },
    },

    faqs: [
      {
        question: "Is the Spin Endorsement required for all CFIs?",
        answer:
          "Yes. Under FAA regulation 14 CFR §61.183(i), all applicants for a flight instructor certificate must receive spin training and a logbook endorsement.",
      },
      {
        question: "Can I complete the Spin Endorsement in one day?",
        answer:
          "Most students complete the training in a single session, including ground briefing, in-flight instruction, and debrief.",
      },
      {
        question: "What aircraft is used for the spin training?",
        answer:
          "We use certified aircraft equipped for spin maneuvers and dual controls to ensure safety and compliance.",
      },
      {
        question: "Do I need this endorsement if I already have a CFI?",
        answer:
          "If you already hold a valid spin endorsement, you don’t need to repeat it unless required by your employer or for proficiency purposes.",
      },
    ],
  },
};

export default spinEndorsementData;
