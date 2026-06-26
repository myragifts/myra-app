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
  /* =========================================================
     SHIPPING
  ========================================================= */

  SHIPPING: {

    FREE_SHIPPING_THRESHOLD: 499,

    SHIPPING_CHARGE: 40,

    DELIVERY_DAYS_MIN: 3,

    DELIVERY_DAYS_MAX: 7,

    FREE_SHIPPING_MESSAGE:

      "Congratulations! You get Free Shipping",

    ADD_MORE_MESSAGE:

      "Add more items above ₹499 to get Free Shipping"

  },



  /* =========================================================
     PAYMENT
  ========================================================= */

  PAYMENT: {

    ACTIVE_METHOD: "WHATSAPP_UPI",

    AVAILABLE_METHODS: {

      WHATSAPP_UPI: true,

      RAZORPAY: true

    },

    WHATSAPP_ORDER: {

      ENABLED: true,

      NUMBER: "919836697502"

    },

    UPI: {

      ENABLED: true,

      PAYMENT_LINK:

        "https://tinyurl.com/myra-pay-secure"

    },

    RAZORPAY: {

      ENABLED: false,

      KEY_ID: "",

      COMPANY_NAME: "MYRA"

    }

  },



  /* =========================================================
     REFERRAL PROGRAM
  ========================================================= */

  REFERRAL: {

    ENABLED: true,

    REWARD_AMOUNT: 25,

    MINIMUM_ORDER: 499,

    REWARD_AFTER: "DELIVERED"

  },



  /* =========================================================
     PRODUCT RULES
  ========================================================= */

  PRODUCT: {

    ID_PREFIX: "MY",

    ID_FORMAT: "MY00001",

    AUTO_GENERATE_ID: true,

    NEVER_REUSE_ID: true,

    IMAGE_LIMIT: 6,

    NAME_WORD_LIMIT: 8

  },



  /* =========================================================
     IMAGE RULES
  ========================================================= */

  IMAGE: {

    MAX_IMAGES_PER_PRODUCT: 6,

    ALLOWED_FORMATS: [

      "jpg",

      "jpeg",

      "png",

      "webp"

    ],

    MAX_FILE_SIZE_MB: 5

  },



  /* =========================================================
     SEARCH
  ========================================================= */

  SEARCH: {

    MIN_CHARACTERS: 2,

    MAX_RESULTS: 20

  },



  /* =========================================================
     PAGINATION
  ========================================================= */

  PAGINATION: {

    PRODUCTS_PER_PAGE: 12

  },



  /* =========================================================
     PRODUCT CATEGORIES
  ========================================================= */

  CATEGORIES: [

    {

      name: "Aroma Candles",

      subcategories: [

        "Jar Candles",

        "Tin Candles",

        "Soy Wax Candles",

        "Scented Candles",

        "Gift Candles",

        "Luxury Candles"

      ]

    },

    {

      name: "Handmade Jewellery",

      subcategories: [

        "Earrings",

        "Necklaces",

        "Bracelets",

        "Rings",

        "Jewellery Sets",

        "Gift Jewellery"

      ]

    },

    {

      name: "Real Paintings",

      subcategories: [

        "Abstract Art",

        "Landscape Paintings",

        "Modern Art",

        "Floral Paintings",

        "Portrait Paintings",

        "Mini Paintings"

      ]

    },

    {

      name: "Trending Gifts",

      subcategories: [

        "Birthday Gifts",

        "Anniversary Gifts",

        "Wedding Gifts",

        "Couple Gifts",

        "Home Decor Gifts",

        "Corporate Gifts"

      ]

    }

  ],
  /* =========================================================
     COUPON SYSTEM
  ========================================================= */

  COUPONS: {

    ENABLED: true,

    WELCOME: {

      CODE: "WELCOME",

      TYPE: "PERCENT",

      VALUE: 10,

      MIN_ORDER: 499

    }

  },



  /* =========================================================
     ORDER STATUS
  ========================================================= */

  ORDER_STATUS: [

    "Payment Pending",

    "Order Placed",

    "Confirmed",

    "Packed",

    "Shipped",

    "Out For Delivery",

    "Delivered",

    "Cancelled"

  ],



  /* =========================================================
     PAYMENT STATUS
  ========================================================= */

  PAYMENT_STATUS: {

    WHATSAPP_UPI: [

      "Payment Pending",

      "Payment Received"

    ],

    RAZORPAY: [

      "Payment Successful",

      "Payment Failed",

      "Refunded"

    ]

  },



  /* =========================================================
     CUSTOMER LABELS
  ========================================================= */

  CUSTOMER_LABELS: [

    "New Customer",

    "Returning Customer",

    "VIP Customer",

    "High Buyer",

    "Referral Customer"

  ],



  /* =========================================================
     STORAGE KEYS
  ========================================================= */

  STORAGE_KEYS: {

    USER_ID: "myra_user_id",

    USER_NAME: "myra_user_name",

    USER_PHONE: "myra_user_phone",

    USER_DATA: "myra_user_data",

    DEVICE_ID: "myra_device_id",

    CART: "myra_cart",

    FAVOURITES: "myra_favourites",

    CART_COUNT: "myra_cart_count",

    REFERRAL_CODE: "myra_referral_code",

    REFERRED_BY: "myra_referred_by",

    REWARD_BALANCE: "myra_reward_balance",

    REWARD_HISTORY: "myra_reward_history",

    USER_LOGIN: "myra_logged_in",

    WELCOME_SHOWN: "myra_welcome_shown",

    APP_INSTALLED: "myra_app_installed",

    INSTALL_LATER: "myra_install_later"

  },



  /* =========================================================
     NOTIFICATIONS
  ========================================================= */

  NOTIFICATIONS: {

    ENABLED: true,

    ORDER: true,

    REWARD: true,

    REFERRAL: true,

    PROMOTIONAL: false

  },



  /* =========================================================
     MESSAGES
  ========================================================= */

  MESSAGES: {

    LOGIN_REQUIRED:

      "Please sign in first",

    NAME_REQUIRED:

      "Please enter your name",

    PHONE_REQUIRED:

      "Please enter your phone number",

    INVALID_PHONE:

      "Please enter a valid phone number",

    LOGIN_SUCCESS:

      "Welcome to MYRA",

    LOGOUT_SUCCESS:

      "Logged out successfully",

    CART_ADDED:

      "Added to cart",

    PROFILE_UPDATED:

      "Profile updated successfully",

    ORDER_SUCCESS:

      "Order placed successfully",

    REFERRAL_APPLIED:

      "Referral code applied successfully",

    REFERRAL_PENDING:

      "Reward will be credited after delivery",

    REFERRAL_SUCCESS:

      "Referral reward credited successfully",

    REWARD_APPLIED:

      "MYRA Rewards applied successfully",

    REWARD_LIMIT_REACHED:

      "Maximum reward balance reached"

  }

};



/* =========================================================
   GLOBAL ACCESS
========================================================= */

window.CONFIG = MYRA_CONFIG;
