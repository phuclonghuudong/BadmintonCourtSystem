export const RoutePaths = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  CUSTOMER: "/manage/customer",
  MANAGE_CATEGORY_PRODUCT: "/manage/category-product",
  MANAGE_PRODUCT: "/manage/product",
  MANAGE_TYPE_COURT: "/manage/type-court",
  MANAGE_COURT: "/manage/court",
  CONFIGURATION: "/manage/configuration",
  LOGIN: "/login",
  REGISTER: "/register",
  NOT_FOUND: "*",
};

export const Routes = {
  HOME: {
    path: "/",
    label: "Trang chủ",
    layout: "AdminLayout",
    roles: ["user", "admin"],
    icon: "fa-solid fa-house",
  },
  DASHBOARD: {
    path: "/dashboard",
    label: "Thống kê",
    layout: "AdminLayout",
    roles: ["admin"],
    icon: "fa-solid fa-gauge",
  },
  CUSTOMER: {
    path: "/manage/customer",
    label: "Khách hàng",
    layout: "AdminLayout",
    roles: ["admin"],
    icon: "fa-solid fa-users",
  },
  MANAGE_CATEGORY_PRODUCT: {
    path: "/manage/category-product",
    label: "loại sản phẩm",
    layout: "AdminLayout",
    roles: ["admin"],
    icon: "fa-solid fa-list",
  },
  MANAGE_TYPE_COURT: {
    path: "/manage/type-court",
    label: "loại Sân",
    layout: "AdminLayout",
    roles: ["admin"],
    icon: "fa-solid fa-layer-group",
  },
  MANAGE_PRODUCT: {
    path: "/manage/product",
    label: "sản phẩm",
    layout: "AdminLayout",
    roles: ["admin"],
    icon: "fa-brands fa-product-hunt",
  },
  MANAGE_COURT: {
    path: "/manage/court",
    label: "sân",
    layout: "AdminLayout",
    roles: ["admin"],
    icon: "fa-solid fa-ticket",
  },
  CONFIGURATION: {
    path: "/manage/configuration",
    label: "Cài đặt",
    layout: "AdminLayout",
    roles: ["admin"],
    icon: "fa-solid fa-gear",
  },
  LOGIN: {
    path: "/login",
    label: "Đăng nhập",
    layout: "AuthLayout",
    roles: ["guest"],
    icon: "fa-solid fa-right-to-bracket",
  },
  REGISTER: {
    path: "/register",
    label: "Đăng ký",
    layout: "AuthLayout",
    roles: ["guest"],
    icon: "fa-solid fa-registered",
  },
  NOT_FOUND: {
    path: "*",
    label: "Không tìm thấy",
    layout: "UserLayout",
    roles: ["guest", "user", "admin"],
    icon: "fa-solid fa-ban",
  },
};
export const getRouteList = () =>
  Object.entries(Routes).map(([name, config]) => ({
    name,
    ...config,
  }));
