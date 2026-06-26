/*
=========================================================
MYRA PAYMENT CONFIG
File : /config/payment.config.js
Purpose :
Payment method rules, UPI flow, screenshot proof,
WhatsApp notification flow and future Razorpay readiness.

No UI Logic
No Payment Functions
No API Calls
=========================================================
*/

const PAYMENT_CONFIG = Object.freeze({

    /* =====================================================
       PAYMENT MODE
    ===================================================== */

    CURRENT_PROVIDER: "UPI",

    FUTURE_PROVIDER: "RAZORPAY",

    PAYMENT_MODE: "PREPAID_ONLY",

    CASH_ON_DELIVERY: false,

    PARTIAL_PAYMENT: false,



    /* =====================================================
       UPI PAYMENT
    ===================================================== */

    UPI: {

        ENABLED: true,

        PAYMENT_URL: "https://tinyurl.com/myra-pay-secure",

        OPEN_PAYMENT_PAGE: true,

        REQUIRE_EXACT_AMOUNT: true,

        INCLUDE_ORDER_ID_IN_NOTE: true

    },



    /* =====================================================
       PAYMENT PAGE CONTENT
    ===================================================== */

    PAYMENT_PAGE: {

        BRAND_NAME: "MYRA",

        TAGLINE: "A Shopping Love Story",

        TITLE: "Scan & Pay",

        ORDER_LABEL: "Order ID",

        AMOUNT_LABEL: "Amount",

        QR_PLACEHOLDER: "UPI QR Code",

        APP_TEXT: "Pay using Google Pay PhonePe Paytm BHIM",

        SECURITY_TEXT: "Your payment is completely secure",

        SCREENSHOT_TITLE: "Payment Screenshot",

        SCREENSHOT_UPLOAD_TEXT: "Click to Upload Screenshot",

        SCREENSHOT_FORMAT_TEXT: "JPG • PNG • JPEG • WEBP",

        SCREENSHOT_SIZE_TEXT: "Maximum 5 MB",

        NOTIFY_BUTTON_TEXT: "Notify MYRA",

        NOTIFY_BUTTON_DISABLED_UNTIL_SCREENSHOT: true

    },



    /* =====================================================
       PAYMENT SCREENSHOT
    ===================================================== */

    SCREENSHOT: {

        REQUIRED: true,

        MAX_FILE_SIZE_MB: 5,

        ALLOWED_FORMATS: ["jpg", "jpeg", "png", "webp"],

        UPLOAD_TO_CLOUDINARY: true,

        SAVE_URL_IN_SUPABASE: true,

        REQUIRED_BEFORE_NOTIFY: true

    },



    /* =====================================================
       PAYMENT STATUS
    ===================================================== */

    STATUS: {

        PENDING: "Payment Pending",

        RECEIVED: "Payment Received",

        FAILED: "Payment Failed",

        REFUNDED: "Payment Refunded"

    },



    /* =====================================================
       ORDER PAYMENT FLOW
    ===================================================== */

    FLOW: {

        SAVE_ORDER_BEFORE_PAYMENT: true,

        DEFAULT_PAYMENT_STATUS: "Payment Pending",

        SELLER_MANUAL_VERIFICATION: true,

        AUTO_CONFIRM_AFTER_UPI: false,

        AUTO_CONFIRM_AFTER_RAZORPAY: true

    },



    /* =====================================================
       DEVICE FLOW
    ===================================================== */

    DEVICE_FLOW: {

        MOBILE: {

            OPEN_UPI_OR_PAYMENT_LINK: true,

            OPEN_WHATSAPP_AFTER_SCREENSHOT: true

        },

        DESKTOP: {

            SHOW_MYRA_PAYMENT_PAGE: true,

            SHOW_QR_BOX: true,

            REQUIRE_SCREENSHOT_UPLOAD: true,

            ENABLE_NOTIFY_MYRA_AFTER_UPLOAD: true

        },

        LAPTOP: {

            SHOW_MYRA_PAYMENT_PAGE: true,

            SHOW_QR_BOX: true,

            REQUIRE_SCREENSHOT_UPLOAD: true,

            ENABLE_NOTIFY_MYRA_AFTER_UPLOAD: true

        }

    },



    /* =====================================================
       WHATSAPP NOTIFICATION
    ===================================================== */

    WHATSAPP: {

        ENABLED: true,

        OPEN_AFTER_SCREENSHOT_UPLOAD: true,

        SELLER_NUMBER: "919836697502",

        MESSAGE_FIELDS: [

            "order_id",

            "customer_name",

            "customer_phone",

            "customer_id",

            "total_amount",

            "payment_screenshot_url",

            "order_summary"

        ],

        MESSAGE_TEMPLATE: [
            "Hi MYRA,",
            "",
            "I have completed my payment.",
            "",
            "Order ID: {{order_id}}",
            "Customer: {{customer_name}}",
            "Customer ID: {{customer_id}}",
            "Phone: {{customer_phone}}",
            "Amount: ₹{{total_amount}}",
            "",
            "Payment Screenshot:",
            "{{payment_screenshot_url}}",
            "",
            "Order Summary:",
            "{{order_summary}}",
            "",
            "Please verify my payment."
        ]

    },



    /* =====================================================
       RAZORPAY FUTURE READY
    ===================================================== */

    RAZORPAY: {

        ENABLED: false,

        KEY_ID: "",

        AUTO_VERIFY_PAYMENT: true,

        REMOVE_SCREENSHOT_FLOW_WHEN_ENABLED: true,

        PAYMENT_SUCCESS_STATUS: "Payment Received",

        ORDER_SUCCESS_STATUS: "Confirmed"

    },



    /* =====================================================
       CUSTOMER MESSAGES
    ===================================================== */

    MESSAGES: {

        PAYMENT_PENDING:
            "Your order has been placed. Please complete your payment.",

        SCREENSHOT_REQUIRED:
            "Please upload your payment screenshot to notify MYRA.",

        SCREENSHOT_UPLOADED:
            "Payment screenshot uploaded successfully.",

        PAYMENT_SECURE:
            "Your payment is completely secure.",

        PAYMENT_VERIFICATION:
            "MYRA will verify your payment shortly."

    }

});

window.PAYMENT_CONFIG = PAYMENT_CONFIG;
