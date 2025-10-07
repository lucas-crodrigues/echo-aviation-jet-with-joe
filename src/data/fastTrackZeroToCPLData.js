import { COMPANY_NAME } from "../consts";

const fastTrackZeroToCPLData = {
  pageTitle: `Fast-Track Program Zero to Commercial | ${COMPANY_NAME}`,

  header: {
    stars: true,
    imagePath: "/src/assets/stock-echo-aviation-flight-training-independent-cfis-affordable-accelerated.jpg",
    headerH1: `Fast-Track Program</br> Zero to Commercial`,
    paragraph: `Train from zero flight hours to Commercial Pilot in just a few months. This accelerated pathway includes PPL, Instrument, and Commercial certifications—ideal for those seeking a direct route to a career in aviation.`,
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
    title: `Zero to<br> Commercial`,
    paragraphs: [
      "Echo Aviation’s Zero-to-Commercial bundle gives students a full foundation in flight—from their first lesson to commercial-level competency. You'll complete the PPL, IR, and CPL, building confidence and real-world experience as you go.",
      "This program is perfect for aspiring career pilots looking to reach the commercial level quickly and affordably, without compromising on training quality.",
    ],
  },

  details: {
    upperHeading: "Earn Your CPL with Our",
    heading: "Zero-to-Commercial Program",
    subHeading: "From no experience to commercial pilot in as little as 3 months.",

    title: "Overview",
    description: `
      Echo Aviation’s <strong>Zero-to-Commercial</strong> program is a bundled training solution designed for rapid advancement.
      <br/><br/>
      &nbsp;<strong>Hours Included:</strong> 250 flight hours total<br/>
      &nbsp;<strong>Estimated Duration:</strong> 3–6 months<br/>
      &nbsp;<strong>Estimated Cost:</strong> $55,000 (or $66,350 with financing)<br/>
      &nbsp;<strong>Certifications Earned:</strong> PPL, IR, CPL<br/>
      &nbsp;<strong>Aircraft Used:</strong> Locally sourced single-engine aircraft (Cessna 172, Piper Archer)<br/>
      <br/>
      Each certification phase includes <strong>personalized training, ground instruction, and checkride preparation</strong> from experienced independent CFIs.
    `,

    keyPoints: [
      "Three major certifications in one package: PPL, IR, CPL",
      "Complete your training in 3–6 months",
      "Train with independent CFIs on your schedule",
      "Streamlined financing available",
      "Real-world flying experience from day one",
    ],

    included: {
      heading: "What’s Included in Your Training Package?",
      items: [
        "Flight instruction for Private, Instrument, and Commercial ratings",
        "Ground school and written exam prep for all stages",
        "FAA-compliant checkride preparation and mentorship",
        "Local aircraft sourcing and airport coordination",
        "Progress tracking and custom scheduling",
      ],
    },

    callCTA: {
      heading: "Advance Your Flight Career",
      description:
        "Connect with an Echo Aviation advisor to map your path from zero hours to commercial pilot certification. It’s faster, more affordable, and more flexible than you think.",
      button: {
        buttonText: "Discovery Call",
        link: "/discovery-call",
      },
    },

    benefits: {
      heading: "Why Choose Echo’s Fast-Track to Commercial?",
      items: [
        "Efficient training with no downtime",
        "One-on-one instruction from experienced CFIs",
        "Flexible local options—train where you live",
        "All-inclusive cost and simple financing",
        "Career-ready flight experience at every level",
      ],
    },

    cta: {
      imagePath: "/src/assets/stock-commercial-pilots-flight-training.jpg",
      title: "From First Flight to First Paycheck",
      description:
        "Our Zero-to-Commercial path helps you build the hours and confidence to succeed in the skies. Start now and see how far you can go.",
      button: {
        name: "Apply Now",
        link: "/start-flying",
      },
    },

    faqs: [
      {
        question: "What’s included in the Zero-to-Commercial program?",
        answer:
          "All flight time and instruction for PPL, IR, and CPL. You also get exam prep, local aircraft coordination, and CFI support at every stage.",
      },
      {
        question: "How fast can I complete this program?",
        answer:
          "Motivated students can finish in 3–6 months depending on availability and scheduling. Echo’s model removes delays found in traditional schools.",
      },
      {
        question: "Can I finance the program?",
        answer:
          "Yes, Echo partners with <a href='https://stratus.finance' target='_blank' class='hover:brightness-125 text-primary-600'>Stratus Financial</a>. Total cost with financing is about $66,350.",
      },
      {
        question: "Do I need to relocate for training?",
        answer:
          "No. Echo connects you with CFIs and aircraft near your location so you can train where it’s most convenient.",
      },
    ],
  },
};

export default fastTrackZeroToCPLData;
