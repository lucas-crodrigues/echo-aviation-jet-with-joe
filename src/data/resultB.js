import {
  COMPANY_NAME,
} from "../consts";

const resultB = {
  data: {
    //SEO Header Stuff
    pageTitle: `The Perfectionist Pilot | ${COMPANY_NAME}`,

    header: {
      imagePath:
      "/src/assets/placeholder.webp",
      headerH1: "The Perfectionist Pilot",
      paragraph:
        `You have the precision and discipline required for aviation. Your attention to detail will make you a safe and reliable pilot. The cockpit is calling your name! Join us at ${COMPANY_NAME} and rise up to the challenge!`,
      buttons: [
        {
          name: "Home",
          link: "/",
          primary: true,
        },
        {
          name: "Discovery Flight",
          link: "/discovery-flight",
          primary: true,
        },
      ],
    },
  }
};

export default resultB;