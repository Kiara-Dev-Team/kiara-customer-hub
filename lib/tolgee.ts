import { Tolgee, DevTools, FormatSimple } from "@tolgee/react";
import { FormatIcu } from "@tolgee/format-icu";

// Import translation files
import enUS from "../locales/en-US.json";
import jaJP from "../locales/ja-JP.json";

export const tolgee = Tolgee()
  .use(DevTools())
  .use(FormatIcu())
  .use(FormatSimple())
  .init({
    language: "en-US",

    // Available languages
    availableLanguages: ["en-US", "ja-JP"],

    // Static data for development/production
    staticData: {
      "en-US": enUS,
      "ja-JP": jaJP,
    },

    // Development configuration
    apiUrl: process.env.NEXT_PUBLIC_TOLGEE_API_URL,
    apiKey: process.env.NEXT_PUBLIC_TOLGEE_API_KEY,

    // Fallback language
    fallbackLanguage: "en-US",
  });
