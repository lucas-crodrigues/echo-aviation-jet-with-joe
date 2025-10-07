import { COMPANY_NAME } from "../consts";

const data404 = {
  data: {
    //SEO Header Stuff
    pageTitle: `404 | ${COMPANY_NAME}`,
    pageDescription: `This page shows a 404 error`,

    header: {
      imagePath:
        "/src/assets/atlanta-airport-Speedway-Flight-Training-147.webp",
      headerH1: `well, this is AWKWARD!`,
      paragraph: `It appears the page you're trying to access has already taken off, if you were trying to get some useful information please inform us so we can better accommodate your needs, otherwise just head on back to landing!`,
      buttons: [
        {
          name: "Home Page",
          link: "/",
          primary: false,
        },
        {
          name: "Contact us",
          link: "/about#contact",
          primary: false,
        },
      ],
    },
  },
};

export default data404;
