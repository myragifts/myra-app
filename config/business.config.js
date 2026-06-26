/*
=========================================================
MYRA BUSINESS CONFIG
File : /config/business.config.js
Purpose :
Business information, contact details,
payment policy, customer protection,
business rules and public information.

No UI Logic
No Business Functions
No API Calls
=========================================================
*/

const BUSINESS_CONFIG = Object.freeze({

    /* =====================================================
       BRAND
    ===================================================== */

    BRAND_NAME: "MYRA",

    TAGLINE: "A Shopping Love Story",

    WEBSITE: "https://myragifts.github.io/myra-app/",



    /* =====================================================
       CONTACT
    ===================================================== */

    BUSINESS_EMAIL: "myragifts@gmail.com",

    BUSINESS_PHONE: "9836697502",

    WHATSAPP_NUMBER: "919836697502",

    BUSINESS_LOCATION: "Kolkata, West Bengal, India",



    /* =====================================================
       PAYMENT
    ===================================================== */

    PAYMENT_PROVIDER: "UPI",

    PAYMENT_LINK: "https://tinyurl.com/myra-pay-secure",

    PAYMENT_MODE: "PREPAID ONLY",

    CASH_ON_DELIVERY: false,

    FUTURE_PAYMENT_GATEWAY: "Razorpay",



    /* =====================================================
       PURCHASE PROTECTION
    ===================================================== */

    PURCHASE_PROTECTION: {

        ENABLED: true,

        SHOW_ON_PRODUCT: true,

        SHOW_ON_CHECKOUT: true,

        TITLE: "MYRA Purchase Protection",

        FEATURES: [

            "Damaged Product Protection",

            "Wrong Item Protection",

            "Secure Packaging",

            "Quality Checked Before Shipping"

        ],

        POLICY:

            "Returns are not accepted for change of mind or personal preference. If you receive a damaged or incorrect item, we'll help make it right."

    },



    /* =====================================================
       SHIPPING POLICY
    ===================================================== */

    SHIPPING: {

        FREE_SHIPPING: false,

        SHIPPING_CHARGE: 0,

        SHOW_ESTIMATED_DELIVERY: true

    },



    /* =====================================================
       ORDER POLICY
    ===================================================== */

    ORDER_POLICY: {

        ALLOW_CANCEL_BEFORE_PAYMENT: true,

        ALLOW_CANCEL_AFTER_PAYMENT: false,

        ALLOW_RETURN: false,

        ALLOW_EXCHANGE: false

    },



    /* =====================================================
       CUSTOMER SUPPORT
    ===================================================== */

    SUPPORT: {

        WHATSAPP_SUPPORT: true,

        EMAIL_SUPPORT: true,

        PHONE_SUPPORT: true

    },



    /* =====================================================
       BUSINESS HOURS
    ===================================================== */

    BUSINESS_HOURS: {

        DAYS: "Monday - Sunday",

        TIME: "09:00 AM - 09:00 PM"

    },



    /* =====================================================
       SOCIAL
    ===================================================== */

    SOCIAL: {

        FACEBOOK: "",

        INSTAGRAM: "",

        YOUTUBE: "",

        X: ""

    },



    /* =====================================================
       LEGAL
    ===================================================== */

    LEGAL: {

        COPYRIGHT: "© 2026 MYRA",

        COUNTRY: "India",

        CURRENCY: "INR"

    }

});

window.BUSINESS_CONFIG = BUSINESS_CONFIG;
