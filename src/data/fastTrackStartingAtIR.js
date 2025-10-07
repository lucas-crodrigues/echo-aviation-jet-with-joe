import { COMPANY_NAME } from "../consts";

const fastTrackStartingAtIR = {
  pageTitle: `Fast-Track Program Starting at Instrument Rating | ${COMPANY_NAME}`,

  header: {
    stars: true,
    imagePath: "/src/assets/stock-echo-aviation-flight-training-independent-cfis-affordable-accelerated.jpg",
    headerH1: `Fast-Track Program Starting at Instrument Rating</br> IR to CFI`,
    paragraph: `Already have your Private Pilot License? This focused program takes you from Instrument Rating through Commercial, CFI, and CFII. Build your skills, log hours, and start instructing in just 3–6 months.`,
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
    title: `Instrument to<br> CFI + CFII`,
    paragraphs: [
      "This track is designed for Private Pilots who are ready to go pro. You’ll earn your Instrument Rating, Commercial Pilot License, and both CFI and CFII certifications in one streamlined path.",
      "Whether you're changing careers or accelerating your current training, this program provides the support, structure, and flexibility to reach instructor status quickly and affordably.",
    ],
  },

  details: {
    upperHeading: "Already a Private Pilot?",
    heading: "Fast-Track from IR to CFI",
    subHeading:
      "From Instrument Rating to Certified Flight Instructor in as little as 3 months.",

    title: "Overview",
    description: `
      Echo Aviation’s <strong>Instrument to CFII</strong> program builds on your existing PPL and fast-tracks you to instructional-level flying.
      <br/><br/>
      &nbsp;<strong>Hours Included:</strong> 185 flight hours total<br/>
      &nbsp;<strong>Estimated Duration:</strong> 3–6 months<br/>
      &nbsp;<strong>Estimated Cost:</strong> $45,000 (or $53,851 with financing)<br/>
      &nbsp;<strong>Certifications Earned:</strong> IR, CPL, CFI, CFII<br/>
      &nbsp;<strong>Aircraft Used:</strong> Local single-engine aircraft<br/>
      <br/>
      You’ll receive <strong>one-on-one mentorship</strong>, full checkride preparation, and personalized guidance from independent instructors throughout your training.
    `,

    keyPoints: [
      "Designed for PPL holders looking to go pro",
      "Earn 4 certifications in one program",
      "Flexible training near your location",
      "Accelerated timeline—finish in under 6 months",
      "Financing available through Stratus Financial",
    ],

    included: {
      heading: "What’s Included in Your Training Package?",
      items: [
        "Flight time for IR, CPL, CFI, and CFII",
        "Ground instruction and FAA test prep",
        "Access to local aircraft and CFIs",
        "Checkride coaching and mentoring",
        "Support with schedule coordination and training planning",
      ],
    },

    callCTA: {
      heading: "Turn Your PPL into a Teaching Career",
      description:
        "Book a Discovery Call with our team and learn how Echo Aviation can take you from Instrument student to Certified Instructor faster than you thought possible.",
      button: {
        buttonText: "Discovery Call",
        link: "/discovery-call",
      },
    },

    benefits: {
      heading: "Why Echo’s IR-to-CFII Path Makes Sense",
      items: [
        "Skip the delays of large academies",
        "Fast, focused training from local CFIs",
        "One price, one path, four certifications",
        "Convenient options close to home",
        "Finish with both CFI and CFII ratings",
      ],
    },

    cta: {
      imagePath: "/src/assets/stock-propeller-plane-flight-training.jpg",
      title: "Start Your Flight Instructor Journey",
      description:
        "Join the next generation of flight instructors with Echo Aviation. With a clear path and expert mentorship, your career in aviation starts here.",
      button: {
        name: "Apply Now",
        link: "/start-flying",
      },
    },

    faqs: [
      {
        question: "Who is this program for?",
        answer:
          "It’s for Private Pilots who want to move directly into professional training. You’ll complete your IR, CPL, CFI, and CFII with one streamlined experience.",
      },
      {
        question: "How long does the IR-to-CFII track take?",
        answer:
          "Most students finish in 3–6 months depending on availability and training frequency. It’s one of the fastest routes to becoming a CFI.",
      },
      {
        question: "What does financing look like?",
        answer:
          "Echo partners with <a href='https://stratus.finance' target='_blank' class='hover:brightness-125 text-primary-600'>Stratus Financial</a> to help students finance up to $53,851 in training costs with flexible plans.",
      },
      {
        question: "Do I need to relocate?",
        answer:
          "No. Echo pairs you with CFIs near your home airport whenever possible, so you can train locally on a schedule that works for you.",
      },
    ],
  },
};

export default fastTrackStartingAtIR;
