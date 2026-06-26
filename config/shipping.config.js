/*
=========================================================
MYRA SHIPPING CONFIG
File : /config/shipping.config.js
Purpose :
Shipping charges, delivery timeline,
shipping availability and customer messages.

No UI Logic
No Business Functions
No API Calls
=========================================================
*/

const SHIPPING_CONFIG = Object.freeze({

    /* =====================================================
       SHIPPING STATUS
    ===================================================== */

    ENABLED: true,

    COUNTRY: "India",

    CURRENCY: "INR",

    SYMBOL: "₹",



    /* =====================================================
       SHIPPING CHARGE
    ===================================================== */

    FREE_SHIPPING_ENABLED: false,

    FREE_SHIPPING_MIN_ORDER: 499,

    SHIPPING_CHARGE: 40,



    /* =====================================================
       DELIVERY
    ===================================================== */

    DELIVERY: {

        MIN_DAYS: 3,

        MAX_DAYS: 7,

        BUSINESS_DAYS_ONLY: true,

        SHOW_ESTIMATED_DELIVERY: true

    },



    /* =====================================================
       ORDER PROCESS
    ===================================================== */

    ORDER_FLOW: {

        PROCESSING: "Processing",

        PACKED: "Packed",

        SHIPPED: "Shipped",

        OUT_FOR_DELIVERY: "Out For Delivery",

        DELIVERED: "Delivered",

        CANCELLED: "Cancelled"

    },



    /* =====================================================
       SHIPPING RULES
    ===================================================== */

    RULES: {

        ONE_SHIPPING_CHARGE_PER_ORDER: true,

        CALCULATE_FROM_CART_TOTAL: true,

        APPLY_AFTER_PRODUCT_DISCOUNT: true,

        APPLY_BEFORE_REWARD_REDEMPTION: true

    },



    /* =====================================================
       PURCHASE PROTECTION
    ===================================================== */

    PURCHASE_PROTECTION: {

        ENABLED: true,

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
       SHIPPING MESSAGES
    ===================================================== */

    MESSAGE: {

        SHIPPING_FREE:
            "Congratulations! You get FREE SHIPPING.",

        SHIPPING_CHARGE:
            "Shipping Charge",

        DELIVERY_ESTIMATE:
            "Estimated Delivery",

        SECURE_PACKAGING:
            "Packed with care for safe delivery."

    },



    /* =====================================================
       TRACKING
    ===================================================== */

    TRACKING: {

        ENABLED: true,

        SHOW_STATUS_HISTORY: true,

        SHOW_ESTIMATED_DELIVERY: true

    },



    /* =====================================================
       CANCELLATION
    ===================================================== */

    CANCELLATION: {

        ALLOWED_BEFORE_PAYMENT: true,

        ALLOWED_AFTER_PAYMENT: false

    },



    /* =====================================================
       RETURN POLICY
    ===================================================== */

    RETURN_POLICY: {

        CHANGE_OF_MIND: false,

        PERSONAL_PREFERENCE: false,

        DAMAGED_PRODUCT: true,

        WRONG_ITEM: true,

        MISSING_ITEM: true

    },



    /* =====================================================
       FUTURE
    ===================================================== */

    FUTURE: {

        MULTIPLE_SHIPPING_ZONES: false,

        INTERNATIONAL_SHIPPING: false,

        EXPRESS_DELIVERY: false

    }

});

window.SHIPPING_CONFIG = SHIPPING_CONFIG;
