// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
  site: "https://almostafootnote.pages.dev",
  base: "/",
  integrations: [mdx(), sitemap(), pagefind(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Lora",
        cssVariable: "--font-serif",
      },
      {
        provider: fontProviders.fontsource(),
        name: "Source Serif 4",
        cssVariable: "--font-body",
      },
      {
        provider: fontProviders.fontsource(),
        name: "Space Mono",
        cssVariable: "--font-mono",
      },
    ],
  },
});
