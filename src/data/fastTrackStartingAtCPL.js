import { COMPANY_NAME } from "../consts";

const fastTrackStartingAtCPL = {
  pageTitle: `Fast-Track Program Starting at Commercial Pilot | ${COMPANY_NAME}`,

  header: {
    stars: true,
    imagePath: "/src/assets/stock-echo-aviation-flight-training-independent-cfis-affordable-accelerated.jpg",
    headerH1: `Fast-Track Program Starting at Commercial</br> CPL to CFI`,
    paragraph: `Start your aviation teaching career. If you already have your Commercial Pilot License, Echo’s fast-track path to CFI and CFII helps you launch your professional journey in just 3–6 months.`,
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
    title: `Commercial to<br> CFI + CFII`,
    paragraphs: [
      "If you're a Commercial Pilot ready to instruct, this program is your next step. It includes both CFI and CFII certifications, giving you the skills and credentials to teach students in VFR and IFR conditions.",
      "Echo’s independent CFI network allows you to train close to home with flexible scheduling, expert mentorship, and complete checkride preparation—all on your time, on your terms.",
    ],
  },

  details: {
    upperHeading: "Already Hold a Commercial Certificate?",
    heading: "Fast-Track to Instructor Certification",
    subHeading:
      "Earn your CFI and CFII ratings in weeks—not years—with personalized training and real-world experience.",

    title: "Overview",
    description: `
      Echo Aviation’s <strong>Commercial to CFII</strong> program is a direct path to instructor status.
      <br/><br/>
      &nbsp;<strong>Hours Included:</strong> 135 flight hours total<br/>
      &nbsp;<strong>Estimated Duration:</strong> 3–6 months<br/>
      &nbsp;<strong>Estimated Cost:</strong> $30,000 (or $37,426 with financing)<br/>
      &nbsp;<strong>Certifications Earned:</strong> CFI and CFII<br/>
      &nbsp;<strong>Aircraft Used:</strong> Single-engine aircraft (Cessna, Piper, or local equivalent)<br/>
      <br/>
      You’ll train with certified independent CFIs, receive full checkride prep, and gain valuable insight into the world of flight instruction.
    `,

    keyPoints: [
      "Designed for Commercial Pilots ready to instruct",
      "Includes both CFI and CFII ratings",
      "Efficient, mentor-led training model",
      "Flexible local training options",
      "No waiting lists or delays",
      "Stratus Financial financing available",
    ],

    included: {
      heading: "What’s Included in Your Training Package?",
      items: [
        "Flight time and instruction for both CFI and CFII",
        "One-on-one mentoring with experienced CFIs",
        "FAA written exam support and prep",
        "Checkride coaching and mock evaluations",
        "Custom scheduling based on your availability",
      ],
    },

    callCTA: {
      heading: "Train to Instruct—Start Earning as a Pilot",
      description:
        "Schedule a Discovery Call today to speak with an Echo Aviation advisor. Learn how to go from Commercial Pilot to paid instructor in just a few months.",
      button: {
        buttonText: "Discovery Call",
        link: "/discovery-call",
      },
    },

    benefits: {
      heading: "Why Start Here with Echo Aviation?",
      items: [
        "Train locally with certified instructors",
        "Graduate with both CFI and CFII certifications",
        "Affordable and flexible scheduling",
        "Gain real-world teaching experience",
        "Mentorship and career guidance included",
      ],
    },

    cta: {
      imagePath: "/src/assets/stock-commercial-pilot-fast-track.jpg",
      title: "Step Into the Right Seat as an Instructor",
      description:
        "Echo Aviation’s fast-track path gets you in the instructor’s seat quickly. Earn your certifications, start building time, and launch a fulfilling aviation career.",
      button: {
        name: "Apply Now",
        link: "/start-flying",
      },
    },

    faqs: [
      {
        question: "How quickly can I finish this program?",
        answer:
          "You can finish in as little as 3 months, depending on your training availability and weather conditions. Most students complete it in 3–6 months.",
      },
      {
        question: "Does this program include CFII? ",
        answer:
          "Yes. The training covers both CFI and CFII, so you’re qualified to instruct in both VFR and IFR environments.",
      },
      {
        question: "Can I get financing?",
        answer:
          "Yes. Echo works with <a href='https://stratus.finance' target='_blank' class='hover:brightness-125 text-primary-600'>Stratus Financial</a> to provide financing plans up to $37,426 total.",
      },
      {
        question: "Where will I train?",
        answer:
          "We’ll connect you with an independent instructor near your location. You’ll fly local aircraft and train on a schedule that fits your life.",
      },
    ],
  },
};

export default fastTrackStartingAtCPL;
