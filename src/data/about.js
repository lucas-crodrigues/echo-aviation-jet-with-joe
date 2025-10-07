import { COMPANY_NAME } from "../consts";

const about = {
  data: {
    // SEO Header Stuff
    pageTitle: `About Us | ${COMPANY_NAME}`,
    pageDescription:
      "Learn about Echo Aviation, the premier flight school at Atlanta Speedway Airport offering exceptional training programs, a cohesive team of expert instructors, and a modern fleet. With a 100% checkride pass rate and over 1,000 graduates, we are committed to helping you achieve your aviation goals.",

    // Top Header
    header: {
      imagePath: "/src/assets/placeholder.webp",
      headerH1: `ABOUT US`,
      paragraph:
        "Echo Aviation is dedicated to providing top-tier flight training with a focus on real-world skills, personalized instruction, and a streamlined path to success. With a highly experienced team, well-maintained aircraft, and a strong track record of student achievement, we prepare pilots for confident, capable careers in aviation.",
      buttons: [
        {
          name: "Get in Touch",
          link: "/about#contact",
          primary: false,
        },
        {
          name: "Book a Discovery Flight",
          link: "/discovery-flight",
          primary: false,
        },
      ],
    },
  },
};
export default about;
