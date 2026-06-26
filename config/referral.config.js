/*
=========================================================
MYRA REFERRAL CONFIG
File : /config/referral.config.js
Purpose :
Referral code rules, referral link rules,
signup auto-fill behaviour, reward eligibility,
duplicate prevention and referral messages.

No UI Logic
No Business Functions
No API Calls
=========================================================
*/

const REFERRAL_CONFIG = Object.freeze({

    ENABLED: true,

    /* =====================================================
       REFERRAL CODE
    ===================================================== */

    CODE: {

        PREFIX: "MYRA",

        DIGITS: 6,

        EXAMPLE: "MYRA543210",

        AUTO_GENERATE_ON_SIGNUP: true,

        UNIQUE: true,

        PERMANENT: true,

        NEVER_EDIT: true,

        NEVER_REUSE: true

    },



    /* =====================================================
       REFERRAL LINK
    ===================================================== */

    LINK: {

        PARAM_NAME: "ref",

        BASE_URL: "https://myragifts.github.io/myra-app/",

        EXAMPLE:
            "https://myragifts.github.io/myra-app/?ref=MYRA543210",

        WORKS_ON_DESKTOP: true,

        WORKS_ON_LAPTOP: true,

        WORKS_ON_TABLET: true,

        WORKS_ON_MOBILE: true,

        WORKS_ON_PWA: true,

        WORKS_ON_FUTURE_TWA: true

    },



    /* =====================================================
       SIGNUP AUTO-FILL RULE
    ===================================================== */

    SIGNUP_AUTO_FILL: {

        READ_FROM_URL: true,

        AUTO_FILL_REFERRAL_FIELD: true,

        MAKE_FIELD_READ_ONLY_WHEN_FROM_LINK: true,

        ALLOW_MANUAL_ENTRY_WHEN_NO_LINK: true,

        CLEAR_TEMP_REFERRAL_AFTER_SIGNUP: true

    },



    /* =====================================================
       VALIDATION RULES
    ===================================================== */

    VALIDATION: {

        OPTIONAL: true,

        CHECK_CODE_EXISTS_BEFORE_SAVE: true,

        IGNORE_INVALID_CODE_SILENTLY: true,

        SHOW_ERROR_FOR_INVALID_CODE: false,

        CANNOT_REFER_SELF: true,

        EXISTING_USER_REFERRAL_IGNORED: true,

        REFERRAL_APPLIES_ONLY_ON_NEW_ACCOUNT: true,

        CANNOT_CHANGE_AFTER_SIGNUP: true

    },



    /* =====================================================
       STORAGE RULES
    ===================================================== */

    STORAGE: {

        TEMP_REFERRAL_KEY: "myra_temp_referral_code",

        TEMP_REFERRAL_SOURCE_KEY: "myra_temp_referral_source",

        SOURCE_URL: "url",

        SOURCE_MANUAL: "manual",

        STORE_TEMP_REFERRAL_LOCALLY: true,

        STORE_FINAL_REFERRAL_IN_SUPABASE: true

    },



    /* =====================================================
       DATABASE MAPPING
    ===================================================== */

    DATABASE: {

        USERS_TABLE: "users",

        REFERRAL_CODE_COLUMN: "referral_code",

        REFERRED_BY_COLUMN: "referred_by",

        CUSTOMER_ID_COLUMN: "customer_id",

        PHONE_COLUMN: "phone",

        REFERRALS_TABLE: "referrals",

        REWARDS_TABLE: "rewards"

    },



    /* =====================================================
       REWARD RULE
    ===================================================== */

    REWARD: {

        ENABLED: true,

        AMOUNT: 25,

        CURRENCY: "INR",

        SYMBOL: "₹",

        CREDIT_AFTER_FIRST_ORDER: true,

        FIRST_ORDER_MINIMUM_VALUE: 499,

        CREDIT_AFTER_ORDER_STATUS: "Delivered",

        CREDIT_ONLY_ONCE_PER_REFERRED_CUSTOMER: true,

        CREDIT_TO_REFERRER: true,

        CREDIT_TO_NEW_CUSTOMER: false,

        MANUAL_ADMIN_APPROVAL_REQUIRED: false

    },



    /* =====================================================
       REFERRAL STATUS
    ===================================================== */

    STATUS: {

        PENDING: "Pending",

        QUALIFIED: "Qualified",

        REWARDED: "Rewarded",

        CANCELLED: "Cancelled",

        INVALID: "Invalid"

    },



    /* =====================================================
       CUSTOMER TEXT
    ===================================================== */

    TEXT: {

        REFERRAL_FIELD_LABEL: "Referral Code",

        REFERRAL_FIELD_PLACEHOLDER: "Referral Code Optional",

        INVITE_TITLE: "Invite Friends",

        INVITE_SUBTITLE:
            "Share MYRA with someone special and earn rewards.",

        SHARE_BUTTON: "Share Referral Link",

        COPY_BUTTON: "Copy Referral Link",

        COPIED_MESSAGE: "Referral link copied.",

        AUTO_FILLED_MESSAGE:
            "Referral code added from your invite link.",

        REWARD_MESSAGE:
            "Earn ₹25 when your friend places their first delivered order above ₹499."

    },



    /* =====================================================
       ADMIN RULES
    ===================================================== */

    ADMIN: {

        SHOW_REFERRAL_LIST: true,

        SHOW_REWARD_STATUS: true,

        ALLOW_MANUAL_REWARD_ADJUSTMENT: true,

        ALLOW_REFERRAL_CODE_EDIT: false,

        ALLOW_DELETE_REFERRAL_RECORD: false

    }

});

window.REFERRAL_CONFIG = REFERRAL_CONFIG;
