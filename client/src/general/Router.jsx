import { Route, Routes } from "react-router-dom";
import Login from "../pages/account/Login";
import Register from "../pages/account/Register";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import { Home } from "../pages/home/Home";
import CategoryProduct from "../pages/manage/CategoryProduct.jsx";
import Court from "../pages/manage/Court.jsx";
import Customer from "../pages/manage/Customer.jsx";
import Product from "../pages/manage/Product.jsx";
import TypeCourt from "../pages/manage/TypeCourt.jsx";
import { Layout } from "./Layout.jsx";
import { NotFound } from "./NotFound.jsx";
import { RoutePaths } from "./RoutePaths.jsx";

export const Router = () => (
  <Routes>
    <Route
      path={RoutePaths.HOME}
      element={
        <Layout>
          <Home />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.DASHBOARD}
      element={
        <Layout>
          <Dashboard />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.CUSTOMER}
      element={
        <Layout>
          <Customer />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.MANAGE_CATEGORY_PRODUCT}
      element={
        <Layout>
          <CategoryProduct />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.MANAGE_PRODUCT}
      element={
        <Layout>
          <Product />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.MANAGE_TYPE_COURT}
      element={
        <Layout>
          <TypeCourt />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.MANAGE_COURT}
      element={
        <Layout>
          <Court />
        </Layout>
      }
    />
    <Route path={RoutePaths.LOGIN} element={<Login />} />
    <Route path={RoutePaths.REGISTER} element={<Register />} />
    <Route path={RoutePaths.NOT_FOUND} element={<NotFound />} />
  </Routes>
);
