import { COMPANY_NAME } from "../consts";

const certifiedFlightInstructorCourse = {
  data: {
    slug: "certified-flight-instructor-cfi",
    pageTitle: `Certified Flight Instructor (CFI) Course | ${COMPANY_NAME}`,

    header: {
      stars: true,
      imagePath: "/src/assets/stock-certified-flight-instructor-training.jpg",
      headerH1: "Certified Flight Instructor (CFI)",
      paragraph: "Get certified to teach the next generation of pilots. Echo Aviation’s CFI course prepares you for the FAA practical and oral exams with focused training and one-on-one instruction.",
      buttons: [
        { name: "Apply Now", link: "/start-flying", primary: false },
        { name: "Discovery Call", link: "/discovery-call", primary: false },
      ],
    },

    pageSummary: {
      title: "Become a<br> Certified Instructor",
      paragraphs: [
        "The Certified Flight Instructor (CFI) certificate is the first step toward becoming a professional educator in aviation. Whether you're building hours or pursuing a long-term teaching career, Echo Aviation makes it simple and fast to earn your CFI.",
        "Our training is tailored to your needs. You’ll receive targeted instruction, mock orals, and full checkride prep—delivered by CFIs who’ve successfully guided dozens of students through the process.",
      ],
    },

    details: {
      upperHeading: "Teach and Build Hours With a",
      heading: "Certified Flight Instructor Rating",
      subHeading: "Get your CFI in as little as 10 days with one-on-one instruction and no delays.",

      title: "Overview",
      description: `
        Echo Aviation’s <strong>CFI course</strong> is designed for pilots who already hold a Commercial certificate and want to start teaching.
        <br/><br/>
        &nbsp;<strong>Hours Included:</strong> 10 flight hours<br/>
        &nbsp;<strong>Estimated Duration:</strong> 10–21 days<br/>
        &nbsp;<strong>Estimated Cost:</strong> $7,350<br/>
        &nbsp;<strong>Aircraft Used:</strong> Cessna 172 or equivalent, sourced locally<br/>
        <br/>
        The course includes <strong>lesson plan prep, right-seat training, mock orals, endorsements</strong>, and everything needed to pass your CFI checkride.
      `,

      keyPoints: [
        "Finish in 10–21 days",
        "Includes right-seat flight instruction",
        "Mock orals and checkride prep included",
        "Local aircraft and flexible scheduling",
        "One-on-one instruction from experienced CFIs",
        "Build hours and launch your flight training career",
      ],

      included: {
        heading: "What’s Included in Your Training Package?",
        items: [
          "10 flight hours in Cessna 172 or similar",
          "Ground school tailored for the CFI oral exam",
          "Lesson plan building and review",
          "Mock orals and right-seat flight time",
          "Checkride readiness coaching and endorsements",
        ],
      },

      callCTA: {
        heading: "Ready to Start Teaching?",
        description: "Talk with an advisor to schedule your CFI training. Echo Aviation helps you get certified, start building hours, and begin instructing faster.",
        button: { buttonText: "Discovery Call", link: "/discovery-call" },
      },

      benefits: {
        heading: "Why Train With Echo for Your CFI?",
        items: [
          "Accelerated training timeline (10–21 days)",
          "One-on-one instructor mentorship",
          "Includes full mock oral exam prep",
          "Local training with aircraft near you",
          "Focused on real-world teaching skills",
        ],
      },

      cta: {
        imagePath:
          "/src/assets/stock-certified-flight-instructor-training.jpg",
        title: "Start Your Flight Instructor Career",
        description: "The aviation industry needs more instructors—and becoming a CFI is the fastest way to build hours while giving back to the community. Echo Aviation will help you succeed.",
        button: { name: "Apply Now", link: "/start-flying" },
      },

      faqs: [
        {
          question: "Who is this course for?",
          answer: "This course is for Commercial pilots ready to become Certified Flight Instructors. You’ll gain all the training and prep you need to pass the FAA CFI checkride.",
        },
        {
          question: "How fast can I complete it?",
          answer: "Most students finish in 10–21 days depending on their schedule and aircraft availability.",
        },
        {
          question: "What’s the total cost?",
          answer: "The full course is $7,350. Financing is available on request.",
        },
      ],
    },
  },
};

export default certifiedFlightInstructorCourse;
