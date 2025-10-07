import { COMPANY_NAME } from "../consts";

const commercialPilotCourse = {
  data: {
    slug: "commercial-pilot",
    pageTitle: `Commercial Pilot License (CPL) Training in Akron | ${COMPANY_NAME}`,

    header: {
      stars: true,
      imagePath:
        "/src/assets/stock-commercial-pilot-training-echo-aviation-affordable.jpg",
      headerH1: "Commercial Pilot License (CPL) – Akron",
      paragraph:
        "Turn your passion into a profession in Akron. Get paid to fly with our CPL training led by experienced CFIs using locally sourced aircraft.",
      buttons: [
        { name: "Apply Now", link: "/start-flying", primary: false },
        { name: "Discovery Call", link: "/discovery-call", primary: false },
      ],
    },

    pageSummary: {
      title: "Earn Your<br> Commercial License in Akron",
      paragraphs: [
        "Echo Aviation’s Commercial Pilot program in Akron prepares you to fly for compensation or hire. It’s a major step toward a career in aviation and a requirement for becoming a Certified Flight Instructor.",
        "You’ll log time in both complex and standard aircraft, sharpen your precision flying skills, and train with one-on-one mentorship from Akron-based instructors.",
      ],
    },

    details: {
      upperHeading: "Train Like a Pro",
      heading: "Commercial Pilot License – Akron",
      subHeading:
        "Refine your skills, build your hours, and become a professional aviator with Echo Aviation’s CPL course in Akron.",

      title: "Overview",
      description: `
        Echo Aviation’s <strong>Commercial Pilot License</strong> program in Akron equips you with the advanced flying skills and experience needed to fly professionally.
        <br/><br/>
        &nbsp;<strong>Hours Included:</strong> 115 flight hours<br/>
        &nbsp;<strong>Estimated Duration:</strong> 1–3 months<br/>
        &nbsp;<strong>Estimated Cost:</strong> $21,500 (or $25,800 with financing)<br/>
        &nbsp;<strong>Aircraft Used:</strong> Cessna 172s, Piper Archers, and complex aircraft (locally sourced)<br/>
        <br/>
        You'll fly solo and dual, cross-country and maneuvers, including training in complex aircraft per FAA requirements.
      `,

      keyPoints: [
        "Train in both standard and complex aircraft at Akron airports",
        "Build hours and prepare for your commercial-level checkride",
        "Includes ground prep, mock orals, and written test review",
        "Flexible scheduling with independent Akron-based instructors",
        "Meets FAA CPL aeronautical experience requirements",
      ],

      included: {
        heading: "What’s Included in Your Training Package?",
        items: [
          "115 hours total time (including dual, solo, cross-country, and night)",
          "Flight instruction with qualified Akron-based commercial CFIs",
          "Complex aircraft training (as required)",
          "Written exam prep and endorsements",
          "Checkride readiness evaluation",
        ],
      },

      callCTA: {
        heading: "Take the Next Step Toward a Flying Career in Akron",
        description:
          "Book a free Discovery Call and talk to our advisors about the Commercial Pilot training program in Akron. Find out if you're ready to start earning while flying.",
        button: { buttonText: "Book Now", link: "/discovery-call" },
      },

      benefits: {
        heading: "Why Get Your CPL in Akron with Echo Aviation?",
        items: [
          "Meet hiring requirements for flight schools and charter operators",
          "Qualify to become a Certified Flight Instructor (CFI)",
          "Learn advanced maneuvers and commercial standards",
          "Get real-world training from flexible, independent CFIs in Akron",
          "Train locally with no relocation needed",
        ],
      },

      cta: {
        imagePath:
          "/src/assets/stock-commercial-pilot-training-echo-aviation-affordable.jpg",
        title: "Start Getting Paid to Fly in Akron",
        description:
          "Our CPL program in Akron sets you up to earn money as a professional pilot. With Echo Aviation, you can make the leap into aviation as a career.",
        button: { name: "Apply Now", link: "/start-flying" },
      },

      faqs: [
        {
          question: "How long does the CPL program take in Akron?",
          answer:
            "Most students in Akron finish in 1–3 months depending on how often they train and whether they already meet some flight hour minimums.",
        },
        {
          question: "What type of aircraft will I fly in Akron?",
          answer:
            "You’ll train in both standard trainers like the Cessna 172 and complex aircraft with retractable gear and constant-speed props, per FAA requirements.",
        },
        {
          question: "Is financing available?",
          answer:
            "Yes. Stratus Financial offers flexible financing options for Echo Aviation students. Total financed cost is approximately $25,800.",
        },
      ],
    },
  },
};

export default commercialPilotCourse;
