/*
=========================================================
MYRA BADGE CONFIG
File : /config/badge.config.js
Purpose :
Product badge rules, one badge priority system,
badge display locations, behaviour and design tone.

No UI Logic
No Business Functions
No API Calls
=========================================================
*/

const BADGE_CONFIG = Object.freeze({

    ENABLED: true,



    /* =====================================================
       ONE BADGE RULE
    ===================================================== */

    ONE_BADGE_RULE: {

        ENABLED: true,

        ONLY_ONE_PRIMARY_BADGE_AT_A_TIME: true,

        NEVER_STACK_BADGES: true

    },



    /* =====================================================
       BADGE PRIORITY
    ===================================================== */

    PRIORITY: [

        "BEST_SELLER",

        "TRENDING",

        "POPULAR",

        "NEW_ARRIVAL",

        "PREMIUM_PICK"

    ],



    /* =====================================================
       BADGES
    ===================================================== */

    BADGES: {

        BEST_SELLER: {

            ENABLED: true,

            LABEL: "🏆 Best Seller",

            SOURCE: "real_sales_performance",

            MANUAL: false,

            AUTO: true,

            PRIORITY: 1

        },

        TRENDING: {

            ENABLED: true,

            LABEL: "🔥 Trending",

            SOURCE: "live_activity_engine",

            MANUAL: false,

            AUTO: true,

            PRIORITY: 2

        },

        POPULAR: {

            ENABLED: true,

            LABEL: "⭐ Popular",

            SOURCE: "long_term_customer_engagement",

            MANUAL: false,

            AUTO: true,

            PRIORITY: 3

        },

        NEW_ARRIVAL: {

            ENABLED: true,

            LABEL: "✨ New Arrival",

            SOURCE: "newly_published_product",

            MANUAL: false,

            AUTO: true,

            PRIORITY: 4,

            EXPIRE_AFTER_DAYS: 14

        },

        PREMIUM_PICK: {

            ENABLED: true,

            LABEL: "💎 Premium Pick",

            SOURCE: "admin_selected",

            MANUAL: true,

            AUTO: false,

            PRIORITY: 5

        }

    },



    /* =====================================================
       DISPLAY LOCATIONS
    ===================================================== */

    DISPLAY: {

        PRODUCT_CARD: true,

        PRODUCT_POPUP: true,

        PRODUCT_DETAILS: true,

        SEARCH_RESULTS: true,

        COLLECTIONS: true,

        FAVOURITES: true,

        RECOMMENDATIONS: true

    },



    /* =====================================================
       DESIGN RULES
    ===================================================== */

    DESIGN: {

        STYLE: "soft_premium_pill",

        SHAPE: "rounded_pill",

        SIZE: "small",

        TYPOGRAPHY: "elegant",

        USE_SOFT_COLORS: true,

        USE_HARSH_COLORS: false,

        FLASHING: false,

        BOUNCING: false,

        BLINKING: false,

        ANIMATION: "subtle_fade"

    },



    /* =====================================================
       BADGE LOGIC RULES
    ===================================================== */

    LOGIC: {

        IF_MULTIPLE_CONDITIONS_TRUE_USE_HIGHEST_PRIORITY: true,

        BEST_SELLER_FROM_REAL_SALES_ONLY: true,

        TRENDING_FROM_LIVE_ACTIVITY_ONLY: true,

        POPULAR_FROM_LONG_TERM_ENGAGEMENT_ONLY: true,

        NEW_ARRIVAL_AUTO_EXPIRES: true,

        PREMIUM_PICK_ADMIN_ONLY: true

    },



    /* =====================================================
       CUSTOMER MESSAGE / ADMIN NOTE
    ===================================================== */

    NOTES: {

        CUSTOMER_VISIBLE_EXPLANATION: false,

        ADMIN_NOTE:
            "MYRA shows only one product badge at a time using locked badge priority."

    }

});

window.BADGE_CONFIG = BADGE_CONFIG;
