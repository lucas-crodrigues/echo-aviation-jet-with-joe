import { COMPANY_NAME } from "../consts";

const privatePilotData = {
  pageTitle: `Private Pilot License in 8 Weeks | Hampton GA Flight School | ${COMPANY_NAME}`,

  // Top Header
  header: {
    stars: true,
    imagePath:
      "/src/assets/atlanta-airport-Speedway-Flight-Training-132-croped.webp",
    headerH1: `Private Pilot <br>LICENSE</span>`,
    paragraph: `The foundation of your aviation journey. Train with expert instructors, gain real-world flight experience, and complete your Private Pilot License in as little as 8 weeks with Echo Aviation.`,
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
    upperHeading: "Get Started With a",
    heading: "Private Pilot License",
    subHeading:
      "Your journey to becoming a pilot starts here. Whether you're flying recreationally or pursuing a career in aviation, this program provides the essential skills and knowledge to succeed.",

    title: "Overview",
    description: `
      Echo Aviation’s <strong>Private Pilot License (PPL) program</strong> is designed for students who want to <strong>become a certified pilot</strong> with a structured and professional training approach.
      <br/><br/>
      🚀 <strong>Accelerated Program:</strong> Earn your PPL in <strong>as little as 8 weeks</strong>.<br/>
      📆 <strong>Flexible Training:</strong> Choose a self-paced option based on your schedule.<br/>
      ✈️ <strong>Training Location:</strong> Echo Aviation at <strong>Atlanta Speedway Airport (KHMP)</strong>.<br/>
      💰 <strong>Estimated Cost:</strong> <strong>$16,250</strong> (based on <strong>50 flight training hours</strong>; additional expenses apply).<br/>
      🛩 <strong>Aircraft Used:</strong> Modern, well-maintained <strong>Cessna 172 fleet</strong>.<br/>
      📜 <strong>FAA Requirements:</strong> Minimum <strong>40 flight hours</strong>, but students typically require <strong>50+ hours</strong>.<br/>
      <br/>
      This program includes <strong>one-on-one instruction with experienced CFIs</strong>, comprehensive <strong>ground school training</strong>, and full <strong>checkride preparation</strong> to ensure you pass your FAA exam with confidence.
    `,

    keyPoints: [
      "Accelerated Training: Complete in as little as 8 weeks",
      "Flexible Self-Paced Option Available",
      "FAA-Approved Training Curriculum",
      "One-on-One Instruction from Expert CFIs",
      "Hands-On Experience in Modern, Well-Maintained Aircraft",
      "Comprehensive Checkride Preparation",
    ],

    // What's Included
    included: {
      heading: "What’s Included in Your Training Package?",
      items: [
        "50 flight training hours (FAA minimum: 40 hours)",
        "One-on-one instructor training with experienced flight instructors",
        "Ground school & exam preparation (FAA regulations, navigation, flight planning)",
        "Gleim Deluxe Private Pilot Kit with audio review",
        "Foggles (for instrument training practice)",
        "Fuel tester",
        "Pre-checkride preparation (maneuver refinement & test readiness)",
        "Safety-focused training environment that prioritizes student well-being",
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
        " Accelerated Training: Earn your PPL in just 8 weeks",
        " Expert Instructors: One-on-one mentorship from highly qualified CFIs",
        " Structured Learning Path: Comprehensive ground school + in-flight training",
        " State-of-the-Art Training Fleet: Learn on modern, well-maintained aircraft",
        " Career Readiness: Build a solid foundation for advanced ratings & commercial aviation",
        " Commitment to Safety & Integrity: Your training experience is backed by Speedway’s core values",
      ],
    },

    cta: {
      imagePath:
        "/src/assets/atlanta-airport-Speedway-Flight-Training-130.webp",
      title: "Fast Track Your Aviation Journey",
      description:
        "Take the first step toward your dream of flying. Train with experienced instructors and earn your Private Pilot License in a structured, professional, and safety-focused environment.",
      button: {
        name: "Apply Now",
        link: "/start-flying",
      },
    },

    // FAQs
    faqs: [
      {
        question: "How long does it take to earn my Private Pilot License?",
        answer:
          "With our accelerated program, students can complete training in <strong>8 weeks</strong>. A self-paced program is also available for those needing more scheduling flexibility.",
      },
      {
        question: "Can I finance my training?",
        answer:
          "Yes! We partner with <a href='https://stratus.finance' target='_blank' class='hover:brightness-125 text-primary-600'>Stratus Financial</a> to offer financing options. Contact us to learn more about making your flight training affordable.",
      },
      {
        question: "What kind of aircraft will I train on?",
        answer:
          "Students train on <strong>modern, well-maintained Cessna 172 aircraft</strong>, suitable for both VFR and IFR training.",
      },
      {
        question: "Will I be ready for my checkride after training?",
        answer:
          "Absolutely! Our program includes <strong>comprehensive checkride preparation</strong> and <strong>simulated practical exams</strong> to ensure you're fully prepared.",
      },
      {
        question: "What happens after I get my PPL?",
        answer:
          "Many students continue their training for an <strong>Instrument Rating (IR), Commercial Pilot License (CPL), or Certified Flight Instructor (CFI) rating</strong>.",
      },
    ],
  },
};

export default privatePilotData;
