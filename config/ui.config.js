/*
=========================================================
MYRA UI CONFIG
File : /config/ui.config.js
Purpose :
Global UI text, theme philosophy, modal rules,
toast rules, empty states, install modal, splash screen,
offline/session messages and animation rules.

No CSS
No UI Functions
No API Calls
=========================================================
*/

const UI_CONFIG = Object.freeze({

    /* =====================================================
       THEME PHILOSOPHY
    ===================================================== */

    PHILOSOPHY: {

        FEELING: "Peaceful, relaxing, calm and premium",

        CUSTOMER_EMOTION:
            "When a customer visits MYRA, they should feel relaxed in a busy day.",

        STYLE:
            "Soft, elegant, eye-friendly and customer friendly",

        AVOID:
            "Harsh colors, loud animations, aggressive alerts and crowded layouts"

    },



    /* =====================================================
       BRAND TEXT
    ===================================================== */

    BRAND: {

        NAME: "MYRA",

        TAGLINE: "A Shopping Love Story",

        WELCOME_TAGLINE: "A Shopping Love Story"

    },



    /* =====================================================
       COLOR TONE
    ===================================================== */

    COLOR_TONE: {

        BASE: "Soft beige",

        PRIMARY: "Warm brown",

        ACCENT: "Muted gold",

        SUCCESS: "Soft sage green",

        WARNING: "Warm terracotta",

        ERROR: "Muted rose",

        TEXT: "Deep warm brown",

        BACKGROUND_FEEL: "Calm neutral luxury"

    },



    /* =====================================================
       GLOBAL UI RULES
    ===================================================== */

    GLOBAL_RULES: {

        USE_BROWSER_ALERT: false,

        USE_BROWSER_CONFIRM: false,

        USE_BROWSER_NOTIFICATION: false,

        USE_BROWSER_TOAST: false,

        USE_CUSTOM_MYRA_MODAL: true,

        USE_CUSTOM_MYRA_TOAST: true,

        NO_HARSH_RED: true,

        NO_FLASHING: true,

        NO_BLINKING: true,

        NO_BOUNCING: true,

        USE_SOFT_FADE_ANIMATION: true

    },



    /* =====================================================
       SPLASH SCREEN
    ===================================================== */

    SPLASH: {

        ENABLED: true,

        TITLE: "MYRA",

        SUBTITLE: "A Shopping Love Story",

        MIN_DURATION_MS: 1000,

        MAX_DURATION_MS: 2000,

        FADE_IN: true,

        FADE_OUT: true

    },



    /* =====================================================
       MODAL RULES
    ===================================================== */

    MODAL: {

        USE_OVERLAY: true,

        CLOSE_ON_BACKDROP: false,

        CLOSE_ON_ESCAPE: true,

        ANIMATION: "soft_fade_up",

        BORDER_RADIUS: "large",

        FORM_MODAL_HAS_BACK_BUTTON: true,

        PRIMARY_SECONDARY_BUTTON_PATTERN: true

    },



    /* =====================================================
       TOAST RULES
    ===================================================== */

    TOAST: {

        ENABLED: true,

        POSITION: "above_bottom_navigation",

        AUTO_HIDE_MS: 3000,

        STYLE: "soft_luxury",

        USE_GOLD_ACCENT: true,

        USE_BROWSER_TOAST: false

    },



    /* =====================================================
       LOGIN PAGE TEXT
    ===================================================== */

    LOGIN_PAGE: {

        TITLE: "MYRA",

        TAGLINE: "A Shopping Love Story",

        FULL_NAME_LABEL: "Your Full Name",

        PHONE_LABEL: "Phone Number",

        SIGN_IN_BUTTON: "Sign In",

        CREATE_ACCOUNT_LINK: "New User ? Create Your Account",

        FORGOT_NAME_LINK: "Forgot Name",

        FORGOT_PHONE_LINK: "Forgot Phone"

    },



    /* =====================================================
       SIGNUP MODAL
    ===================================================== */

    SIGNUP_MODAL: {

        TITLE: "Create Your MYRA Account",

        FULL_NAME_LABEL: "Your Full Name",

        PHONE_LABEL: "Phone Number",

        REFERRAL_LABEL: "Referral Code",

        REFERRAL_PLACEHOLDER: "Referral Code Optional",

        CREATE_BUTTON: "Create Account",

        BACK_BUTTON: "Back"

    },



    /* =====================================================
       RECOVERY MODALS
    ===================================================== */

    RECOVERY_MODAL: {

        FORGOT_NAME: {

            TITLE: "Forgot Name",

            INPUT_LABEL: "Enter Phone Number",

            ACTION_BUTTON: "Find Name",

            BACK_BUTTON: "Back"

        },

        FORGOT_PHONE: {

            TITLE: "Forgot Phone",

            INPUT_LABEL: "Enter Full Name",

            ACTION_BUTTON: "Find Phone",

            BACK_BUTTON: "Back"

        }

    },



    /* =====================================================
       WELCOME MODAL
    ===================================================== */

    WELCOME_MODAL: {

        TITLE: "MYRA",

        TAGLINE: "A Shopping Love Story",

        MESSAGE_PREFIX: "Welcome",

        BUTTON_TEXT: "Begin Your Journey",

        AUTO_REDIRECT_SECONDS: 3,

        SHOW_ONLY_ONCE: true

    },



    /* =====================================================
       INSTALL APP MODAL
    ===================================================== */

    INSTALL_APP_MODAL: {

        ENABLED: true,

        SHOW_ON_MOBILE_ONLY: true,

        SHOW_ON_PAGES: [

            "index.html",

            "home.html",

            "collection.html"

        ],

        DO_NOT_SHOW_ON_DESKTOP: true,

        DO_NOT_SHOW_ON_LAPTOP: true,

        DO_NOT_SHOW_ON_TABLET: true,

        TITLE: "MYRA",

        TAGLINE: "A Shopping Love Story",

        HEADING: "Install MYRA App",

        BENEFITS: [

            "Enjoy Faster Access",

            "Exclusive Rewards",

            "Luxury Shopping Experience"

        ],

        INSTALL_BUTTON: "Install Now",

        LATER_BUTTON: "Maybe Later",

        MAYBE_LATER_SHOW_AFTER_MINUTES: 5,

        NEVER_SHOW_AFTER_INSTALL: true

    },



    /* =====================================================
       OFFLINE MODAL
    ===================================================== */

    OFFLINE_MODAL: {

        TITLE: "No Internet Connection",

        MESSAGE: "Please Check Your Network"

    },



    /* =====================================================
       SESSION EXPIRED MODAL
    ===================================================== */

    SESSION_EXPIRED_MODAL: {

        TITLE: "Session Expired",

        MESSAGE: "Please Sign In Again",

        REDIRECT_TO: "index.html"

    },



    /* =====================================================
       LOGOUT MODAL
    ===================================================== */

    LOGOUT_MODAL: {

        TITLE: "Logout From MYRA?",

        STAY_BUTTON: "Stay",

        LOGOUT_BUTTON: "Logout",

        USE_BROWSER_CONFIRM: false

    },



    /* =====================================================
       EMPTY STATES
    ===================================================== */

    EMPTY_STATE: {

        FAVOURITES: {

            TITLE: "No Favourites Yet",

            MESSAGE: "Start Discovering Beautiful Gifts"

        },

        CART: {

            TITLE: "Your Cart Is Empty",

            MESSAGE: "Find Something Special Today"

        },

        ORDERS: {

            TITLE: "No Orders Yet",

            MESSAGE: "Your Story Begins Here"

        }

    },



    /* =====================================================
       BUTTON TEXT
    ===================================================== */

    BUTTON: {

        ADD_TO_CART: "Add To Cart",

        CHECK_AVAILABILITY: "Check Availability",

        AVAILABILITY_REQUESTED: "✓ Availability Requested",

        CONTINUE_SHOPPING: "Continue Shopping",

        NOTIFY_MYRA: "Notify MYRA",

        PAY_NOW: "Pay Now",

        UPLOAD_SCREENSHOT: "Upload Screenshot",

        LOAD_MORE: "Load More"

    },



    /* =====================================================
       SYSTEM MESSAGES
    ===================================================== */

    MESSAGE: {

        CONNECTING_MYRA: "Connecting you with MYRA...",

        SCREENSHOT_UPLOADED: "Payment screenshot uploaded successfully.",

        REFERRAL_COPIED: "Referral link copied.",

        GENERIC_ERROR: "Something went wrong. Please try again.",

        NETWORK_ERROR: "Please check your internet connection."

    }

});

window.UI_CONFIG = UI_CONFIG;
