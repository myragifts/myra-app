/*
=========================================================
MYRA STOCK CONFIG
File : /config/stock.config.js
Purpose :
Stock management, inventory rules,
availability requests, stock notifications,
admin stock monitoring and live stock behaviour.

No UI Logic
No Business Functions
No API Calls
=========================================================
*/

const STOCK_CONFIG = Object.freeze({

    /* =====================================================
       STOCK SYSTEM
    ===================================================== */

    ENABLED: true,

    TRACK_INVENTORY: true,

    ALLOW_NEGATIVE_STOCK: false,

    NO_BACKORDER: true,



    /* =====================================================
       INVENTORY
    ===================================================== */

    INVENTORY: {

        MINIMUM_STOCK: 0,

        DEFAULT_STOCK: 0,

        HIDE_ZERO_STOCK_PRODUCT: false,

        CHECK_BEFORE_ADD_TO_CART: true,

        CHECK_BEFORE_PLACE_ORDER: true,

        REDUCE_AFTER_ORDER_CREATED: true,

        RESTORE_AFTER_ORDER_CANCEL_BEFORE_PAYMENT: true

    },



    /* =====================================================
       STOCK STATUS
    ===================================================== */

    STATUS: {

        IN_STOCK: "In Stock",

        LOW_STOCK: "Low Stock",

        OUT_OF_STOCK: "Out of Stock"

    },



    /* =====================================================
       LOW STOCK
    ===================================================== */

    LOW_STOCK: {

        ENABLED: true,

        THRESHOLD: 5,

        SHOW_TO_ADMIN_ONLY: true,

        CUSTOMER_SEES_LOW_STOCK: false

    },



    /* =====================================================
       OUT OF STOCK
    ===================================================== */

    OUT_OF_STOCK: {

        SHOW_PRODUCT: true,

        SHOW_PRICE: true,

        SHOW_IMAGES: true,

        SHOW_REVIEWS: true,

        ALLOW_SHARE: true,

        ALLOW_FAVOURITE: true,

        DISABLE_ADD_TO_CART: true,

        SHOW_CHECK_AVAILABILITY_BUTTON: true

    },



    /* =====================================================
       CHECK AVAILABILITY
    ===================================================== */

    CHECK_AVAILABILITY: {

        ENABLED: true,

        BUTTON_TEXT: "Check Availability",

        AFTER_REQUEST_TEXT: "✓ Availability Requested",

        CONNECTING_TEXT: "Connecting you with MYRA...",

        SHOW_CONNECTING_SCREEN: true,

        CONNECTING_DURATION_MS: 1000,

        PREVENT_DUPLICATE_REQUEST: true,

        DISABLE_BUTTON_AFTER_REQUEST: true

    },



    /* =====================================================
       STOCK REQUEST
    ===================================================== */

    STOCK_REQUEST: {

        SAVE_TO_SUPABASE_FIRST: true,

        OPEN_WHATSAPP_AFTER_SAVE: true,

        TABLE: "stock_requests",

        STATUS_PENDING: "Pending",

        STATUS_NOTIFIED: "Notified",

        STATUS_COMPLETED: "Completed",

        ONE_PENDING_REQUEST_PER_CUSTOMER_PER_PRODUCT: true,

        REQUIRE_PRODUCT_ID: true,

        REQUIRE_CUSTOMER_ID: true,

        REQUIRE_PHONE: true

    },



    /* =====================================================
       ADMIN STOCK REQUEST PANEL
    ===================================================== */

    ADMIN: {

        ENABLED: true,

        SECTION_NAME: "Stock Requests",

        SHOW_PRODUCT_ID: true,

        SHOW_PRODUCT_NAME: true,

        SHOW_CUSTOMER_ID: true,

        SHOW_CUSTOMER_NAME: true,

        SHOW_PHONE: true,

        SHOW_REQUEST_DATE: true,

        SHOW_REQUEST_STATUS: true,

        SHOW_NOTIFICATION_STATUS: true

    },



    /* =====================================================
       PRODUCT BACK IN STOCK
    ===================================================== */

    BACK_IN_STOCK: {

        AUTO_NOTIFY_CUSTOMERS: true,

        CLEAR_PENDING_REQUEST_AFTER_NOTIFICATION: true,

        RESTORE_ADD_TO_CART_BUTTON: true,

        REMOVE_AVAILABILITY_REQUESTED_BUTTON: true,

        MESSAGE_TITLE: "Good News!",

        MESSAGE:

            "The product you requested is now available."

    },



    /* =====================================================
       LIVE REQUEST COUNTER
    ===================================================== */

    REQUEST_COUNTER: {

        SHOW_WHEN_OUT_OF_STOCK: true,

        LABEL_PREFIX: "✨",

        TEXT_TEMPLATE:

            "{{count}} customers requested availability",

        NEVER_DECREASE_WHILE_OUT_OF_STOCK: true,

        RESET_AFTER_PRODUCT_BACK_IN_STOCK: true

    },



    /* =====================================================
       LIVE UPDATE
    ===================================================== */

    LIVE_UPDATE: {

        ENABLED: true,

        USE_FADE_ANIMATION: true,

        UPDATE_INTERVAL_MIN_SECONDS: 20,

        UPDATE_INTERVAL_MAX_SECONDS: 30

    },



    /* =====================================================
       CUSTOMER MESSAGE
    ===================================================== */

    MESSAGE: {

        OUT_OF_STOCK:

            "This product is currently out of stock.",

        REQUEST_SENT:

            "We'll notify you when this product is available.",

        ALREADY_REQUESTED:

            "You have already requested availability for this product.",

        BACK_IN_STOCK:

            "Good news! Your requested product is now available."

    }

});

window.STOCK_CONFIG = STOCK_CONFIG;
