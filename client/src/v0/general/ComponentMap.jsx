import Login from "../pages/account/Login";
import Register from "../pages/account/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import { Home } from "../pages/home/Home";
import CategoryProduct from "../pages/manage/CategoryProduct";
import Court from "../pages/manage/Court";
import Customer from "../pages/manage/Customer";
import FunctionalCategory from "../pages/manage/FunctionalCategory";
import GroupPermission from "../pages/manage/GroupPermission";
import Product from "../pages/manage/Product";
import TypeCourt from "../pages/manage/TypeCourt";
import { NotFound } from "./NotFound";

export const ComponentMap = {
  HOME: Home,
  DASHBOARD: Dashboard,
  CUSTOMER: Customer,
  MANAGE_CATEGORY_PRODUCT: CategoryProduct,
  MANAGE_PRODUCT: Product,
  MANAGE_TYPE_COURT: TypeCourt,
  MANAGE_COURT: Court,
  MANAGE_GROUP_PERMISSIONS: GroupPermission,
  MANAGE_FUNCTIONAL_CATEGORY: FunctionalCategory,
  CONFIGURATION: () => <div>Cấu hình đang được phát triển...</div>,
  LOGIN: Login,
  REGISTER: Register,
  NOT_FOUND: NotFound,
};
