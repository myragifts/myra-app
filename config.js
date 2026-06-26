/* =========================================================
   MYRA CONFIGURATION
   Version : 1.0.0
   Status  : Production
   ========================================================= */

const MYRA_CONFIG = {

  /* =========================================================
     APP INFORMATION
  ========================================================= */

  APP_NAME: "MYRA",

  TAGLINE: "Where Every Gift Tells A Story",

  VERSION: "1.0.0",

  ENVIRONMENT: "production",

  DEBUG: false,



  /* =========================================================
     BUSINESS INFORMATION
  ========================================================= */

  BUSINESS_NAME: "MYRA",

  BUSINESS_TYPE: "Luxury Gifting",

  CURRENCY: "INR",

  CURRENCY_SYMBOL: "₹",

  COUNTRY: "India",

  LANGUAGE: "en",



  /* =========================================================
     BUSINESS CONTACT
  ========================================================= */

  SELLER_WHATSAPP: "919836697502",

  SUPPORT_EMAIL: "support@myragifts.in",

  ADMIN: {

    EMAIL: "admin@myragifts.in"

  },



  /* =========================================================
     SUPABASE
  ========================================================= */

  SUPABASE_URL:

    "https://ijclbrwofsgrdnlyzkro.supabase.co",

  SUPABASE_PUBLISHABLE_KEY:

    "sb_publishable_FzFZFR7qCsSv89mxruHFDQ_Gdfs1Yqx",



  /* =========================================================
     CLOUDINARY
  ========================================================= */

  CLOUDINARY: {

    ENABLED: true,

    CLOUD_NAME: "YOUR_CLOUDINARY_NAME",

    UPLOAD_PRESET: "YOUR_UPLOAD_PRESET",

    FOLDER: "MYRA"

  },



  /* =========================================================
     SEO DEFAULTS
  ========================================================= */

  SEO: {

    SITE_NAME: "MYRA",

    DEFAULT_TITLE:

      "MYRA - Where Every Gift Tells A Story",

    DEFAULT_DESCRIPTION:

      "Luxury gifting, personalised surprises and exclusive collections.",

    DEFAULT_IMAGE:

      "assets/logo.png"

  },



  /* =========================================================
     APP SETTINGS
  ========================================================= */

  KEEP_LOGIN: true,

  SPLASH_FIRST_VISIT: 2000,

  SPLASH_RETURNING: 1000,

  WELCOME_DURATION: 3000,

  INSTALL_REMINDER_MINUTES: 5,

  TOAST_DURATION: 2500,



  /* =========================================================
     VALIDATION
  ========================================================= */

  PHONE_LENGTH: 10,

  MIN_NAME_WORDS: 2,

  MIN_LETTERS_PER_WORD: 2,



  /* =========================================================
     PAGE LINKS
  ========================================================= */

  LOGIN_PAGE: "index.html",

  HOME_PAGE: "home.html",

  COLLECTION_PAGE: "collection.html",

  FAVOURITES_PAGE: "favourites.html",

  CART_PAGE: "cart.html",

  PROFILE_PAGE: "profile.html",

  ADMIN_PAGE: "admin.html",
