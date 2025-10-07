import { COMPANY_NAME } from "../consts";

const certifiedFlightInstructorCourse = {
  data: {
    slug: "certified-flight-instructor-cfi",
    pageTitle: `Certified Flight Instructor (CFI) Course in Akron | ${COMPANY_NAME}`,

    header: {
      stars: true,
      imagePath: "/src/assets/stock-certified-flight-instructor-training.jpg",
      headerH1: "Certified Flight Instructor (CFI) – Akron",
      paragraph:
        "Get certified to teach the next generation of pilots. Echo Aviation’s Akron-based CFI course prepares you for FAA practical and oral exams with focused training and one-on-one instruction.",
      buttons: [
        { name: "Apply Now", link: "/start-flying", primary: false },
        { name: "Discovery Call", link: "/discovery-call", primary: false },
      ],
    },

    pageSummary: {
      title: "Become a<br> Certified Instructor in Akron",
      paragraphs: [
        "The Certified Flight Instructor (CFI) certificate is your first step toward becoming a professional aviation educator. Echo Aviation in Akron makes it simple and fast to earn your CFI.",
        "Receive targeted instruction, mock orals, and full checkride prep—delivered by experienced CFIs who have guided dozens of students through the process.",
      ],
    },

    details: {
      upperHeading: "Teach and Build Hours With a",
      heading: "Certified Flight Instructor Rating",
      subHeading:
        "Get your CFI in as little as 10 days with one-on-one instruction and no delays, right here in Akron.",

      title: "Overview",
      description: `
        Echo Aviation’s <strong>CFI course</strong> is designed for Commercial pilots ready to start teaching.
        <br/><br/>
        &nbsp;<strong>Hours Included:</strong> 10 flight hours<br/>
        &nbsp;<strong>Estimated Duration:</strong> 10–21 days<br/>
        &nbsp;<strong>Estimated Cost:</strong> $7,350<br/>
        &nbsp;<strong>Aircraft Used:</strong> Cessna 172 or equivalent, sourced locally in Akron<br/>
        <br/>
        Includes <strong>lesson plan prep, right-seat training, mock orals, endorsements</strong>, and everything needed to pass your FAA CFI checkride.
      `,

      keyPoints: [
        "Finish in 10–21 days in Akron",
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
        heading: "Ready to Start Teaching in Akron?",
        description:
          "Talk with an advisor to schedule your CFI training. Echo Aviation helps you get certified, start building hours, and begin instructing faster in Akron.",
        button: { buttonText: "Discovery Call", link: "/discovery-call" },
      },

      benefits: {
        heading: "Why Train With Echo Aviation in Akron?",
        items: [
          "Accelerated training timeline (10–21 days)",
          "One-on-one instructor mentorship",
          "Includes full mock oral exam prep",
          "Local training with aircraft near you in Akron",
          "Focused on real-world teaching skills",
        ],
      },

      cta: {
        imagePath: "/src/assets/stock-certified-flight-instructor-training.jpg",
        title: "Start Your Flight Instructor Career",
        description:
          "The aviation industry needs more instructors—and becoming a CFI is the fastest way to build hours while giving back to the Akron aviation community. Echo Aviation will help you succeed.",
        button: { name: "Apply Now", link: "/start-flying" },
      },

      faqs: [
        {
          question: "Who is this course for?",
          answer:
            "This course is for Commercial pilots ready to become Certified Flight Instructors. You’ll gain all the training and prep you need to pass the FAA CFI checkride in Akron.",
        },
        {
          question: "How fast can I complete it?",
          answer:
            "Most students finish in 10–21 days depending on their schedule and aircraft availability in Akron.",
        },
        {
          question: "What’s the total cost?",
          answer:
            "The full course is $7,350. Financing is available on request.",
        },
      ],
    },
  },
};

export default certifiedFlightInstructorCourse;
