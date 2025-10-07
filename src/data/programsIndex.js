import { COMPANY_NAME } from "../consts";

const programsIndex = {
  pageTitle: `Pilot Training Programs | Flight School Atlanta | ${COMPANY_NAME}`,

  header: {
    stars: true,
    imagePath: "/src/assets/atlanta-airport-Speedway-Flight-Training-80.webp",
    headerH1: `Flight Training <br>PROGRAMS</span>`,
    paragraph: `Echo Aviation offers structured flight programs designed for both aspiring and advancing pilots. Whether you're starting your journey or preparing for a professional aviation career, our expert instructors and well-maintained fleet provide the best environment for success.`,
    buttons: [
      {
        name: "Get Started",
        link: "/start-flying",
        primary: false,
      },
    ],
  },
};

export default programsIndex;
