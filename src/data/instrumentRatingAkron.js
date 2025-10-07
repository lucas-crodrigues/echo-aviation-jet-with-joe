import { COMPANY_NAME } from "../consts";

const instrumentRatingCourse = {
  data: {
    slug: "instrument-rating",
    pageTitle: `Instrument Rating (IR) Training in Akron | ${COMPANY_NAME}`,

    header: {
      stars: true,
      imagePath:
        "/src/assets/stock-instrument-rating-fast-fun-affordable-cross-country.jpg",
      headerH1: "Instrument Rating (IR) – Akron",
      paragraph:
        "Take your flying to the next level in Akron. Earn your Instrument Rating and gain the skills to fly in a wider range of weather and airspace.",
      buttons: [
        { name: "Apply Now", link: "/start-flying", primary: false },
        { name: "Discovery Call", link: "/discovery-call", primary: false },
      ],
    },

    pageSummary: {
      title: "Train for<br> Instrument Flight in Akron",
      paragraphs: [
        "The Instrument Rating allows you to fly under Instrument Flight Rules (IFR), giving you the ability to fly in low-visibility conditions and controlled airspace.",
        "Our Akron-based CFIs focus on practical IFR flying using local aircraft, tailoring the pace of training to your schedule and goals.",
      ],
    },

    details: {
      upperHeading: "Expand Your Horizons",
      heading: "Instrument Rating – Akron",
      subHeading:
        "Gain precision and safety with advanced instrument flight training from certified instructors in Akron.",

      title: "Overview",
      description: `
        Echo Aviation’s <strong>Instrument Rating</strong> course in Akron helps you become a more confident and capable pilot.
        <br/><br/>
        &nbsp;<strong>Hours Included:</strong> 50 flight hours<br/>
        &nbsp;<strong>Estimated Duration:</strong> 1–3 months<br/>
        &nbsp;<strong>Estimated Cost:</strong> $9,375 (or $16,425 with financing)<br/>
        &nbsp;<strong>Aircraft Used:</strong> Cessna 172 or locally available IFR-equipped aircraft<br/>
        <br/>
        This program includes dual instruction, ground prep, and simulated IFR training with hood or view-limiting devices.
      `,

      keyPoints: [
        "Learn to fly in IMC (Instrument Meteorological Conditions)",
        "Practice real-world IFR procedures and ATC communication",
        "Includes ground school and written exam prep",
        "One-on-one instruction in Akron, no classroom delays",
        "Financing options available through Stratus",
      ],

      included: {
        heading: "What’s Included in Your Training Package?",
        items: [
          "Flight instruction with IFR-qualified Akron-based CFIs",
          "Simulated instrument flight and cross-country training",
          "Approach, enroute, and holding procedure practice",
          "Ground prep and FAA written exam guidance",
          "Checkride readiness evaluation and mock orals",
        ],
      },

      callCTA: {
        heading: "Ready to Fly in the Clouds Over Akron?",
        description:
          "Book a free Discovery Call to learn how Echo Aviation can help you earn your Instrument Rating quickly and affordably in Akron.",
        button: { buttonText: "Book Now", link: "/discovery-call" },
      },

      benefits: {
        heading: "Why Get an Instrument Rating in Akron?",
        items: [
          "Legally fly in more weather conditions",
          "Access more controlled and complex airspace",
          "Improve your safety and situational awareness",
          "Required step for commercial pilots",
          "Enhance flight planning and navigation skills",
        ],
      },

      cta: {
        imagePath:
          "/src/assets/stock-instrument-rating-fast-fun-affordable-cross-country.jpg",
        title: "Take Control in the Clouds Over Akron",
        description:
          "Train for your Instrument Rating with Echo Aviation in Akron and gain the precision and confidence to fly under IFR.",
        button: { name: "Apply Now", link: "/start-flying" },
      },

      faqs: [
        {
          question: "How long does the Instrument Rating take in Akron?",
          answer:
            "Most Akron-based students complete the course in 1–3 months depending on their training frequency and schedule.",
        },
        {
          question: "Can I use a simulator for some of my Akron training?",
          answer:
            "Yes. Echo Aviation CFIs in Akron may incorporate approved simulator time into your training where applicable.",
        },
        {
          question: "Is an Instrument Rating required for airline careers?",
          answer:
            "Yes. The Instrument Rating is an essential part of any commercial or professional pilot path.",
        },
      ],
    },
  },
};

export default instrumentRatingCourse;
