/*
=========================================================
MYRA INDEX CONFIG
File : /config/index.config.js

Purpose :
Merge every configuration file into one
production-ready global object.

This is the ONLY config object that common.js
and the rest of the application should use.

No UI Logic
No Business Functions
No API Calls
=========================================================
*/

(function () {

    "use strict";

    /* =====================================================
       VERIFY REQUIRED CONFIG FILES
    ===================================================== */

    const REQUIRED_CONFIGS = {

        APP_CONFIG,

        BUSINESS_CONFIG,

        BACKEND_CONFIG,

        CLOUDINARY_CONFIG,

        PAYMENT_CONFIG,

        SHIPPING_CONFIG,

        REFERRAL_CONFIG,

        CUSTOMER_CONFIG,

        PRODUCT_CONFIG,

        ORDER_CONFIG,

        REVIEW_CONFIG,

        STOCK_CONFIG,

        BADGE_CONFIG,

        LIVE_ACTIVITY_CONFIG,

        UI_CONFIG,

        NAVIGATION_CONFIG,

        STORAGE_CONFIG

    };



    /* =====================================================
       BUILD FINAL CONFIG
    ===================================================== */

    const MYRA_CONFIG = Object.freeze({

        APP: APP_CONFIG,

        BUSINESS: BUSINESS_CONFIG,

        BACKEND: BACKEND_CONFIG,

        CLOUDINARY: CLOUDINARY_CONFIG,

        PAYMENT: PAYMENT_CONFIG,

        SHIPPING: SHIPPING_CONFIG,

        REFERRAL: REFERRAL_CONFIG,

        CUSTOMER: CUSTOMER_CONFIG,

        PRODUCT: PRODUCT_CONFIG,

        ORDER: ORDER_CONFIG,

        REVIEW: REVIEW_CONFIG,

        STOCK: STOCK_CONFIG,

        BADGE: BADGE_CONFIG,

        LIVE_ACTIVITY: LIVE_ACTIVITY_CONFIG,

        UI: UI_CONFIG,

        NAVIGATION: NAVIGATION_CONFIG,

        STORAGE: STORAGE_CONFIG

    });



    /* =====================================================
       GLOBAL EXPORT
    ===================================================== */

    window.MYRA_CONFIG = MYRA_CONFIG;



    /* =====================================================
       DEVELOPMENT SAFETY
    ===================================================== */

    if (typeof window !== "undefined") {

        Object.freeze(window.MYRA_CONFIG);

    }



    /* =====================================================
       OPTIONAL CONSOLE MESSAGE
    ===================================================== */

    if (
        BACKEND_CONFIG &&
        BACKEND_CONFIG.PRODUCTION &&
        BACKEND_CONFIG.PRODUCTION.ENABLE_DEBUG_LOGS
    ) {

        console.log("MYRA CONFIG LOADED");

    }

})();
