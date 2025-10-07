import {
  COMPANY_NAME,
} from "../consts";

const resultD = {
  data: {
    //SEO Header Stuff
    pageTitle: `The Passionate Learner | ${COMPANY_NAME}`,


    header: {
      imagePath:
      "/src/assets/placeholder.webp",
      headerH1: "The Passionate Learner",
      paragraph:
        `Your curiosity and determination to learn make you a great candidate for flight training. Let’s channel that passion into becoming a skilled aviator! Schedule a discovery flight with us, check out what's all the fuss about flying with ${COMPANY_NAME}!`,
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

export default resultD;