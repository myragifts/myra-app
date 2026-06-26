/*
=========================================================
MYRA PRODUCT CONFIG
File : /config/product.config.js
Purpose :
Product identity, product status, image limits,
stock behaviour, visibility rules, product card rules,
product popup rules and purchase protection display.

No UI Logic
No Business Functions
No API Calls
=========================================================
*/

const PRODUCT_CONFIG = Object.freeze({

    /* =====================================================
       PRODUCT ID
    ===================================================== */

    PRODUCT_ID: {

        PREFIX: "MY",

        START: "MY000001",

        END: "MY999999",

        DIGITS: 6,

        EXAMPLE: "MY000001",

        AUTO_GENERATE: true,

        GENERATE_BY_NEXT_SERIAL: true,

        BASED_ON_HIGHEST_EXISTING_ID: true,

        LIFETIME_LOCK: true,

        NEVER_REUSE: true,

        NEVER_EDIT: true,

        NEVER_REGENERATE: true,

        DELETED_ID_NEVER_USED_AGAIN: true,

        ARCHIVED_ID_REMAINS_RESERVED: true,

        ADMIN_CAN_EDIT: false,

        ADMIN_CAN_ASSIGN_MANUALLY: false,

        SHOW_TO_CUSTOMER: true

    },



    /* =====================================================
       PRODUCT STATUS
    ===================================================== */

    STATUS: {

        DRAFT: "Draft",

        ACTIVE: "Active",

        OUT_OF_STOCK: "Out of Stock",

        ARCHIVED: "Archived"

    },



    /* =====================================================
       VISIBILITY RULES
    ===================================================== */

    VISIBILITY: {

        SHOW_DRAFT_TO_CUSTOMER: false,

        SHOW_ACTIVE_TO_CUSTOMER: true,

        SHOW_OUT_OF_STOCK_TO_CUSTOMER: true,

        SHOW_ARCHIVED_TO_CUSTOMER: false,

        OUT_OF_STOCK_PRODUCT_REMAINS_VISIBLE: true,

        OUT_OF_STOCK_PRODUCT_POPUP_OPENS: true,

        OUT_OF_STOCK_CAN_BE_FAVOURITE: true,

        OUT_OF_STOCK_CAN_BE_SHARED: true

    },



    /* =====================================================
       DELETE POLICY
    ===================================================== */

    DELETE_POLICY: {

        HARD_DELETE_PRODUCT: false,

        ARCHIVE_INSTEAD_OF_DELETE: true,

        KEEP_PRODUCT_HISTORY: true,

        KEEP_PRODUCT_ID_RESERVED: true,

        KEEP_REVIEWS: true,

        KEEP_ORDER_HISTORY: true

    },



    /* =====================================================
       PRODUCT IMAGES
    ===================================================== */

    IMAGES: {

        MIN_IMAGES: 1,

        MAX_IMAGES: 8,

        REQUIRED_PRIMARY_IMAGE: true,

        ALLOWED_FORMATS: ["jpg", "jpeg", "png", "webp"],

        MAX_FILE_SIZE_MB: 5,

        CLOUDINARY_FOLDER: "MYRA/products",

        SHOW_GALLERY: true,

        ENABLE_IMAGE_SLIDER: true,

        ENABLE_THUMBNAILS: true,

        DEFAULT_IMAGE:
            "https://res.cloudinary.com/duqn8ocxl/image/upload/v1/MYRA/misc/product-placeholder.webp"

    },



    /* =====================================================
       PRODUCT CARD DISPLAY
    ===================================================== */

    CARD: {

        SHOW_PRODUCT_IMAGE: true,

        SHOW_PRODUCT_ID: true,

        SHOW_PRODUCT_NAME: true,

        SHOW_FINAL_PRICE: true,

        SHOW_SHORT_DESCRIPTION: true,

        SHOW_MRP: false,

        SHOW_DISCOUNT_PERCENT: false,

        SHOW_RATING: true,

        SHOW_LIVE_ACTIVITY: true,

        SHOW_BADGE: true,

        CLICK_OPENS_PRODUCT_POPUP: true

    },



    /* =====================================================
       PRODUCT POPUP DISPLAY
    ===================================================== */

    POPUP: {

        ENABLED: true,

        SHOW_IMAGE_GALLERY: true,

        SHOW_PRODUCT_ID: true,

        SHOW_PRODUCT_NAME: true,

        SHOW_FINAL_PRICE: true,

        SHOW_MRP: true,

        SHOW_DISCOUNT: true,

        SHOW_RATING: true,

        SHOW_LIVE_ACTIVITY: true,

        SHOW_LONG_DESCRIPTION: true,

        SHOW_LONG_DESCRIPTION_HEADING: false,

        SHOW_SHORT_DESCRIPTION: false,

        SHOW_PURCHASE_PROTECTION: true,

        SHOW_REVIEWS: true,

        SHOW_RELATED_PRODUCTS: true,

        CLOSE_BUTTON_TEXT: "X",

        CLOSE_BUTTON_POSITION: "top-left",

        GALLERY_ARROW_POSITION: "extreme-edges"

    },



    /* =====================================================
       PRICE
    ===================================================== */

    PRICE: {

        CURRENCY: "INR",

        SYMBOL: "₹",

        SHOW_FINAL_PRICE: true,

        SHOW_MRP_WHEN_AVAILABLE: true,

        SHOW_DISCOUNT_WHEN_AVAILABLE: true,

        ALLOW_ZERO_PRICE: false,

        MIN_PRICE: 1

    },



    /* =====================================================
       STOCK
    ===================================================== */

    STOCK: {

        ENABLE_STOCK: true,

        CHECK_STOCK_BEFORE_ADD_TO_CART: true,

        CHECK_STOCK_BEFORE_PLACE_ORDER: true,

        CART_DOES_NOT_RESERVE_STOCK: true,

        FIRST_PLACE_ORDER_GETS_STOCK: true,

        NO_BACKORDER_IN_V1: true,

        WHEN_STOCK_ZERO_STATUS: "Out of Stock",

        IN_STOCK_LABEL: "In Stock",

        OUT_OF_STOCK_LABEL: "Out of Stock"

    },



    /* =====================================================
       OUT OF STOCK BUTTON
    ===================================================== */

    OUT_OF_STOCK_ACTION: {

        REPLACE_ADD_TO_CART_WITH: "Check Availability",

        DISABLE_ADD_TO_CART: true,

        ENABLE_CHECK_AVAILABILITY: true,

        AFTER_REQUEST_TEXT: "✓ Availability Requested",

        PREVENT_DUPLICATE_REQUEST: true,

        SAVE_REQUEST_IN_SUPABASE_BEFORE_WHATSAPP: true,

        SHOW_CONNECTING_MESSAGE: true,

        CONNECTING_MESSAGE: "Connecting you with MYRA...",

        WHATSAPP_MESSAGE_TEMPLATE: [
            "Hi MYRA,",
            "",
            "I loved this product and would like to purchase it.",
            "",
            "Product ID:",
            "{{product_id}}",
            "",
            "Product Name:",
            "{{product_name}}",
            "",
            "Customer:",
            "{{customer_name}}",
            "",
            "Customer ID:",
            "{{customer_id}}",
            "",
            "Please let me know when it becomes available.",
            "",
            "Thank you."
        ]

    },



    /* =====================================================
       JUST OUT OF STOCK MODAL
    ===================================================== */

    JUST_OUT_OF_STOCK_MODAL: {

        ENABLED: true,

        TITLE: "Sorry!",

        MESSAGE:
            "This product has just gone out of stock.",

        SUB_MESSAGE:
            "Request availability and we’ll notify you when it’s back.",

        PRIMARY_BUTTON: "Check Availability",

        SECONDARY_BUTTON: "Continue Shopping",

        USE_BROWSER_ALERT: false

    },



    /* =====================================================
       PURCHASE PROTECTION
    ===================================================== */

    PURCHASE_PROTECTION: {

        SHOW_ON_PRODUCT_CARD: false,

        SHOW_ON_PRODUCT_POPUP: true,

        SHOW_ON_PRODUCT_DETAILS: true,

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
       OPTIONS / VARIANTS
    ===================================================== */

    OPTIONS: {

        ENABLE_PRODUCT_OPTIONS: true,

        SUPPORT_SIZE: true,

        SUPPORT_COLOR: true,

        SUPPORT_WEIGHT: true,

        SUPPORT_MATERIAL: true,

        SUPPORT_CUSTOM_OPTION_GROUPS: true,

        REQUIRED_OPTION_SELECTION: true,

        AUTO_SELECT_SINGLE_OPTION: true,

        PREVENT_BROWSER_TEXT_SELECTION_ON_OPTION_TAP: true

    },



    /* =====================================================
       QUANTITY
    ===================================================== */

    QUANTITY: {

        MIN: 1,

        MAX_PER_PRODUCT: 20,

        DEFAULT: 1,

        SHOW_NEAR_PRICE: true,

        USE_HIGHLIGHTED_CONTAINER: true,

        REQUIRED_BEFORE_ADD_TO_CART: true

    },



    /* =====================================================
       SEARCH AND FILTER
    ===================================================== */

    SEARCH: {

        SEARCH_BY_PRODUCT_ID: true,

        SEARCH_BY_PRODUCT_NAME: true,

        SEARCH_BY_CATEGORY: true,

        SEARCH_BY_DESCRIPTION: true,

        INITIAL_LIMIT: 24,

        LOAD_MORE_LIMIT: 24

    },



    /* =====================================================
       CATEGORY
    ===================================================== */

    CATEGORY: {

        REQUIRED: true,

        SHOW_CATEGORY_ON_CARD: false,

        SHOW_CATEGORY_ON_POPUP: true,

        DEFAULT_CATEGORY: "General"

    },



    /* =====================================================
       CUSTOMER ACTIONS
    ===================================================== */

    CUSTOMER_ACTIONS: {

        ADD_TO_CART: true,

        ADD_TO_FAVOURITES: true,

        SHARE_PRODUCT: true,

        CHECK_AVAILABILITY: true,

        REVIEW_AFTER_DELIVERY: true

    }

});

window.PRODUCT_CONFIG = PRODUCT_CONFIG;
