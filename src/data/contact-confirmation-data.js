import { COMPANY_NAME } from "../consts";

const contactConfirmation = {
  data: {
    //SEO Header Stuff
    pageTitle: `Contact Confirmation | ${COMPANY_NAME}`,

    header: {
      imagePath:
        "/src/assets/atlanta-airport-Speedway-Flight-Training-150.webp",
      headerH1: "THANK YOU",
      paragraph: `Thank for your interest in ${COMPANY_NAME}. This is the first step to achieving your aviation goals!<br>Please allow 1-2 business days for one of our Training Support Specialists to get in touch with you`,
      buttons: [
        {
          name: "Home Page",
          link: "/",
          primary: false,
        },
      ],
    },
  },
};

export default contactConfirmation;
