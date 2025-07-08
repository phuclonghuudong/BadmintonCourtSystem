module.exports = Object.freeze({
  API: "/api",
  VERSION: "/v1",

  ACCOUNT: {
    BASE: "/account",
    LOGIN: "/login",
    SIGNUP: "/signup",
    VERIFY_EMAIL: "/verify-email",
    OTP_VERIFICATION: "/verify-otp",
    RESET_PASSWORD: "/reset-password",
    REFRESH_TOKEN: "/refresh-token",
  },

  NHAN_VIEN: {
    BASE: "/nhan-vien",
    LIST: "/list",
    DETAIL: "/:id",
    CREATE: "/create",
    UPDATE: "/update/:id",
    DELETE: "/delete/:id",
  },

  TAI_KHOAN: {
    BASE: "/tai-khoan",
    LIST: "/list",
    DETAIL: "/:id",
    CREATE: "/create",
    UPDATE: "/update/:id",
    DELETE: "/delete/:id",
  },

  KHACH_HANG: {
    BASE: "/khach-hang",
    LIST: "/list",
    DETAIL: "/:id",
    CREATE: "/create",
    UPDATE: "/update/:id",
    DELETE: "/delete/:id",
  },

  NHOM_QUYEN: {
    BASE: "/nhom-quyen",
    LIST: "/list",
    DETAIL: "/:id",
    CREATE: "/create",
    UPDATE: "/update/:id",
    DELETE: "/delete/:id",
  },

  CHUC_NANG: {
    BASE: "/chuc-nang",
    LIST: "/list",
    DETAIL: "/:id",
    CREATE: "/create",
    UPDATE: "/update/:id",
    DELETE: "/delete/:id",
  },

  LOAI_SAN: {
    BASE: "/loai-san",
    LIST: "/list",
    DETAIL: "/:id",
    CREATE: "/create",
    UPDATE: "/update/:id",
    DELETE: "/delete/:id",
  },

  LOAI_SAN_PHAM: {
    BASE: "/loai-san-pham",
    LIST: "/list",
    DETAIL: "/:id",
    CREATE: "/create",
    UPDATE: "/update/:id",
    DELETE: "/delete/:id",
  },

  SAN: {
    BASE: "/san",
    LIST: "/list",
    DETAIL: "/:id",
    CREATE: "/create",
    UPDATE: "/update/:id",
    DELETE: "/delete/:id",
  },

  SAN_PHAM: {
    BASE: "/san-pham",
    LIST: "/list",
    DETAIL: "/:id",
    CREATE: "/create",
    UPDATE: "/update/:id",
    DELETE: "/delete/:id",
  },
});
