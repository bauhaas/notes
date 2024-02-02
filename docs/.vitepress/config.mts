import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  title: "Bauhaas Notes",
  description: "A VitePress Site",
  appearance: "dark",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "MD Examples", link: "/markdown-examples" },
    ],

    editLink: {
      pattern: "https://github.com/bauhaas/notes/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    sidebar: generateSidebar({
      // https://github.com/jooy2/vitepress-sidebar#options
      documentRootPath: "/docs",
      debugPrint: true,
      collapsed: true,
      collapseDepth: 3,
      capitalizeFirst: true,
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true, //has priority over useTitleFromFileHeading
      useFolderTitleFromIndexFile: true,
      useFolderLinkFromIndexFile: true,
      sortMenusByName: true,
      // rootGroupCollapsed: true,
      // rootGroupText: "",
    }),

    footer: {
      message: "Made with ❤️ by Baudoin Haas",
      copyright: "Copyright © 2024-present Baudoin Haas",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/bauhaas" },
      { icon: "twitter", link: "https://twitter.com/BaudoinHaas" },
    ],

    externalLinkIcon: true,

    search: {
      provider: "local",
    },
  },
});
