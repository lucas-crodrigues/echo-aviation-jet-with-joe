import { COMPANY_NAME } from "../consts";

const multiEngineRating = {
  data: {
    slug: "multi-engine-rating",
    pageTitle: `Multi-Engine Rating | ${COMPANY_NAME}`,

    header: {
      stars: true,
      imagePath: "/src/assets/stock-multi-engine-rating-independent-cfis-faster-cheaper-affordable.jpg",
      headerH1: "Multi-Engine Rating",
      paragraph:
        "Get certified to fly multi-engine aircraft and expand your flight qualifications. This course provides personalized training in twin-engine planes with flexible scheduling and local availability.",
      buttons: [
        {
          name: "Apply Now",
          link: "/start-flying",
          primary: false,
        },
        {
          name: "Talk to a Program Advisor",
          link: "/discovery-call",
          primary: false,
        },
      ],
    },

    pageSummary: {
      title: "Multi-Engine<br>Rating",
      paragraphs: [
        "The Multi-Engine Rating is a popular add-on for commercial pilots, CFI candidates, and career-track students who want to increase their opportunities and qualifications.",
        "At Echo Aviation, our independent CFIs offer multi-engine instruction in aircraft sourced locally. We work with your schedule and training goals to get you certified with flexibility and personalized instruction.",
      ],
    },

    details: {
      upperHeading: "Earn Your",
      heading: "Multi-Engine Rating",
      subHeading:
        "Flexible, instructor-led multi-engine training using locally available aircraft.",

      title: "Overview",
      description: `
        Echo Aviation’s <strong>Multi-Engine Rating</strong> program is ideal for pilots seeking to expand their capabilities by adding a twin-engine endorsement.
        <br/><br/>
         &nbsp;<strong>Hours Included:</strong> 25 flight hours<br/>
         &nbsp;<strong>Estimated Duration:</strong> 5–21 days<br/>
         &nbsp;<strong>Estimated Cost:</strong> $10,000 (or $12,500 with financing)<br/>
         &nbsp;<strong>Training Type:</strong> One-on-one instruction with independent CFIs<br/>
         &nbsp;<strong>Aircraft Used:</strong> Locally sourced multi-engine aircraft<br/>
        <br/>
        Want to train faster? <strong>Ask us about our Accelerated Multi-Engine program</strong> to complete your rating in as little as 4 days.
      `,

      keyPoints: [
        "Twin-engine aircraft training",
        "Flexible timeline: 5–21 days",
        "Accelerated option available",
        "Locally sourced aircraft",
        "One-on-one instruction with expert CFIs",
        "FAA checkride preparation included",
      ],

      included: {
        heading: "What’s Included in Your Training Package?",
        items: [
          "25 hours of multi-engine flight time",
          "One-on-one instruction with experienced multi-engine CFIs",
          "Ground school prep specific to multi-engine operations",
          "Flight planning, emergency procedures, and engine-out scenarios",
          "Checkride preparation and mock orals",
        ],
      },

      callCTA: {
        heading: "Ready to Add a Multi-Engine Rating?",
        description:
          "Talk with one of our program advisors to find the best training pace and aircraft option for your goals. We’ll help you schedule your multi-engine training and get checkride-ready.",
        button: {
          buttonText: "Schedule Discovery Call",
          link: "/discovery-call",
        },
      },

      benefits: {
        heading: "Why Choose Echo Aviation for ME Training?",
        items: [
          "Fast-track and flexible program options",
          "One-on-one training with experienced instructors",
          "No need to relocate — we work with aircraft near you",
          "Full checkride preparation",
          "Competitive pricing with financing available",
        ],
      },

      cta: {
        imagePath: "/src/assets/stock-multi-engine-rating-independent-cfis-faster-cheaper-affordable.jpg",
        title: "Build Your Skills and Stand Out",
        description:
          "Multi-engine certification increases your flight capabilities and opens new doors for aviation careers. Train fast, train right—with Echo Aviation.",
        button: {
          name: "Apply Now",
          link: "/start-flying",
        },
      },

      faqs: [
        {
          question: "How long does it take to earn the Multi-Engine Rating?",
          answer:
            "Our standard program takes between 5 and 21 days, depending on your availability and training schedule. We also offer an accelerated version.",
        },
        {
          question: "Can I complete this rating as part of a career path?",
          answer:
            "Yes, many commercial and CFI students include the multi-engine rating in their full training roadmap.",
        },
        {
          question: "Is financing available?",
          answer:
            "Yes. Through our partnership with <a href='https://stratus.finance' target='_blank' class='text-primary-600 hover:brightness-110'>Stratus Financial</a>, you can finance the full $12,500 if needed.",
        },
        {
          question: "What aircraft will I fly?",
          answer:
            "You’ll fly a locally sourced multi-engine aircraft, such as a Piper Seminole or similar, depending on what’s available in your area.",
        },
      ],
    },
  },
};

export default multiEngineRating;
