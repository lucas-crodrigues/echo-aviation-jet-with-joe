import { COMPANY_NAME } from "../consts";

const cfiiAddOn = {
  data: {
    slug: "cfii-add-on",
    pageTitle: `CFII Add-On Course | ${COMPANY_NAME}`,

    header: {
      stars: true,
      imagePath: "/src/assets/stock-instruments-flight-instructor-certification.jpg",
      headerH1: "CFII Add-On Course",
      paragraph:
        "Become a Certified Flight Instructor Instrument (CFII) and start training the next generation of instrument-rated pilots. This add-on builds on your CFI and prepares you to teach complex IFR procedures with confidence.",
      buttons: [
        {
          name: "Apply Now",
          link: "/start-flying",
          primary: false,
        },
        {
          name: "Schedule a Discovery Call",
          link: "/discovery-call",
          primary: false,
        },
      ],
    },

    pageSummary: {
      title: "Teach<br> Instrument Flying",
      paragraphs: [
        "This CFII add-on course is ideal for CFIs who want to increase their teaching opportunities, improve safety knowledge, and help students earn their Instrument Rating.",
        "Echo Aviation offers flexible scheduling and access to local aircraft, helping you complete your CFII training in as little as one week.",
      ],
    },

    details: {
      upperHeading: "Expand Your Instructor Credentials",
      heading: "Certified Flight Instructor – Instrument (CFII)",
      subHeading:
        "Teach IFR skills, increase your income potential, and become a more versatile instructor.",

      title: "Overview",
      description: `
        Echo Aviation’s <strong>CFII Add-On</strong> prepares CFIs to teach instrument flight skills to private and commercial pilot candidates.
        <br/><br/>
         &nbsp;<strong>Hours Included:</strong> 10 flight hours<br/>
         &nbsp;<strong>Estimated Duration:</strong> 5–21 days<br/>
         &nbsp;<strong>Estimated Cost:</strong> $4,275<br/>
         &nbsp;<strong>Training Type:</strong> Add-on course for existing CFIs<br/>
         &nbsp;<strong>Aircraft Used:</strong> Local IFR-equipped single-engine aircraft<br/>
        <br/>
        You'll focus on <strong>instrument procedures, ground instruction strategies, and FAA checkride prep</strong>—so you're fully ready to train the next wave of instrument pilots.
      `,

      keyPoints: [
        "Add instrument privileges to your CFI certificate",
        "Teach students how to fly under IFR conditions",
        "One-on-one instruction with flexible scheduling",
        "Real-world flight scenarios and emergency training",
        "Fast-track or part-time options available",
        "Affordable and financeable",
      ],

      included: {
        heading: "What’s Included in Your Training Package?",
        items: [
          "10 hours of dual instrument flight instruction",
          "Ground instruction on teaching IFR systems and procedures",
          "Checkride prep with mock oral and flight evaluation",
          "Flight time in IFR-certified aircraft",
          "One-on-one mentoring with experienced CFII instructors",
        ],
      },

      callCTA: {
        heading: "Take the Next Step in Your Instructor Career",
        description:
          "Schedule a free Discovery Call to learn how the CFII add-on can open more job opportunities and prepare you to teach advanced instrument flight skills.",
        button: {
          buttonText: "Discovery Call",
          link: "/discovery-call",
        },
      },

      benefits: {
        heading: "Why Add a CFII Rating?",
        items: [
          "Qualify to teach instrument students",
          "Boost your flight time and income",
          "Gain deeper IFR knowledge",
          "Stand out to employers and schools",
          "Flexible, fast-track training",
          "Works with local aircraft and instructors",
        ],
      },

      cta: {
        imagePath: "/src/assets/stock-certified-flight-instructor-training.jpg",
        title: "Teach More. Earn More. Grow Your Career.",
        description:
          "A CFII rating gives you the authority to train instrument-rated pilots. It’s a smart, affordable way to boost your credentials and expand your professional options.",
        button: {
          name: "Apply Now",
          link: "/start-flying",
        },
      },

      faqs: [
        {
          question: "How long does the CFII add-on take?",
          answer:
            "Most students complete it in 5–21 days depending on their schedule and checkride availability.",
        },
        {
          question: "Can I finance the program?",
          answer:
            "Yes. The course is eligible for financing through <a href='https://stratus.finance' target='_blank' class='text-primary-600 hover:brightness-110'>Stratus Financial</a>.",
        },
        {
          question: "What are the prerequisites?",
          answer:
            "You must already hold a valid CFI certificate and be instrument current. We'll help you confirm everything before training begins.",
        },
        {
          question: "Can I train near me?",
          answer:
            "Yes. Echo Aviation partners with instructors and aircraft owners across the U.S. We’ll coordinate based on your location.",
        },
      ],
    },
  },
};

export default cfiiAddOn;
