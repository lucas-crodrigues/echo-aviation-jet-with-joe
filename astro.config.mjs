import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://echoaviation.training",
  integrations: [
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    sitemap({
      customPages: [
        "https://echoaviation.training/discovery-call",
        "https://echoaviation.training/fast-track",
        "https://echoaviation.training/financing",
      ],
      serialize(item) {
        // Set higher priority for important pages
        if (item.url.includes("/training-programs/")) {
          item.priority = 0.9;
          item.changefreq = "weekly";
        } else if (item.url.includes("/locations/")) {
          item.priority = 0.8;
          item.changefreq = "monthly";
        } else if (
          item.url === "https://echoaviation.training/" ||
          item.url.includes("/discovery-call") ||
          item.url.includes("/fast-track")
        ) {
          item.priority = 1.0;
          item.changefreq = "weekly";
        } else {
          item.priority = 0.7;
          item.changefreq = "monthly";
        }
        return item;
      },
    }),
    react(),
  ],
});
