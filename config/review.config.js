/*
=========================================================
MYRA REVIEW CONFIG
File : /config/review.config.js
Purpose :
Customer review rules, admin showcase reviews,
verified purchase logic, review display,
rating rules and review image rules.

No UI Logic
No Business Functions
No API Calls
=========================================================
*/

const REVIEW_CONFIG = Object.freeze({

    ENABLED: true,

    /* =====================================================
       CUSTOMER REVIEWS
    ===================================================== */

    CUSTOMER_REVIEW: {

        ENABLED: true,

        REQUIRE_LOGIN: true,

        ONLY_PURCHASED_CUSTOMERS: true,

        ONLY_AFTER_DELIVERED: true,

        ORDER_STATUS_REQUIRED: "Delivered",

        ONE_REVIEW_PER_DELIVERED_ORDER: true,

        ALLOW_EDIT_OWN_REVIEW: true,

        ALLOW_DELETE_OWN_REVIEW: false,

        USERS_WHO_NEVER_BOUGHT_CANNOT_REVIEW: true

    },



    /* =====================================================
       ADMIN REVIEWS
    ===================================================== */

    ADMIN_REVIEW: {

        ENABLED: true,

        PURPOSE: "Showcase Review",

        ADMIN_CAN_WRITE_REVIEW: true,

        ADMIN_CAN_USE_DIFFERENT_NAME: true,

        ADMIN_CAN_SET_RATING: true,

        ADMIN_CAN_SET_REVIEW_DATE: true,

        ADMIN_CAN_ADD_REVIEW_IMAGE: true,

        ADMIN_CAN_MARK_VERIFIED_PURCHASE: false,

        DEFAULT_LABEL: "Customer Review"

    },



    /* =====================================================
       VERIFIED PURCHASE
    ===================================================== */

    VERIFIED_PURCHASE: {

        ENABLED: true,

        ONLY_REAL_DELIVERED_ORDER: true,

        LABEL: "Verified Purchase",

        ADMIN_FAKE_REVIEW_CAN_USE_VERIFIED_BADGE: false

    },



    /* =====================================================
       RATING
    ===================================================== */

    RATING: {

        MIN: 1,

        MAX: 5,

        DEFAULT: 5,

        ALLOW_HALF_RATING: false,

        SHOW_AVERAGE_RATING: true,

        SHOW_TOTAL_REVIEW_COUNT: true

    },



    /* =====================================================
       REVIEW CONTENT
    ===================================================== */

    CONTENT: {

        REVIEW_TITLE_ENABLED: true,

        REVIEW_TITLE_OPTIONAL: true,

        REVIEW_TEXT_REQUIRED: true,

        MIN_TEXT_LENGTH: 10,

        MAX_TEXT_LENGTH: 500,

        ALLOW_EMOJI: true,

        ALLOW_SPECIAL_CHARACTERS: true

    },



    /* =====================================================
       REVIEW IMAGES
    ===================================================== */

    IMAGES: {

        ENABLED: true,

        OPTIONAL: true,

        MAX_IMAGES: 5,

        ALLOWED_FORMATS: ["jpg", "jpeg", "png", "webp"],

        MAX_FILE_SIZE_MB: 5,

        CLOUDINARY_FOLDER: "MYRA/reviews"

    },



    /* =====================================================
       REVIEW STATUS
    ===================================================== */

    STATUS: {

        PUBLISHED: "Published",

        HIDDEN: "Hidden",

        PENDING: "Pending",

        REJECTED: "Rejected"

    },



    /* =====================================================
       DISPLAY RULES
    ===================================================== */

    DISPLAY: {

        SHOW_ON_PRODUCT_CARD: true,

        SHOW_ON_PRODUCT_POPUP: true,

        SHOW_ON_PRODUCT_DETAILS: true,

        SORT_DEFAULT: "newest_first",

        FEATURED_REVIEWS_FIRST: true,

        SHOW_REVIEWER_NAME: true,

        SHOW_REVIEW_DATE: true,

        SHOW_REVIEW_IMAGES: true,

        SHOW_VERIFIED_BADGE: true,

        SHOW_ADMIN_SHOWCASE_REVIEWS: true

    },



    /* =====================================================
       DATABASE
    ===================================================== */

    DATABASE: {

        TABLE: "reviews",

        PRODUCT_ID_COLUMN: "product_id",

        CUSTOMER_ID_COLUMN: "customer_id",

        ORDER_ID_COLUMN: "order_id",

        REVIEWER_NAME_COLUMN: "reviewer_name",

        RATING_COLUMN: "rating",

        TITLE_COLUMN: "title",

        TEXT_COLUMN: "review_text",

        IMAGES_COLUMN: "review_images",

        TYPE_COLUMN: "review_type",

        STATUS_COLUMN: "status",

        VERIFIED_COLUMN: "is_verified_purchase",

        CREATED_AT_COLUMN: "created_at",

        UPDATED_AT_COLUMN: "updated_at"

    },



    /* =====================================================
       REVIEW TYPES
    ===================================================== */

    TYPE: {

        CUSTOMER: "Customer",

        ADMIN_SHOWCASE: "Admin Showcase"

    },



    /* =====================================================
       MESSAGES
    ===================================================== */

    MESSAGES: {

        WRITE_REVIEW: "Write a Review",

        EDIT_REVIEW: "Edit Review",

        REVIEW_SUBMITTED: "Thank you for your review.",

        REVIEW_UPDATED: "Your review has been updated.",

        NOT_ELIGIBLE:
            "You can review this product after your order is delivered.",

        ALREADY_REVIEWED:
            "You have already reviewed this delivered order."

    }

});

window.REVIEW_CONFIG = REVIEW_CONFIG;
