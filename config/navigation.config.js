/*
=========================================================
MYRA NAVIGATION CONFIG
File : /config/navigation.config.js
Purpose :
Page routes, bottom navigation, protected pages,
redirect rules and navigation labels.

No UI Logic
No Business Functions
No API Calls
=========================================================
*/

const NAVIGATION_CONFIG = Object.freeze({

    /* =====================================================
       PAGE ROUTES
    ===================================================== */

    PAGES: {

        INDEX: "index.html",

        HOME: "home.html",

        COLLECTION: "collection.html",

        SEARCH: "search.html",

        FAVOURITES: "favourites.html",

        CART: "cart.html",

        CHECKOUT: "checkout.html",

        REWARD_WALLET: "reward-wallet.html",

        PROFILE: "profile.html",

        ORDER_DETAILS: "order-details.html",

        NOTIFICATIONS: "notifications.html"

    },



    /* =====================================================
       DEFAULT ROUTES
    ===================================================== */

    DEFAULT: {

        AFTER_LOGIN: "home.html",

        AFTER_SIGNUP: "home.html",

        AFTER_LOGOUT: "index.html",

        SESSION_EXPIRED: "index.html",

        EMPTY_BACK_TARGET: "home.html"

    },



    /* =====================================================
       PROTECTED PAGES
    ===================================================== */

    PROTECTED_PAGES: [

        "home.html",

        "collection.html",

        "search.html",

        "favourites.html",

        "cart.html",

        "checkout.html",

        "reward-wallet.html",

        "profile.html",

        "order-details.html",

        "notifications.html"

    ],



    /* =====================================================
       PUBLIC PAGES
    ===================================================== */

    PUBLIC_PAGES: [

        "index.html"

    ],



    /* =====================================================
       BOTTOM NAVIGATION
    ===================================================== */

    BOTTOM_NAV: {

        ENABLED: true,

        ITEMS: [

            {
                KEY: "home",
                LABEL: "Home",
                PAGE: "home.html",
                ICON: "home"
            },

            {
                KEY: "collection",
                LABEL: "Collection",
                PAGE: "collection.html",
                ICON: "collection"
            },

            {
                KEY: "favourite",
                LABEL: "Favourite",
                PAGE: "favourites.html",
                ICON: "heart"
            },

            {
                KEY: "cart",
                LABEL: "Cart",
                PAGE: "cart.html",
                ICON: "cart",
                SHOW_COUNT: true
            },

            {
                KEY: "profile",
                LABEL: "Profile",
                PAGE: "profile.html",
                ICON: "user"
            }

        ]

    },



    /* =====================================================
       HEADER NAVIGATION
    ===================================================== */

    HEADER: {

        SHOW_LOGO: true,

        SHOW_SEARCH_ICON: true,

        SHOW_NOTIFICATION_ICON: true,

        SHOW_CART_ICON: true,

        SHOW_BACK_BUTTON_ON_SUB_PAGES: true

    },



    /* =====================================================
       REDIRECT RULES
    ===================================================== */

    REDIRECT: {

        LOGGED_IN_USER_OPEN_INDEX_GO_HOME: true,

        LOGGED_OUT_USER_OPEN_PROTECTED_GO_INDEX: true,

        KEEP_REFERRAL_PARAM_WHEN_REDIRECTING: true,

        SESSION_EXPIRED_GO_INDEX: true

    },



    /* =====================================================
       NAVIGATION BEHAVIOUR
    ===================================================== */

    BEHAVIOUR: {

        USE_SOFT_PAGE_TRANSITION: true,

        ACTIVE_NAV_HIGHLIGHT: true,

        PREVENT_DOUBLE_TAP_NAVIGATION: true,

        SCROLL_TO_TOP_ON_PAGE_CHANGE: true,

        USE_BROWSER_CONFIRM: false

    },



    /* =====================================================
       PAGE TITLES
    ===================================================== */

    PAGE_TITLE: {

        INDEX: "MYRA | A Shopping Love Story",

        HOME: "MYRA Home",

        COLLECTION: "MYRA Collection",

        SEARCH: "Search MYRA",

        FAVOURITES: "My Favourites",

        CART: "My Cart",

        CHECKOUT: "Checkout",

        REWARD_WALLET: "Reward Wallet",

        PROFILE: "My Profile",

        ORDER_DETAILS: "Order Details",

        NOTIFICATIONS: "Notifications"

    }

});

window.NAVIGATION_CONFIG = NAVIGATION_CONFIG;
