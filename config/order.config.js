/*
=========================================================
MYRA ORDER CONFIG
File : /config/order.config.js
Purpose :
Order ID rules, order status, checkout flow,
stock reservation rule, payment connection,
desktop/laptop payment flow and order messages.

No UI Logic
No Business Functions
No API Calls
=========================================================
*/

const ORDER_CONFIG = Object.freeze({

    /* =====================================================
       ORDER ID
    ===================================================== */

    ORDER_ID: {

        PREFIX: "ORD",

        FORMAT: "ORD + YY + 7 digit serial",

        EXAMPLE: "ORD250000001",

        SERIAL_DIGITS: 7,

        YEAR_DIGITS: 2,

        AUTO_GENERATE: true,

        GENERATE_ON_PLACE_ORDER: true,

        LIFETIME_UNIQUE: true,

        NEVER_REUSE: true,

        NEVER_EDIT: true,

        CANCELLED_ORDER_ID_NEVER_REUSED: true,

        SHOW_TO_CUSTOMER: true,

        SHOW_IN_PAYMENT_PAGE: true,

        SHOW_IN_WHATSAPP_MESSAGE: true,

        SHOW_IN_ORDER_HISTORY: true,

        SHOW_IN_ADMIN_PANEL: true

    },



    /* =====================================================
       ORDER STATUS
    ===================================================== */

    STATUS: {

        PLACED: "Order Placed",

        CONFIRMED: "Confirmed",

        PROCESSING: "Processing",

        PACKED: "Packed",

        SHIPPED: "Shipped",

        OUT_FOR_DELIVERY: "Out For Delivery",

        DELIVERED: "Delivered",

        CANCELLED: "Cancelled"

    },



    /* =====================================================
       DEFAULT ORDER STATE
    ===================================================== */

    DEFAULT: {

        ORDER_STATUS: "Order Placed",

        PAYMENT_STATUS: "Payment Pending",

        PAYMENT_METHOD: "UPI",

        SOURCE: "MYRA Website"

    },



    /* =====================================================
       CHECKOUT FLOW
    ===================================================== */

    CHECKOUT: {

        REQUIRE_LOGIN: true,

        REQUIRE_CART_ITEMS: true,

        REQUIRE_ADDRESS: true,

        REQUIRE_PHONE: true,

        REQUIRE_PAYMENT: true,

        ALLOW_GUEST_CHECKOUT: false,

        PLACE_ORDER_TEXT: "Place Order",

        SAVE_ORDER_BEFORE_PAYMENT: true,

        REDIRECT_TO_PAYMENT_AFTER_ORDER: true,

        CLEAR_CART_AFTER_ORDER_CREATED: true

    },



    /* =====================================================
       STOCK RESERVATION RULE
    ===================================================== */

    STOCK_RULE: {

        CART_DOES_NOT_RESERVE_STOCK: true,

        FIRST_SUCCESSFUL_PLACE_ORDER_GETS_STOCK: true,

        CHECK_STOCK_BEFORE_ORDER_CREATE: true,

        REDUCE_STOCK_AFTER_ORDER_CREATED: true,

        NO_BACKORDER_IN_V1: true,

        IF_STOCK_GONE_SHOW_MODAL: true

    },



    /* =====================================================
       JUST OUT OF STOCK MODAL
    ===================================================== */

    JUST_OUT_OF_STOCK_MODAL: {

        TITLE: "Sorry!",

        MESSAGE: "This product has just gone out of stock.",

        SUB_MESSAGE:
            "Request availability and we’ll notify you when it’s back.",

        PRIMARY_BUTTON: "Check Availability",

        SECONDARY_BUTTON: "Continue Shopping",

        USE_CUSTOM_MYRA_MODAL: true,

        USE_BROWSER_ALERT: false

    },



    /* =====================================================
       PAYMENT FLOW
    ===================================================== */

    PAYMENT: {

        METHOD: "UPI",

        COD_ALLOWED: false,

        PREPAID_ONLY: true,

        PAYMENT_REQUIRED_BEFORE_PROCESSING: true,

        PAYMENT_SCREENSHOT_REQUIRED: true,

        SELLER_MANUAL_VERIFICATION: true,

        FUTURE_RAZORPAY_READY: true

    },



    /* =====================================================
       DESKTOP / LAPTOP SUCCESS FLOW
    ===================================================== */

    DESKTOP_PAYMENT_FLOW: {

        ENABLED: true,

        SHOW_PAYMENT_PAGE: true,

        PAYMENT_PAGE_TITLE: "Scan & Pay",

        SHOW_QR_BOX: true,

        SHOW_SCREENSHOT_UPLOAD_BOX: true,

        NOTIFY_MYRA_DISABLED_UNTIL_SCREENSHOT: true,

        SECURITY_TEXT: "Your payment is completely secure",

        CUSTOMER_STEPS: [

            "Scan the QR code",

            "Complete your payment",

            "Upload payment screenshot",

            "Notify MYRA"

        ]

    },



    /* =====================================================
       MOBILE PAYMENT FLOW
    ===================================================== */

    MOBILE_PAYMENT_FLOW: {

        ENABLED: true,

        OPEN_PAYMENT_LINK: true,

        SHOW_SCREENSHOT_UPLOAD_AFTER_PAYMENT: true,

        NOTIFY_MYRA_DISABLED_UNTIL_SCREENSHOT: true

    },



    /* =====================================================
       WHATSAPP ORDER MESSAGE
    ===================================================== */

    WHATSAPP: {

        ENABLED: true,

        SELLER_NUMBER: "919836697502",

        OPEN_AFTER_PAYMENT_SCREENSHOT_UPLOAD: true,

        MESSAGE_TEMPLATE: [
            "Hi MYRA,",
            "",
            "I have placed an order and completed the payment.",
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
            "Please verify my payment and confirm my order."
        ]

    },



    /* =====================================================
       ORDER TOTAL RULES
    ===================================================== */

    TOTALS: {

        CURRENCY: "INR",

        SYMBOL: "₹",

        CALCULATE_SUBTOTAL: true,

        APPLY_PRODUCT_DISCOUNT: true,

        APPLY_SHIPPING: true,

        APPLY_REWARD: true,

        APPLY_COUPON: true,

        ROUND_TOTAL: true

    },



    /* =====================================================
       CANCELLATION
    ===================================================== */

    CANCELLATION: {

        ALLOW_BEFORE_PAYMENT: true,

        ALLOW_AFTER_PAYMENT: false,

        USE_CUSTOM_MODAL: true,

        TITLE: "Cancel Order?",

        MESSAGE:
            "This order can be cancelled only before payment is completed.",

        CONFIRM_BUTTON: "Cancel Order",

        BACK_BUTTON: "Keep Order"

    },



    /* =====================================================
       RETURN / PURCHASE PROTECTION
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
            "Returns are not accepted for change of mind or personal preference. If you receive a damaged or incorrect item, we'll help make it right.",

        RETURN_FOR_CHANGE_OF_MIND: false,

        RETURN_FOR_PERSONAL_PREFERENCE: false,

        DAMAGED_PRODUCT_SUPPORT: true,

        WRONG_ITEM_SUPPORT: true,

        MISSING_ITEM_SUPPORT: true

    },



    /* =====================================================
       ADMIN RULES
    ===================================================== */

    ADMIN: {

        CAN_UPDATE_ORDER_STATUS: true,

        CAN_UPDATE_PAYMENT_STATUS: true,

        CAN_VIEW_PAYMENT_SCREENSHOT: true,

        CAN_EDIT_ORDER_ID: false,

        CAN_DELETE_ORDER: false,

        CAN_ARCHIVE_ORDER: false,

        ORDERS_NEVER_DELETED: true

    },



    /* =====================================================
       CUSTOMER MESSAGES
    ===================================================== */

    MESSAGES: {

        ORDER_PLACED:
            "Your order has been placed successfully.",

        PAYMENT_PENDING:
            "Please complete your payment to start processing your order.",

        PAYMENT_UNDER_VERIFICATION:
            "MYRA will verify your payment shortly.",

        ORDER_CONFIRMED:
            "Your order has been confirmed.",

        ORDER_DELIVERED:
            "Your order has been delivered.",

        ORDER_CANCELLED:
            "Your order has been cancelled."

    }

});

window.ORDER_CONFIG = ORDER_CONFIG;
