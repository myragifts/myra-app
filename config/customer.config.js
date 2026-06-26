/*
=========================================================
MYRA CUSTOMER CONFIG
File : /config/customer.config.js
Purpose :
Customer identity, login/signup rules,
name and phone validation, recovery flow,
session behaviour and customer status.

No UI Logic
No Business Functions
No API Calls
=========================================================
*/

const CUSTOMER_CONFIG = Object.freeze({

    /* =====================================================
       CUSTOMER ID
    ===================================================== */

    CUSTOMER_ID: {

        PREFIX: "M",

        FORMAT: "M + registered mobile number",

        EXAMPLE: "M9836697502",

        AUTO_GENERATE_ON_SIGNUP: true,

        UNIQUE: true,

        PERMANENT: true,

        NEVER_EDIT: true,

        NEVER_REUSE: true

    },



    /* =====================================================
       LOGIN METHOD
    ===================================================== */

    LOGIN: {

        METHOD: "FULL_NAME_PHONE",

        USE_FULL_NAME: true,

        USE_PHONE: true,

        USE_EMAIL: false,

        USE_PASSWORD: false,

        USE_OTP: false,

        BUTTON_TEXT: "Sign In",

        USER_NOT_FOUND_MESSAGE: "New To MYRA? Please Create Your Account",

        SUCCESS_REDIRECT: "home.html"

    },



    /* =====================================================
       SIGNUP
    ===================================================== */

    SIGNUP: {

        ENABLED: true,

        TITLE: "Create Your MYRA Account",

        FIELDS: [

            "full_name",

            "phone",

            "referral_code"

        ],

        REFERRAL_OPTIONAL: true,

        BUTTON_TEXT: "Create Account",

        BACK_BUTTON_TEXT: "Back",

        EXISTING_PHONE_MESSAGE:
            "Phone Already Registered. Please Sign In.",

        SUCCESS_SHOW_WELCOME_MODAL: true,

        SUCCESS_REDIRECT: "home.html"

    },



    /* =====================================================
       NAME VALIDATION
    ===================================================== */

    NAME_VALIDATION: {

        MIN_WORDS: 2,

        MIN_LETTERS_PER_WORD: 2,

        ALLOW_LETTERS_A_TO_Z: true,

        ALLOW_SINGLE_SPACE: true,

        ALLOW_NUMBERS: false,

        ALLOW_SPECIAL_CHARACTERS: false,

        ALLOW_MULTIPLE_SPACES: false,

        AUTO_FORMAT_TITLE_CASE: true,

        EXAMPLES: {

            INPUT_1: "riya ghosh",

            OUTPUT_1: "Riya Ghosh",

            INPUT_2: "rahul SHARMA",

            OUTPUT_2: "Rahul Sharma"

        },

        MESSAGES: {

            EMPTY: "Please Enter Your Full Name",

            MIN_WORDS: "Please Enter First Name And Surname",

            MIN_LETTERS:
                "Each Name Must Have At Least 2 Letters",

            NUMBERS:
                "Name Cannot Contain Numbers",

            SPECIAL_CHARACTERS:
                "Name Cannot Contain Special Characters",

            MULTIPLE_SPACES:
                "Please Use Single Space Only"

        }

    },



    /* =====================================================
       PHONE VALIDATION
    ===================================================== */

    PHONE_VALIDATION: {

        COUNTRY_CODE: "91",

        REQUIRED_DIGITS: 10,

        STARTS_WITH: ["6", "7", "8", "9"],

        NUMERIC_KEYPAD: true,

        REJECT_NUMBERS: [

            "1234567890",

            "1111111111",

            "2222222222",

            "3333333333",

            "4444444444",

            "5555555555",

            "5555566666",

            "6666666666",

            "7777777777",

            "8888888888",

            "9999999999",

            "0000000000"

        ],

        MESSAGES: {

            EMPTY: "Please Enter Your Phone Number",

            DIGITS: "Phone Number Must Be 10 Digits",

            INVALID: "Enter Valid Phone Number"

        }

    },



    /* =====================================================
       SESSION
    ===================================================== */

    SESSION: {

        LOGIN_ONCE: true,

        STAY_LOGGED_IN_UNTIL_LOGOUT: true,

        AUTO_REDIRECT_IF_LOGGED_IN: true,

        REDIRECT_LOGGED_IN_TO: "home.html",

        REDIRECT_LOGGED_OUT_TO: "index.html",

        UPDATE_LAST_LOGIN_AT: true,

        STORE_LOCAL_FIELDS: [

            "user_id",

            "customer_id",

            "full_name",

            "phone",

            "login_time"

        ],

        DO_NOT_STORE_LOCALLY: [

            "reward_balance",

            "admin_data",

            "orders",

            "referral_code"

        ]

    },



    /* =====================================================
       RECOVERY
    ===================================================== */

    RECOVERY: {

        ENABLED: true,

        FORGOT_NAME: {

            ENABLED: true,

            TITLE: "Forgot Name",

            INPUT_LABEL: "Enter Phone Number",

            BUTTON_TEXT: "Find Name",

            BACK_BUTTON_TEXT: "Back",

            SEARCH_BY: "phone",

            SUCCESS_LABEL: "Registered Name",

            NOT_FOUND_MESSAGE:
                "No Account Found. Please Create Your Account."

        },

        FORGOT_PHONE: {

            ENABLED: true,

            TITLE: "Forgot Phone",

            INPUT_LABEL: "Enter Full Name",

            BUTTON_TEXT: "Find Phone",

            BACK_BUTTON_TEXT: "Back",

            SEARCH_BY: "full_name",

            MASK_PHONE_RESULT: true,

            SUCCESS_LABEL: "Registered Phone",

            MULTIPLE_MATCH_MESSAGE:
                "We found more than one account with this name. Please contact MYRA support.",

            NOT_FOUND_MESSAGE:
                "No Account Found. Please Create Your Account."

        },

        FORGOT_PASSWORD: {

            ENABLED: false,

            REASON: "MYRA does not use password login."

        }

    },



    /* =====================================================
       CUSTOMER STATUS
    ===================================================== */

    STATUS: {

        ACTIVE: "Active",

        INACTIVE: "Inactive",

        BLOCKED: "Blocked"

    },



    /* =====================================================
       PROFILE
    ===================================================== */

    PROFILE: {

        CAN_EDIT_NAME: false,

        CAN_EDIT_PHONE: false,

        CAN_EDIT_PROFILE_IMAGE: true,

        SHOW_CUSTOMER_ID: true,

        SHOW_REFERRAL_CODE: true,

        SHOW_REWARD_BALANCE: true,

        SHOW_ORDER_HISTORY: true,

        SHOW_FAVOURITES: true

    },



    /* =====================================================
       WELCOME MODAL
    ===================================================== */

    WELCOME: {

        SHOW_ONLY_ONCE: true,

        TITLE: "MYRA",

        TAGLINE: "A Shopping Love Story",

        MESSAGE_PREFIX: "Welcome",

        BUTTON_TEXT: "Begin Your Journey",

        AUTO_REDIRECT_SECONDS: 3,

        REDIRECT_TO: "home.html"

    },



    /* =====================================================
       LOGOUT
    ===================================================== */

    LOGOUT: {

        USE_CUSTOM_MODAL: true,

        TITLE: "Logout From MYRA?",

        STAY_BUTTON: "Stay",

        LOGOUT_BUTTON: "Logout",

        CLEAR_LOCAL_SESSION: true,

        REDIRECT_TO: "index.html",

        USE_BROWSER_CONFIRM: false

    }

});

window.CUSTOMER_CONFIG = CUSTOMER_CONFIG;
