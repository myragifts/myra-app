/*
=========================================================
MYRA LIVE ACTIVITY CONFIG
File : /config/liveActivity.config.js
Purpose :
Live viewer engine, trending detection,
availability request counter and activity simulation.

No UI Logic
No Business Functions
No API Calls
=========================================================
*/

const LIVE_ACTIVITY_CONFIG = Object.freeze({

    ENABLED: true,



    /* =====================================================
       VIEWER LABEL
    ===================================================== */

    VIEWER: {

        LABEL: "people viewing now",

        ICON: "👀",

        SHOW_ON_PRODUCT_CARD: true,

        SHOW_ON_PRODUCT_POPUP: true,

        SHOW_ON_PRODUCT_DETAILS: true

    },



    /* =====================================================
       TIME SLOTS
    ===================================================== */

    TIME_SLOTS: [

        {
            ID: 1,
            START: "00:00",
            END: "04:00",
            NAME: "Midnight"
        },

        {
            ID: 2,
            START: "04:00",
            END: "08:00",
            NAME: "Early Morning"
        },

        {
            ID: 3,
            START: "08:00",
            END: "12:00",
            NAME: "Morning"
        },

        {
            ID: 4,
            START: "12:00",
            END: "16:00",
            NAME: "Afternoon"
        },

        {
            ID: 5,
            START: "16:00",
            END: "20:00",
            NAME: "Evening"
        },

        {
            ID: 6,
            START: "20:00",
            END: "24:00",
            NAME: "Night"
        }

    ],



    /* =====================================================
       PRICE GROUPS
    ===================================================== */

    PRICE_GROUPS: [

        "100-199",

        "200-299",

        "300-399",

        "400-499",

        "500-599",

        "600-699",

        "700-799",

        "800-899",

        "1000+"

    ],



    /* =====================================================
       ENGINE
    ===================================================== */

    ENGINE: {

        UPDATE_MIN_SECONDS: 20,

        UPDATE_MAX_SECONDS: 30,

        USE_WEIGHTED_RANDOM_WALK: true,

        SMALL_INCREASE: true,

        SMALL_DECREASE: true,

        NO_RANDOM_JUMPS: true,

        USE_FADE_ANIMATION: true,

        COUNTING_ANIMATION: false,

        BLINKING: false

    },



    /* =====================================================
       MIDNIGHT RULE
    ===================================================== */

    MIDNIGHT: {

        LOW_PRICE_RANGE: {

            MIN: 0,

            MAX: 25

        },

        HIGH_PRICE_RANGE: {

            MIN: 0,

            MAX: 9

        }

    },



    /* =====================================================
       TRENDING
    ===================================================== */

    TRENDING: {

        ENABLED: true,

        BADGE_TEXT: "Trending",

        SHOW_ONLY_TOP_ACTIVITY: true

    },



    /* =====================================================
       POPULAR
    ===================================================== */

    POPULAR: {

        ENABLED: true,

        BADGE_TEXT: "Popular"

    },



    /* =====================================================
       OUT OF STOCK REQUEST COUNTER
    ===================================================== */

    AVAILABILITY_REQUEST: {

        ENABLED: true,

        LABEL_ICON: "✨",

        TEMPLATE: "{{count}} customers requested availability",

        NEVER_DECREASE_WHILE_OUT_OF_STOCK: true,

        RESET_AFTER_BACK_IN_STOCK: true,

        FOLLOW_TIME_SLOT_ACTIVITY: true,

        USE_MEMORY: true

    },



    /* =====================================================
       MEMORY ENGINE
    ===================================================== */

    MEMORY: {

        STORE_LAST_VALUE: true,

        STORE_LAST_UPDATE_TIME: true,

        PREVENT_RANDOM_RESET: true

    },



    /* =====================================================
       CUSTOMER EXPERIENCE
    ===================================================== */

    EXPERIENCE: {

        LOOK_REALISTIC: true,

        LOOK_CALM: true,

        NEVER_LOOK_FAKE: true,

        MATCH_MYRA_BRAND_PHILOSOPHY: true

    }

});

window.LIVE_ACTIVITY_CONFIG = LIVE_ACTIVITY_CONFIG;
