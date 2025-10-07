import { COMPANY_NAME } from "../consts";

const privatePilotCourse = {
  data: {
    slug: "private-pilot",
    pageTitle: `Private Pilot License (PPL) Training in Akron | ${COMPANY_NAME}`,

    header: {
      stars: true,
      imagePath:
        "/src/assets/stock-private-pilot-license-training-fast-independent.jpg",
      headerH1: "Private Pilot License (PPL) – Akron",
      paragraph:
        "Your first step to becoming a pilot in Akron. This course provides foundational flight training to earn your FAA Private Pilot License.",
      buttons: [
        { name: "Apply Now", link: "/start-flying", primary: false },
        { name: "Discovery Call", link: "/discovery-call", primary: false },
      ],
    },

    pageSummary: {
      title: "FAA-Certified<br> Private Pilot Course in Akron",
      paragraphs: [
        "Earn your Private Pilot Certificate through Echo Aviation’s flexible, student-paced model right here in Akron. Whether you want to fly for fun or start a career, this is your launchpad.",
        "Our Akron-based CFIs offer one-on-one instruction and training tailored to your pace and schedule. With no school-imposed delays, you get airborne sooner and more affordably.",
      ],
    },

    details: {
      upperHeading: "Your First Step",
      heading: "Private Pilot License – Akron",
      subHeading:
        "Learn to fly in Akron with personalized, FAA-compliant training from experienced local CFIs.",

      title: "Overview",
      description: `
        Echo Aviation’s <strong>Private Pilot License</strong> program in Akron provides the foundation of your aviation education.
        <br/><br/>
        &nbsp;<strong>Hours Included:</strong> 80 flight hours<br/>
        &nbsp;<strong>Estimated Duration:</strong> 1–3 months<br/>
        &nbsp;<strong>Estimated Cost:</strong> $15,000 (or $23,050 with financing)<br/>
        &nbsp;<strong>Aircraft Used:</strong> Cessna 172 or locally available trainer<br/>
        <br/>
        <strong>Looking to save?</strong> If you're able to complete the program at the FAA minimum of <strong>40 hours</strong>, your total cost could be as low as <strong>$9,950</strong>.
      `,

      keyPoints: [
        "One-on-one instruction with Akron-based independent CFIs",
        "Flexible scheduling at local airports",
        "Ground school and written test prep included",
        "Accelerated path available (complete in 1–3 months)",
        "FAA-compliant training with modern aircraft",
        "Optional discounted training if completed in FAA minimum time",
      ],

      included: {
        heading: "What’s Included in Your Training Package?",
        items: [
          "Flight instruction with local independent CFI",
          "Pre-solo, solo, and cross-country training",
          "Ground school preparation for FAA written test",
          "Checkride preparation and mock orals",
          "Flight planning and radio communication training",
        ],
      },

      callCTA: {
        heading: "Ready to Start Your Journey in Akron?",
        description:
          "Book a Discovery Call and talk with a program advisor to find out how to start your training with Echo Aviation in Akron.",
        button: { buttonText: "Book Now", link: "/discovery-call" },
      },

      benefits: {
        heading: "Why Train with Echo Aviation in Akron?",
        items: [
          "Local instructors and aircraft—no relocation",
          "No delays, no group scheduling",
          "Pay-as-you-go or finance your full course",
          "Mentorship from certified instructors",
          "Real-world flying experience",
        ],
      },

      cta: {
        imagePath:
          "/src/assets/stock-private-pilot-license-training-fast-independent.jpg",
        title: "Take the First Step in Akron",
        description:
          "Start your flight training with Echo Aviation and achieve your Private Pilot License on your schedule, right here in Akron.",
        button: { name: "Apply Now", link: "/start-flying" },
      },

      faqs: [
        {
          question: "How fast can I finish my Private Pilot License in Akron?",
          answer:
            "Most students complete the program in 1–3 months, depending on their availability and frequency of flights.",
        },
        {
          question: "What’s the cheapest way to earn my PPL in Akron?",
          answer:
            "If you complete your training in the FAA minimum of 40 hours, your cost could be as low as $9,950.",
        },
        {
          question: "Can I train part-time in Akron?",
          answer:
            "Yes. Echo Aviation allows for full-time or part-time training in Akron based on your availability.",
        },
      ],
    },
  },
};

export default privatePilotCourse;
