/*
=========================================================
MYRA STORAGE CONFIG
File : /config/storage.config.js
Purpose :
LocalStorage keys, temporary session keys,
cart/favourite keys, referral temporary storage,
PWA install state and safe browser storage rules.

No UI Logic
No Business Functions
No API Calls
=========================================================
*/

const STORAGE_CONFIG = Object.freeze({

    /* =====================================================
       PREFIX
    ===================================================== */

    PREFIX: "myra_",



    /* =====================================================
       SESSION STORAGE
    ===================================================== */

    SESSION: {

        KEY: "myra_session",

        STORE_LOGIN_ONCE: true,

        CLEAR_ON_LOGOUT: true,

        FIELDS: [

            "user_id",

            "customer_id",

            "full_name",

            "phone",

            "login_time"

        ],

        DO_NOT_STORE: [

            "reward_balance",

            "admin_data",

            "orders",

            "payment_data",

            "supabase_secret"

        ]

    },



    /* =====================================================
       CUSTOMER
    ===================================================== */

    CUSTOMER: {

        WELCOME_SHOWN: "myra_welcome_shown",

        LAST_LOGIN: "myra_last_login",

        DEVICE_ID: "myra_device_id"

    },



    /* =====================================================
       CART
    ===================================================== */

    CART: {

        KEY: "myra_cart",

        COUNT_KEY: "myra_cart_count",

        CLEAR_AFTER_ORDER: true,

        CART_DOES_NOT_RESERVE_STOCK: true

    },



    /* =====================================================
       FAVOURITES
    ===================================================== */

    FAVOURITES: {

        KEY: "myra_favourites",

        COUNT_KEY: "myra_favourites_count"

    },



    /* =====================================================
       REFERRAL
    ===================================================== */

    REFERRAL: {

        TEMP_CODE: "myra_temp_referral_code",

        TEMP_SOURCE: "myra_temp_referral_source",

        CLEAR_AFTER_SIGNUP: true

    },



    /* =====================================================
       INSTALL APP
    ===================================================== */

    INSTALL_APP: {

        PROMPT_DISMISSED_AT: "myra_install_prompt_dismissed_at",

        INSTALLED: "myra_app_installed",

        MAYBE_LATER_MINUTES: 5

    },



    /* =====================================================
       PAYMENT
    ===================================================== */

    PAYMENT: {

        CURRENT_ORDER_ID: "myra_current_order_id",

        PAYMENT_SCREENSHOT_TEMP: "myra_payment_screenshot_temp",

        CLEAR_AFTER_NOTIFY: true

    },



    /* =====================================================
       LIVE ACTIVITY
    ===================================================== */

    LIVE_ACTIVITY: {

        VIEWER_MEMORY: "myra_live_viewer_memory",

        REQUEST_MEMORY: "myra_stock_request_memory",

        LAST_UPDATE: "myra_live_activity_last_update"

    },



    /* =====================================================
       UI STATE
    ===================================================== */

    UI: {

        LAST_ACTIVE_PAGE: "myra_last_active_page",

        THEME_MODE: "myra_theme_mode",

        LAST_TOAST: "myra_last_toast"

    },



    /* =====================================================
       SAFETY RULES
    ===================================================== */

    SAFETY: {

        NEVER_STORE_SUPABASE_SERVICE_ROLE_KEY: true,

        NEVER_STORE_PAYMENT_SECRET: true,

        NEVER_STORE_DATABASE_PASSWORD: true,

        NEVER_STORE_ADMIN_SECRET: true,

        CLEAR_TEMP_DATA_ON_LOGOUT: true

    }

});

window.STORAGE_CONFIG = STORAGE_CONFIG;
