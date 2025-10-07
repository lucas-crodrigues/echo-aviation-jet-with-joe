import {
  COMPANY_NAME
  PHONE_NUMBER,
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  GMAPS
} from "../consts";

const discoveryForm = {
  data: {
    //SEO Header Stuff
    pageTitle: `Discovery Flight | ${COMPANY_NAME}`,


    header: {
      imagePath:
        "/src/assets/placeholder.webp",
      headerH1: "Discovery Flight",
      paragraph:
        `Sign up for a discovery flight at ${COMPANY_NAME} and experience what it's like to fly one of our aircraft!`,
      buttons: [],
  
    },

    info:{
      address_1: ADDRESS_LINE_1,
      address_2: ADDRESS_LINE_2,
      gmaps: GMAPS,
      phone_num: PHONE_NUMBER,
      checkboxText: `I agree to <a href="/terms-of-service" target="_blank" class="font-semibold hover:underline">terms</a> & <a href="/privacy-policy" target="_blank" class="font-semibold hover:underline">conditions</a> provided by the company. By providing my phone number, I agree to receive text messages from the business.`,
    }
  }
};

export default discoveryForm;
