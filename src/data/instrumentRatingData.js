import { COMPANY_NAME } from "../consts";

const instrumentRatingData = {
  pageTitle: `Instrument Rating Training | IFR Certification | ${COMPANY_NAME}`,

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/stock-instrument-rating-fast-affordable.jpg",
    headerH1: `Instrument <br>RATING</span>`,
    paragraph: `Expand your flight skills and master IFR procedures with Echo Aviation’s Instrument Rating program. Train with expert instructors and gain confidence flying in low-visibility conditions.`,
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
    upperHeading: "Take Your Training Further With an",
    heading: "Instrument Rating",
    subHeading:
      "Enhance your safety, skillset, and career prospects with advanced instrument training. Learn IFR navigation, flight planning, and emergency procedures to fly in all weather conditions.",

    title: "Overview",
    description: `
      Echo Aviation’s <strong>Instrument Rating (IR) program</strong> is designed for pilots who want to <strong>expand their flight capabilities</strong> and gain the skills to fly safely under IFR conditions.
      <br/><br/>
      🚀 <strong>Accelerated Program:</strong> Earn your IR in <strong>6-8 weeks</strong>.<br/>
      📆 <strong>Flexible Training:</strong> Self-paced option available.<br/>
      ✈️ <strong>Training Location:</strong> Echo Aviation at <strong>Atlanta Speedway Airport (KHMP)</strong>.<br/>
      💰 <strong>Estimated Cost:</strong> <strong>$13,000</strong> (based on <strong>40 flight training hours</strong>; additional expenses apply).<br/>
      🛩 <strong>Aircraft Used:</strong> Modern, well-maintained <strong>IFR-certified fleet</strong>.<br/>
      📜 <strong>FAA Requirements:</strong> Minimum <strong>40 hours of instrument flight training</strong>, including simulated instrument training and cross-country time.<br/>
      <br/>
      This program includes <strong>one-on-one instruction with experienced CFIs</strong>, comprehensive <strong>ground school training</strong>, and full <strong>checkride preparation</strong> to ensure you pass your FAA exam with confidence.
    `,

    keyPoints: [
      "Advanced IFR Training for Safe Flight in Low Visibility",
      "Master Instrument Navigation and Flight Planning",
      "Comprehensive Ground School & FAA Exam Preparation",
      "Hands-On IFR Training with Modern Avionics & Flight Simulators",
      "Structured Learning Path with One-on-One Instructor Guidance",
      "Emphasis on Safety-First Decision Making",
    ],

    // What's Included
    included: {
      heading: "What’s Included in Your Training Package?",
      items: [
        "Instrument training with one-on-one instructor guidance",
        "Gleim Deluxe Instrument Pilot Kit with audio review",
        "Foggles (for simulated instrument training)",
        "Fuel tester",
        "Advanced ground school & exam preparation (covers IFR flight procedures, weather interpretation, and emergency scenarios)",
        "IFR flight training using modern avionics and flight simulators",
        "Pre-checkride preparation and flight review",
        "Emphasis on safety-first decision-making, aligning with Speedway's core values",
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
      heading: "Why Train with Speedway?",
      items: [
        "Accelerated Training: Earn your Instrument Rating in 6-8 weeks",
        "Expert Instructors: Personalized one-on-one IFR mentorship",
        "Comprehensive Training: Ground school, simulators, and real-world IFR flights",
        "State-of-the-Art Training Fleet: Learn on modern, well-maintained IFR aircraft",
        "Career Readiness: Build experience for commercial and airline careers",
        "Commitment to Safety & Integrity: Train in a structured, safety-first environment",
      ],
    },

    cta: {
      imagePath: "/src/assets/stock-propeller-plane-flight-training.jpg",
      title: "Advance Your Flight Skills with an Instrument Rating",
      description:
        "Take control in IFR conditions with expert training at Echo Aviation. Enroll in our Instrument Rating program today and gain the skills to fly safely in all weather conditions.",
      button: {
        name: "Apply Now",
        link: "/start-flying",
      },
    },

    // FAQs
    faqs: [
      {
        question: "How long does it take to earn my Instrument Rating?",
        answer:
          "With our accelerated program, students can complete training in <strong>6-8 weeks</strong>. A self-paced program is also available for those needing more scheduling flexibility.",
      },
      {
        question: "Can I finance my training?",
        answer:
          "Yes! We partner with <a href='https://stratus.finance' target='_blank' class='hover:brightness-125 text-primary-600'>Stratus Financial</a> to offer financing options. Contact us to learn more about making your flight training affordable.",
      },
      {
        question: "What kind of aircraft will I train on?",
        answer:
          "Students train on <strong>modern, well-maintained IFR-certified aircraft</strong>, equipped with advanced avionics for instrument training.",
      },
      {
        question: "Will I be ready for my checkride after training?",
        answer:
          "Yes! Our program includes <strong>comprehensive checkride preparation</strong> and <strong>simulated practical exams</strong> to ensure you're fully prepared.",
      },
      {
        question: "What happens after I get my Instrument Rating?",
        answer:
          "Many students continue their training for a <strong>Commercial Pilot License (CPL)</strong> or <strong>Certified Flight Instructor-Instrument (CFII)</strong> certification.",
      },
    ],
  },
};

export default instrumentRatingData;
