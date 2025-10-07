import {
  COMPANY_NAME
} from "/src/consts.ts";

// Dynamically import all images from the folder
const images = import.meta.glob("/public/gallery/*.{jpeg,jpg,png,gif,webp}", { eager: true });

const galleryData = {
  data: {
    // SEO Header Stuff
    pageTitle: `Gallery | ${COMPANY_NAME}`,

    // Top Header
    header: {
      stars: false,
      imagePath: "/src/assets/placeholder.webp",
      headerH1: `Gallery <br><span>Snapshots of Speedway</span>`,
      paragraph: `Step inside Echo Aviation through our photo gallery. From well-maintained aircraft to moments of achievement and camaraderie, these snapshots capture the essence of our aviation community.`,
      buttons: [
        {
          name: "Enroll Today",
          link: "#contact",
          primary: false,
        },
        {
          name: "Contact Us",
          link: "/about#contact",
          primary: false,
        },
      ],
    },

    // Dynamically populate pictures array
    pictures: Object.keys(images).map((path) => {
      const filename = path.split("/").pop(); // Get file name for alt text
      return {
        imagePath: path,
        imagePathPub: path.replace("/public", ""), // Remove `/public` URL
      };
    }),
  },
};

export default galleryData;
