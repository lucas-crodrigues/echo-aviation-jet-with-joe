import { COMPANY_NAME } from "../consts";

const fastTrackZeroToCFIData = {
  pageTitle: `Fast-Track Program Zero to Hero PPL to MEI | ${COMPANY_NAME}`,

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/stock-echo-aviation-flight-training-independent-cfis-affordable-accelerated.jpg",
    headerH1: `Fast-Track Program</br> Zero to Hero</br> PPL to MEI`,
    paragraph: `An all-inclusive, structured program designed to take you from zero experience to a Certified Multi-Engine Flight Instructor (MEI). Build flight hours, gain real-world experience, and launch your professional aviation career.`,
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

    pageSummary: {
      title: `Zero to<br> CFI + MEI`,
      paragraphs: [
        "Echo Aviation’s Zero-to-Hero program is a full training pathway for aspiring career pilots. You’ll start from zero experience and train through every major certification—Private, Instrument, Commercial, CFI, CFII, and Multi-Engine Instructor (MEI).",
        "Designed for motivated students, this accelerated program provides efficient, personalized training with no institutional delays. Learn with flexible scheduling, local aircraft, and one-on-one instruction from expert CFIs.",
      ],
    },

    details: {
      upperHeading: "Launch Your Career with a",
      heading: "Zero-to-Hero Program",
      subHeading:
        "All-in-one accelerated training for students ready to become professional pilots in under a year.",

      title: "Overview",
      description: `
        Echo Aviation’s <strong>Zero-to-Hero</strong> program includes everything from your first flight to your final instructor rating.
        <br/><br/>
         &nbsp;<strong>Hours Included:</strong> 270 flight hours total<br/>
         &nbsp;<strong>Estimated Duration:</strong> 6–12 months<br/>
         &nbsp;<strong>Estimated Cost:</strong> $75,000 (or $89,400 with financing)<br/>
         &nbsp;<strong>Training Type:</strong> One-on-one instruction with independent CFIs<br/>
         &nbsp;<strong>Certifications Earned:</strong> PPL, IR, CPL, CFI, CFII, MEI<br/>
         &nbsp;<strong>Aircraft Used:</strong> Cessna 172s, Piper Archers, and multi-engine aircraft (locally sourced)<br/>
        <br/>
        All training is delivered by experienced CFIs who provide <strong>customized instruction, flight mentoring, and full checkride preparation</strong> at every level.
      `,

      keyPoints: [
        "One complete pathway from beginner to certified instructor",
        "Finish in 6–12 months with our accelerated model",
        "Hands-on, one-on-one training with independent CFIs",
        "Train at your pace—full-time or part-time options",
        "Includes multi-engine time and MEI training",
        "Financing available through Stratus Financial",
      ],

      included: {
        heading: "What’s Included in Your Training Package?",
        items: [
          "All flight time required for PPL, IR, CPL, CFI, CFII, and MEI",
          "Personalized instruction with qualified CFIs",
          "Ground school prep and FAA written exam guidance",
          "Multi-engine training and instructor add-ons",
          "Pre-checkride coaching and mock orals",
          "Mentorship and career planning support",
        ],
      },

      callCTA: {
        heading: "Start Your Journey to the Flight Deck",
        description:
          "Schedule a free Discovery Call to talk with an Echo Aviation advisor. Learn how fast and affordable it is to go from zero experience to certified flight instructor.",
        button: {
          buttonText: "Discovery Call",
          link: "/discovery-call",
        },
      },

      benefits: {
        heading: "Why Choose the Zero-to-Hero Pathway?",
        items: [
          "All major ratings in one package",
          "Efficient and affordable career path",
          "Train with experienced CFIs near you",
          "Hands-on flight time, not classroom delays",
          "Flexible scheduling and local airport options",
          "No corporate restrictions or long waitlists",
        ],
      },

      cta: {
        imagePath:
          "/src/assets/stock-zero-to-hero-professional-pilot-training.jpg",
        title: "Take the Fast Lane to a Flying Career",
        description:
          "With Echo Aviation, you don’t just learn to fly—you launch a career. Go from zero to MEI with real-world experience, flexible training, and the mentorship you need to succeed.",
        button: {
          name: "Apply Now",
          link: "/start-flying",
        },
      },

      faqs: [
        {
          question: "What’s included in the Zero-to-Hero program?",
          answer:
            "All flight time and instruction needed for PPL, IR, CPL, CFI, CFII, and MEI. You’ll also receive ground prep, mentorship, and checkride readiness support.",
        },
        {
          question: "How long does this program take?",
          answer:
            "Most students finish in 6–12 months depending on their pace and availability. It’s one of the fastest ways to go from no experience to instructor.",
        },
        {
          question: "Can I finance the program?",
          answer:
            "Yes. We work with <a href='https://stratus.finance' target='_blank' class='hover:brightness-125 text-primary-600'>Stratus Financial</a> to offer flexible financing options. Total cost with financing is approximately $89,400.",
        },
        {
          question: "Do I need to relocate?",
          answer:
            "Nope. Echo Aviation works with independent instructors across the country. We'll help you train close to home using available aircraft.",
        },
      ],
  },
};

export default fastTrackZeroToCFIData;
