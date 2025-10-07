import { COMPANY_NAME } from "../consts";

const multiEngineInstructorData = {
  pageTitle: `Multi-Engine Instructor | ${COMPANY_NAME}`,

  header: {
    stars: true,
    imagePath: "/src/assets/stock-multi-engine-rating-fast-affordable.jpg",
    headerH1: `Multi-Engine <br>Instructor</span>`,
    paragraph: `Advance your career as a professional flight instructor. Speedway’s MEI program prepares you to teach in multi-engine aircraft with confidence and precision.`,
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

  details: {
    upperHeading: "Earn Your",
    heading: "Multi-Engine Instructor Rating",
    subHeading:
      "Take your instructor credentials to the next level. This accelerated course sharpens your instructional skills and qualifies you to teach multi-engine students safely and effectively.",

    title: "Overview",
    description: `
      Echo Aviation’s <strong>Multi-Engine Instructor (MEI) program</strong> is ideal for Certified Flight Instructors ready to expand their capabilities.
      <br/><br/>
      🚀 <strong>Accelerated Program:</strong> Complete in <strong>2–5 weeks</strong>.<br/>
      💰 <strong>Estimated Cost:</strong> <strong>$9,000</strong> (based on <strong>15 flight hours</strong>; additional expenses apply).<br/>
      ✈️ <strong>Training Location:</strong> Echo Aviation at <strong>Atlanta Speedway Airport (KHMP)</strong>.<br/>
      🛩 <strong>Aircraft Used:</strong> Modern, well-maintained <strong>multi-engine aircraft</strong>.<br/>
      📜 <strong>FAA Requirements:</strong> Minimum <strong>15 flight hours</strong> of MEI training.<br/>
      <br/>
      This program includes <strong>one-on-one instruction</strong>, <strong>scenario-based teaching methods</strong>, and <strong>checkride preparation</strong> to help you confidently guide the next generation of pilots.
    `,

    keyPoints: [
      "Accelerated Timeline: Finish in 2–5 weeks",
      "15 Hours of Multi-Engine Instructor Training",
      "Ground School + Exam Prep Included",
      "One-on-One Mentorship from MEI Professionals",
      "Checkride Ready with FAA-Style Evaluations",
      "Emphasis on Instructional Safety and Teaching Methodologies",
    ],

    included: {
      heading: "What’s Included in Your Training Package?",
      items: [
        "Up to 15 flight hours of multi-engine instructor training",
        "One-on-one instruction with experienced MEI mentors",
        "Scenario-based multi-engine instruction and emergency procedures",
        "Ground school & exam preparation",
        "Pre-checkride evaluation and practice",
      ],
    },

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

    benefits: {
      heading: "Why Train with Speedway?",
      items: [
        "Hands-On Multi-Engine Experience with Expert Instructors",
        "Accelerated Timeline: Complete Your MEI in Just Weeks",
        "Scenario-Based Teaching Techniques to Build Real-World Skills",
        "Modern, Well-Maintained Training Aircraft",
        "Focused Checkride Prep for FAA Practical Standards",
        "Professional Environment Geared Toward Career Growth",
      ],
    },

    cta: {
      imagePath: "/src/assets/stock-chris-michals-PQXjU65EPKE-unsplash.webp",
      title: "Expand Your Instruction Capabilities",
      description:
        "Gain the skills and confidence to teach multi-engine students with authority and safety. Enroll today and take the next step in your flight instructor career.",
      button: {
        name: "Apply Now",
        link: "/start-flying",
      },
    },

    faqs: [
      {
        question: "Do I need a CFI rating before pursuing the MEI?",
        answer:
          "Yes. You must hold a valid Certified Flight Instructor (CFI) certificate before training for the Multi-Engine Instructor (MEI) rating.",
      },
      {
        question: "How long does the MEI program take?",
        answer:
          "Our accelerated program allows most students to complete their MEI in <strong>2–5 weeks</strong>, depending on availability and scheduling.",
      },
      {
        question: "Can I log time as PIC during MEI training?",
        answer:
          "Yes, when acting as the sole manipulator of the controls under MEI instruction in accordance with FAA regulations.",
      },
      {
        question: "Is multi-engine instruction in demand?",
        answer:
          "Absolutely! Many flight schools and collegiate programs require MEIs for their multi-engine training programs. It's a valuable credential for instructors seeking to expand opportunities.",
      },
      {
        question: "Can I finance the MEI training program?",
        answer:
          "Yes. We partner with <a href='https://stratus.finance' target='_blank' class='hover:brightness-125 text-primary-600'>Stratus Financial</a> and other providers to help you finance your training.",
      },
    ],
  },
};

export default multiEngineInstructorData;
