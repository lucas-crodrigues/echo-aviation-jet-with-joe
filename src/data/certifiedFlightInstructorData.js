import { COMPANY_NAME } from "../consts";

const certifiedFlightInstructorData = {
  pageTitle: `Become a Certified Flight Instructor (CFI) | Build Flight Hours | ${COMPANY_NAME}`,

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/cessna-172-in-flight-over-hampton-ga-croped.webp",
    headerH1: `Certified Flight <br>INSTRUCTOR (CFI)</span>`,
    paragraph: `Turn your passion for aviation into a rewarding career. Our Certified Flight Instructor program equips you with the skills, techniques, and knowledge to train the next generation of pilots.`,
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

  // Program Details
  details: {
    upperHeading: "Train to Become a",
    heading: "Certified Flight Instructor",
    subHeading:
      "Advance your aviation career by becoming a flight instructor. Gain valuable teaching skills, master advanced maneuvers, and help new pilots achieve their dreams.",

    title: "Overview",
    description: `
      Echo Aviation’s <strong>Certified Flight Instructor (CFI) program</strong> is designed for pilots looking to <strong>transition into aviation instruction</strong>. This structured program refines your flying skills, enhances your instructional techniques, and prepares you to train new pilots.
      <br/><br/>
      🚀 <strong>Accelerated Program:</strong> Earn your CFI in <strong>4-6 weeks</strong>.<br/>
      📆 <strong>Flexible Training:</strong> Train at your own pace.<br/>
      ✈️ <strong>Training Location:</strong> Echo Aviation at <strong>Atlanta Speedway Airport (KHMP)</strong>.<br/>
      💰 <strong>Estimated Cost:</strong> <strong>$4,875</strong> (based on <strong>15 flight training hours</strong>; additional expenses apply).<br/>
      🛩 <strong>Aircraft Used:</strong> Modern, well-maintained <strong>Cessna 172 fleet</strong>.<br/>
      📜 <strong>FAA Requirements:</strong> Minimum <strong>15 hours of flight training</strong> and successful completion of the <strong>Fundamentals of Instruction (FOI) and Certified Flight Instructor (CFI) exams</strong>.<br/>
      <br/>
      This program includes <strong>advanced instructional training, one-on-one mentorship, and full checkride preparation</strong> to ensure you're ready to launch your career as a flight instructor.
    `,

    keyPoints: [
      "Master Advanced Maneuvers & Instructional Techniques",
      "Scenario-Based Teaching for Real-World Training",
      "Comprehensive Ground School & FAA Exam Preparation",
      "One-on-One Mentorship with Experienced CFIs",
      "Refine Leadership & Communication Skills",
      "Emphasis on Safety, Student Development & Instructional Quality",
    ],

    // What's Included
    included: {
      heading: "What’s Included in Your Training Package?",
      items: [
        "15 flight hours of training (FAA minimum: 10 hours)",
        "Gleim Flight/Ground Instructor + FOI Kit",
        "Advanced maneuvers and instructional proficiency training",
        "One-on-one instructor mentorship",
        "Ground school & exam preparation (covers instructional techniques, FAA regulations, and teaching methodologies)",
        "Scenario-based teaching techniques",
        "Pre-checkride preparation and evaluation",
        "Emphasis on safety, instructional quality, and leadership in aviation training",
      ],
    },

    // Additional Costs
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

    // Benefits
    benefits: {
      heading: "Why Train with Speedway?",
      items: [
        "Accelerated Training: Earn your CFI in just 4-6 weeks",
        "Expert Instructors: One-on-one mentorship from experienced CFIs",
        "Comprehensive Training: Ground school, teaching techniques, and advanced flight maneuvers",
        "State-of-the-Art Training Fleet: Learn on modern, well-maintained aircraft",
        "Career Readiness: Gain the experience needed to instruct students and advance in aviation",
        "Commitment to Safety & Leadership: Learn instructional quality, student development, and leadership principles",
      ],
    },

    cta: {
      imagePath:
        "/src/assets/speedway-flight-training-aircraft-maintenance-check.webp",
      title: "Start Your Career as a Flight Instructor",
      description:
        "Train the next generation of pilots with expert CFI training at Echo Aviation. Enroll in our Certified Flight Instructor program today and launch your aviation career.",
      button: {
        name: "Apply Now",
        link: "/start-flying",
      },
    },

    // FAQs
    faqs: [
      {
        question:
          "How long does it take to earn my Certified Flight Instructor (CFI) certificate?",
        answer:
          "With our accelerated program, students can complete training in <strong>4-6 weeks</strong>. A self-paced program is also available for those needing more scheduling flexibility.",
      },
      {
        question: "Can I finance my training?",
        answer:
          "Yes! We partner with <a href='https://stratus.finance' target='_blank' class='hover:brightness-125 text-primary-600'>Stratus Financial</a> to offer financing options. Contact us to learn more about making your flight training affordable.",
      },
      {
        question: "What kind of aircraft will I train on?",
        answer:
          "Students train on <strong>modern, well-maintained Cessna 172 aircraft</strong>, suitable for instructional flight training.",
      },
      {
        question: "Will I be ready for my checkride after training?",
        answer:
          "Yes! Our program includes <strong>comprehensive checkride preparation</strong> and <strong>scenario-based instructional training</strong> to ensure you're fully prepared.",
      },
      {
        question: "What happens after I become a Certified Flight Instructor?",
        answer:
          "Many students begin their career as a flight instructor to build flight hours and gain experience before advancing to commercial aviation or airline careers.",
      },
    ],
  },
};

export default certifiedFlightInstructorData;
