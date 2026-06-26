/*
=========================================================
MYRA CLOUDINARY CONFIG
File : /config/cloudinary.config.js
Purpose :
Cloudinary image upload configuration.

No UI Logic
No Upload Functions
No API Calls
=========================================================
*/

const CLOUDINARY_CONFIG = Object.freeze({

    /* =====================================================
       CONNECTION
    ===================================================== */

    CLOUD_NAME: "duqn8ocxl",

    API_BASE_URL:
        "https://api.cloudinary.com/v1_1/duqn8ocxl/image/upload",

    UPLOAD_PRESET: "myra_unsigned",



    /* =====================================================
       SECURITY
    ===================================================== */

    UPLOAD_MODE: "unsigned",

    USE_SIGNED_UPLOAD: false,

    ALLOW_DIRECT_BROWSER_UPLOAD: true,



    /* =====================================================
       MAIN FOLDER
    ===================================================== */

    ROOT_FOLDER: "MYRA",



    /* =====================================================
       SUB FOLDERS
    ===================================================== */

    FOLDERS: {

        PRODUCTS: "MYRA/products",

        CATEGORIES: "MYRA/categories",

        BANNERS: "MYRA/banners",

        USERS: "MYRA/users",

        REVIEWS: "MYRA/reviews",

        PAYMENT_SCREENSHOTS: "MYRA/payment_screenshots",

        NOTIFICATIONS: "MYRA/notifications",

        MISC: "MYRA/misc"

    },



    /* =====================================================
       ALLOWED IMAGE TYPES
    ===================================================== */

    ALLOWED_FORMATS: [

        "jpg",

        "jpeg",

        "png",

        "webp"

    ],



    /* =====================================================
       FILE SIZE
    ===================================================== */

    MAX_FILE_SIZE_MB: 5,



    /* =====================================================
       PRODUCT IMAGES
    ===================================================== */

    PRODUCT_IMAGES: {

        MIN_IMAGES: 1,

        MAX_IMAGES: 8,

        COMPRESS_BEFORE_UPLOAD: true

    },



    /* =====================================================
       REVIEW IMAGES
    ===================================================== */

    REVIEW_IMAGES: {

        MAX_IMAGES: 5

    },



    /* =====================================================
       PROFILE IMAGES
    ===================================================== */

    PROFILE_IMAGES: {

        MAX_IMAGES: 1

    },



    /* =====================================================
       PAYMENT SCREENSHOT
    ===================================================== */

    PAYMENT_SCREENSHOT: {

        REQUIRED: true,

        MAX_IMAGES: 1

    },



    /* =====================================================
       IMAGE QUALITY
    ===================================================== */

    IMAGE: {

        FORMAT: "auto",

        QUALITY: "auto",

        CROP: "limit"

    },



    /* =====================================================
       ERROR MESSAGE
    ===================================================== */

    ERROR_MESSAGE: {

        INVALID_FORMAT:
            "Please upload JPG PNG JPEG or WEBP image.",

        FILE_TOO_LARGE:
            "Maximum image size is 5 MB."

    }

});

window.CLOUDINARY_CONFIG = CLOUDINARY_CONFIG;
