import { COMPANY_NAME } from "../consts";

const instrumentRatingCourse = {
  data: {
    slug: "instrument-rating",
    pageTitle: `Instrument Rating (IR) Course | ${COMPANY_NAME}`,

    header: {
      stars: true,
      imagePath: "/src/assets/stock-instrument-rating-fast-fun-affordable-cross-country.jpg",
      headerH1: "Instrument Rating (IR)",
      paragraph: "Take your flying to the next level. Earn your Instrument Rating and gain the skills to fly in a wider range of weather and airspace.",
      buttons: [
        { name: "Apply Now", link: "/start-flying", primary: false },
        { name: "Discovery Call", link: "/discovery-call", primary: false },
      ],
    },

    pageSummary: {
      title: "Train for<br> Instrument Flight",
      paragraphs: [
        "The Instrument Rating allows you to fly under Instrument Flight Rules (IFR), giving you the ability to fly in low-visibility conditions and controlled airspace.",
        "Our training focuses on practical IFR flying using local aircraft and independent CFIs who tailor the pace to your needs.",
      ],
    },

    details: {
      upperHeading: "Expand Your Horizons",
      heading: "Instrument Rating",
      subHeading: "Gain precision and safety with advanced instrument flight training from certified instructors.",

      title: "Overview",
      description: `
        Echo Aviation’s <strong>Instrument Rating</strong> course helps you become a more confident and capable pilot.
        <br/><br/>
        &nbsp;<strong>Hours Included:</strong> 50 flight hours<br/>
        &nbsp;<strong>Estimated Duration:</strong> 1–3 months<br/>
        &nbsp;<strong>Estimated Cost:</strong> $9,375 (or $16,425 with financing)<br/>
        &nbsp;<strong>Aircraft Used:</strong> Cessna 172 or similar IFR-equipped aircraft<br/>
        <br/>
        This program includes dual instruction, ground prep, and simulated IFR training with hood or view-limiting devices.
      `,

      keyPoints: [
        "Learn to fly in IMC (Instrument Meteorological Conditions)",
        "Practice real-world IFR procedures and ATC communication",
        "Includes ground school and written exam prep",
        "One-on-one instruction, no classroom delays",
        "Financing options available through Stratus",
      ],

      included: {
        heading: "What’s Included in Your Training Package?",
        items: [
          "Flight instruction with IFR-qualified CFIs",
          "Simulated instrument flight and cross-country",
          "Approach, enroute, and holding procedure training",
          "Ground prep and FAA written exam guidance",
          "Checkride readiness evaluation and mock orals",
        ],
      },

      callCTA: {
        heading: "Want to Fly in the Clouds?",
        description: "Book a free Discovery Call to learn how Echo Aviation can help you earn your Instrument Rating quickly and affordably.",
        button: { buttonText: "Book Now", link: "/discovery-call" },
      },

      benefits: {
        heading: "Why Get an Instrument Rating?",
        items: [
          "Legally fly in more weather conditions",
          "Access more controlled and complex airspace",
          "Improve your safety and situational awareness",
          "Required step for commercial pilots",
          "Enhance flight planning and navigation skills",
        ],
      },

      cta: {
        imagePath: "/src/assets/stock-instrument-rating-fast-fun-affordable-cross-country.jpg",
        title: "Take Control in the Clouds",
        description: "Train for your Instrument Rating with Echo Aviation and gain the precision and confidence to fly under IFR.",
        button: { name: "Apply Now", link: "/start-flying" },
      },

      faqs: [
        {
          question: "How long does the Instrument Rating take?",
          answer: "Most students complete the course in 1–3 months depending on their training frequency and schedule.",
        },
        {
          question: "Can I use a simulator for some training?",
          answer: "Yes. Echo Aviation CFIs may incorporate approved simulator time into your training where applicable.",
        },
        {
          question: "Is an Instrument Rating required for airline careers?",
          answer: "Yes. The Instrument Rating is an essential part of any commercial or professional pilot path.",
        },
      ],
    },
  },
};

export default instrumentRatingCourse;
