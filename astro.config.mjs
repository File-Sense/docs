import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  // site: "",
  // base: "",
  integrations: [
    starlight({
      title: "File Sense Docs",
      social: {
        github: "https://github.com/File-Sense/application",
      },
      sidebar: [
        {
          label: "Getting Started",
          link: "/gettingstarted/",
        },
        {
          label: "Installation",
          items: [
            { label: "Prerequisites", link: "/installation/prerequisites/" },
          ],
        },
        {
          label: "Give use your Feedback!",
          link: "https://google.com",
        },
      ],
    }),
  ],
});
