/*
  MYRA APP CONFIG
  File: /config/app.config.js
  Purpose: Core application identity and global app-level constants.
  Rule: No business logic. No UI logic. No Supabase query logic.
*/

const APP_CONFIG = Object.freeze({
  NAME: "MYRA",
  TAGLINE: "A Shopping Love Story",
  VERSION: "1.0.0",
  ENVIRONMENT: "production",

  WEBSITE_URL: "https://myragifts.github.io/myra-app/",

  LANGUAGE: {
    DEFAULT: "en",
    SUPPORTED: ["en"]
  },

  DEVICE_SUPPORT: {
    DESKTOP: true,
    LAPTOP: true,
    TABLET: true,
    MOBILE: true,
    PWA: true,
    FUTURE_TWA: true
  },

  PAGE_ENTRY: {
    LOGIN: "index.html",
    HOME: "home.html"
  },

  SESSION_RULE: {
    LOGIN_ONCE: true,
    STAY_LOGGED_IN_UNTIL_LOGOUT: true,
    REDIRECT_LOGGED_IN_USER_TO_HOME: true
  },

  BRAND_PHILOSOPHY: {
    PEACE: "When you visit MYRA, you feel peace.",
    RELAX: "MYRA is a relaxing feeling in a busy day.",
    CALM: "When you are in MYRA, you will be calm."
  },

  COPYRIGHT: {
    YEAR: 2026,
    TEXT: "© 2026 MYRA. All rights reserved."
  }
});

window.APP_CONFIG = APP_CONFIG;
