module.exports = Object.freeze({
  API: "/api",
  VERSION: "/v1",

  USER: {
    BASE: "/user",
    LOGIN: "/user/login",
    SIGNUP: "/user/signup",
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
