import {
  COMPANY_NAME,
  PHONE_NUMBER,
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  GMAPS,
} from "../consts";

const contactPage = {
  data: {
    //SEO Header Stuff
    pageTitle: `Contact us | ${COMPANY_NAME}`,

    header: {
      stars: true,
      imagePath: "/src/assets/placeholder.webp",
      headerH1: `Contact</br>${COMPANY_NAME}`,
      paragraph: `Whether you’re ready to start your flight training, schedule maintenance for your aircraft, or simply have questions about our programs, the team at ${COMPANY_NAME} is here to assist you.`,
      buttons: [
        {
          name: "Enroll Form",
          link: "/start-flying",
          primary: false,
        },
        {
          name: "Discovery Flight",
          link: "/discovery-flight",
          primary: false,
        },
      ],
    },

    info: {
      form_url: import.meta.env.CONTACT_WEBHOOK_URL,
      redirect_url: "/contact-confirmation",
      form_h: "Connect with Us",
      form_p1:
        "For questions about flight training, scheduling a discovery flight, or booking maintenance services, our team is here to assist. At Echo Aviation, we’re dedicated to providing personalized guidance and support throughout your aviation journey.",
      form_p2:
        "Located at Atlanta Speedway Airport, we’re proud to serve aspiring pilots and aviation enthusiasts from across the region. Fill out the contact form, and one of our team members will get in touch soon to answer your questions or help with your booking.",
      address_1: ADDRESS_LINE_1,
      address_2: ADDRESS_LINE_2,
      gmaps: GMAPS,
      phone_num: PHONE_NUMBER,
      // label: "Which maintenance service are you interested in?",
      // options: [
      //   "Oil Change",
      //   "Annual Inspection",
      //   "100 Hour",
      //   "Altimeter",
      //   "Transponder",
      //   "Major Alteration or Repair (Form 337)",
      //   "Airworthiness Directives",
      //   "A/D Compliance",
      //   "Tire Replacement",
      //   "General Inspections",
      //   "Pre-buy Inspections",
      //   "Other (Please specify in Notes)",
      // ],
      // extra_info: [
      //   {
      //     label: "Aircraft Manufacturer",
      //     id: "aircraft-manufacturer",
      //   },
      //   {
      //     label: "Aircraft Type",
      //     id: "aircraft-type",
      //   },
      // ],
      textArea:
        "Say hello! Our team will be happy to answer any questions you might have about our programs",
      checkboxText: `I agree to <a href="/terms-of-service" target="_blank" class="font-semibold hover:underline">terms</a> & <a href="/privacy-policy" target="_blank" class="font-semibold hover:underline">conditions</a> provided by the company. By providing my phone number, I agree to receive text messages from the business.`,
    },
  },
};
export default contactPage;
