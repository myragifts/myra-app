/*
=========================================================
MYRA BACKEND CONFIG
File : /config/backend.config.js
Purpose :
Supabase backend configuration, table names,
session rules, query limits and database safety rules.

No UI Logic
No Business Functions
No Supabase Query Code
No Secret Keys
=========================================================
*/

const BACKEND_CONFIG = Object.freeze({

    /* =====================================================
       SUPABASE CONNECTION
    ===================================================== */

    SUPABASE: {

        URL: "https://ijclbrwofsgrdnlyzkro.supabase.co",

        PUBLISHABLE_KEY: "sb_publishable_FzFZFR7qCsSv89mxruHFDQ_Gdfs1Yqx",

        CLIENT_NAME: "MYRA_SUPABASE_CLIENT",

        MODE: "production",

        USE_SERVICE_ROLE_KEY_IN_FRONTEND: false

    },



    /* =====================================================
       DATABASE SCHEMA
    ===================================================== */

    SCHEMA: {

        PUBLIC: "public"

    },



    /* =====================================================
       TABLE NAMES
    ===================================================== */

    TABLES: {

        USERS: "users",

        PRODUCTS: "products",

        ORDERS: "orders",

        ORDER_ITEMS: "order_items",

        CART_ITEMS: "cart_items",

        FAVOURITES: "favourites",

        REVIEWS: "reviews",

        REFERRALS: "referrals",

        REWARDS: "rewards",

        STOCK_REQUESTS: "stock_requests",

        NOTIFICATIONS: "notifications",

        PAYMENT_SCREENSHOTS: "payment_screenshots",

        COUPONS: "coupons",

        BANNERS: "banners",

        CATEGORIES: "categories"

    },



    /* =====================================================
       USERS TABLE COLUMNS
    ===================================================== */

    USERS_COLUMNS: {

        ID: "id",

        CUSTOMER_ID: "customer_id",

        FULL_NAME: "full_name",

        PHONE: "phone",

        REFERRAL_CODE: "referral_code",

        REFERRED_BY: "referred_by",

        REWARD_BALANCE: "reward_balance",

        IS_ACTIVE: "is_active",

        LAST_LOGIN_AT: "last_login_at",

        CREATED_AT: "created_at"

    },



    /* =====================================================
       SESSION RULES
    ===================================================== */

    SESSION: {

        LOGIN_METHOD: "FULL_NAME_PHONE",

        LOGIN_ONCE: true,

        STAY_LOGGED_IN_UNTIL_LOGOUT: true,

        AUTO_REDIRECT_LOGGED_IN_USER: true,

        REDIRECT_LOGGED_IN_TO: "home.html",

        REDIRECT_LOGGED_OUT_TO: "index.html",

        UPDATE_LAST_LOGIN_AT: true,

        LOCAL_SESSION_FIELDS: [

            "user_id",

            "customer_id",

            "full_name",

            "phone",

            "login_time"

        ],

        STORE_REWARD_BALANCE_LOCALLY: false,

        STORE_ADMIN_DATA_LOCALLY: false,

        STORE_REFERRAL_DATA_LOCALLY: false

    },



    /* =====================================================
       AUTHENTICATION RULES
    ===================================================== */

    AUTH: {

        USE_EMAIL_AUTH: false,

        USE_PASSWORD_AUTH: false,

        USE_OTP_AUTH: false,

        USE_PHONE_PASSWORD_AUTH: false,

        CUSTOM_LOGIN_ENABLED: true,

        LOGIN_FIELDS: [

            "full_name",

            "phone"

        ],

        SIGNUP_FIELDS: [

            "full_name",

            "phone",

            "referral_code"

        ]

    },



    /* =====================================================
       QUERY LIMITS
    ===================================================== */

    QUERY_LIMITS: {

        HOME_PRODUCTS: 24,

        COLLECTION_PRODUCTS: 24,

        SEARCH_PRODUCTS: 24,

        FAVOURITES: 24,

        ORDERS: 20,

        REVIEWS: 10,

        NOTIFICATIONS: 20,

        ADMIN_PRODUCTS: 50,

        ADMIN_ORDERS: 50,

        ADMIN_CUSTOMERS: 50,

        ADMIN_STOCK_REQUESTS: 50

    },



    /* =====================================================
       DATABASE ID RULES
    ===================================================== */

    ID_RULES: {

        PRODUCT_ID: {

            PREFIX: "MY",

            START: "MY000001",

            END: "MY999999",

            AUTO_GENERATE: true,

            NEVER_REUSE: true,

            NEVER_EDIT: true,

            BASED_ON_HIGHEST_EXISTING_ID: true

        },

        CUSTOMER_ID: {

            PREFIX: "M",

            FORMAT: "M + registered mobile number",

            EXAMPLE: "M9836697502",

            AUTO_GENERATE: true,

            NEVER_EDIT: true,

            NEVER_REUSE: true

        },

        ORDER_ID: {

            PREFIX: "ORD",

            FORMAT: "ORD + YY + 7 digit serial",

            EXAMPLE: "ORD250000001",

            AUTO_GENERATE: true,

            NEVER_REUSE: true,

            NEVER_EDIT: true

        }

    },



    /* =====================================================
       DATABASE SAFETY RULES
    ===================================================== */

    SAFETY_RULES: {

        NEVER_STORE_SERVICE_ROLE_KEY_IN_FRONTEND: true,

        NEVER_STORE_DATABASE_PASSWORD_IN_FRONTEND: true,

        NEVER_STORE_JWT_SECRET_IN_FRONTEND: true,

        USE_ONLY_PUBLISHABLE_KEY: true,

        NEVER_HARD_DELETE_USERS: true,

        NEVER_HARD_DELETE_ORDERS: true,

        ARCHIVE_PRODUCTS_INSTEAD_OF_DELETE: true,

        DISABLE_COUPONS_INSTEAD_OF_DELETE: true,

        KEEP_PAYMENT_SCREENSHOT_RECORDS: true,

        KEEP_STOCK_REQUEST_HISTORY: true

    },



    /* =====================================================
       DEFAULT TIMESTAMP FIELDS
    ===================================================== */

    TIMESTAMPS: {

        CREATED_AT: "created_at",

        UPDATED_AT: "updated_at",

        DELETED_AT: "deleted_at",

        ARCHIVED_AT: "archived_at",

        LAST_LOGIN_AT: "last_login_at"

    },



    /* =====================================================
       DEFAULT SORTING
    ===================================================== */

    SORTING: {

        PRODUCTS_DEFAULT: {

            COLUMN: "created_at",

            DIRECTION: "desc"

        },

        ORDERS_DEFAULT: {

            COLUMN: "created_at",

            DIRECTION: "desc"

        },

        REVIEWS_DEFAULT: {

            COLUMN: "created_at",

            DIRECTION: "desc"

        },

        STOCK_REQUESTS_DEFAULT: {

            COLUMN: "created_at",

            DIRECTION: "desc"

        }

    },



    /* =====================================================
       ERROR HANDLING
    ===================================================== */

    ERROR_HANDLING: {

        SHOW_RAW_SUPABASE_ERROR_TO_CUSTOMER: false,

        LOG_ERRORS_TO_CONSOLE_IN_PRODUCTION: false,

        USE_MYRA_CUSTOM_ERROR_UI: true,

        GENERIC_ERROR_MESSAGE: "Something went wrong. Please try again.",

        NETWORK_ERROR_MESSAGE: "Please check your internet connection.",

        SESSION_ERROR_MESSAGE: "Session expired. Please sign in again."

    },



    /* =====================================================
       PRODUCTION FLAGS
    ===================================================== */

    PRODUCTION: {

        ENABLE_REAL_BACKEND: true,

        ENABLE_DEMO_MODE: false,

        ENABLE_TEST_DATA: false,

        ENABLE_DEBUG_LOGS: false,

        ENABLE_SAFE_FAIL_MESSAGES: true

    }

});

window.BACKEND_CONFIG = BACKEND_CONFIG;
