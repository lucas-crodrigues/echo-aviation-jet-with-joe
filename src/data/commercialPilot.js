import { COMPANY_NAME } from "../consts";

const commercialPilotCourse = {
  data: {
    slug: "commercial-pilot",
    pageTitle: `Commercial Pilot License (CPL) Training | ${COMPANY_NAME}`,

    header: {
      stars: true,
      imagePath: "/src/assets/stock-commercial-pilot-training-echo-aviation-affordable.jpg",
      headerH1: "Commercial Pilot License (CPL)",
      paragraph: "Turn your passion into a profession. Get paid to fly with our CPL training led by experienced CFIs using locally sourced aircraft.",
      buttons: [
        { name: "Apply Now", link: "/start-flying", primary: false },
        { name: "Discovery Call", link: "/discovery-call", primary: false },
      ],
    },

    pageSummary: {
      title: "Earn Your<br> Commercial License",
      paragraphs: [
        "Echo Aviation’s Commercial Pilot program prepares you to fly for compensation or hire. It’s a major step toward a career in aviation and a requirement for becoming a Certified Flight Instructor.",
        "You’ll log time in both complex and standard aircraft, sharpen your precision flying skills, and train with one-on-one mentorship.",
      ],
    },

    details: {
      upperHeading: "Train Like a Pro",
      heading: "Commercial Pilot License",
      subHeading: "Refine your skills, build your hours, and become a professional aviator with Echo Aviation’s CPL course.",

      title: "Overview",
      description: `
        Echo Aviation’s <strong>Commercial Pilot License</strong> program equips you with the advanced flying skills and experience needed to fly professionally.
        <br/><br/>
        &nbsp;<strong>Hours Included:</strong> 115 flight hours<br/>
        &nbsp;<strong>Estimated Duration:</strong> 1–3 months<br/>
        &nbsp;<strong>Estimated Cost:</strong> $21,500 (or $25,800 with financing)<br/>
        &nbsp;<strong>Aircraft Used:</strong> Cessna 172s, Piper Archers, and complex aircraft (locally sourced)<br/>
        <br/>
        You'll fly solo and dual, cross-country and maneuvers, including training in complex aircraft per FAA requirements.
      `,

      keyPoints: [
        "Train in both standard and complex aircraft",
        "Build hours and prepare for commercial-level checkride",
        "Includes ground prep, mock orals, and written test review",
        "Flexible scheduling with independent instructors",
        "Meets FAA CPL aeronautical experience requirements",
      ],

      included: {
        heading: "What’s Included in Your Training Package?",
        items: [
          "115 hours total time (including dual, solo, cross-country, and night)",
          "Flight instruction with qualified commercial CFIs",
          "Complex aircraft training (as required)",
          "Written exam prep and endorsements",
          "Checkride readiness evaluation",
        ],
      },

      callCTA: {
        heading: "Take the Next Step Toward a Flying Career",
        description: "Book a free Discovery Call and talk to our advisors about the Commercial Pilot training program. Find out if you're ready to start earning while flying.",
        button: { buttonText: "Book Now", link: "/discovery-call" },
      },

      benefits: {
        heading: "Why Get Your CPL with Echo Aviation?",
        items: [
          "Meet hiring requirements for flight schools and charter operators",
          "Qualify to become a Certified Flight Instructor (CFI)",
          "Learn advanced maneuvers and commercial standards",
          "Get real-world training from flexible independent CFIs",
          "Train locally with no relocation needed",
        ],
      },

      cta: {
        imagePath: "/src/assets/stock-commercial-pilot-training-echo-aviation-affordable.jpg",
        title: "Start Getting Paid to Fly",
        description: "Our CPL program sets you up to earn money as a professional pilot. With Echo Aviation, you can make the leap into aviation as a career.",
        button: { name: "Apply Now", link: "/start-flying" },
      },

      faqs: [
        {
          question: "How long does the CPL program take?",
          answer: "Most students finish in 1–3 months depending on how often they train and whether they already meet some flight hour minimums.",
        },
        {
          question: "What type of aircraft will I fly?",
          answer: "You’ll train in both standard trainers like the Cessna 172 and complex aircraft with retractable gear and constant-speed props, per FAA requirements.",
        },
        {
          question: "Is financing available?",
          answer: "Yes. Stratus Financial offers flexible financing options for Echo Aviation students. Total financed cost is approximately $25,800.",
        },
      ],
    },
  },
};

export default commercialPilotCourse;
