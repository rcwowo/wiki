import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "wiki.rcw.lol",
    pageTitleSuffix: " - wiki.rcw.lol",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "vercel",
    },
    locale: "en-US",
    baseUrl: "wiki.rcw.lol",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f8f6fb",
          lightgray: "#e8e0ee",
          gray: "#b7a7c3",
          darkgray: "#4d3f5a",
          dark: "#2a2233",
          secondary: "#6b4fa3",
          tertiary: "#d17ca7",
          highlight: "rgba(170, 120, 200, 0.15)",
          textHighlight: "#f1e4ff88",
        },
        darkMode: {
          light: "#1a1523",
          lightgray: "#3a2f4a",
          gray: "#6f6280",
          darkgray: "#d8cfee",
          dark: "#efeafd",
          secondary: "#a884d8",
          tertiary: "#e593b6",
          highlight: "rgba(198, 120, 221, 0.15)",
          textHighlight: "#b06ccf88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
