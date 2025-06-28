import { Routes as ReactRoutes, Route } from "react-router-dom";
import { ComponentMap } from "./ComponentMap";
import { Layout } from "./Layout";
import { PrivateRoute } from "./PrivateRoute";
import { Routes as AppRoutes } from "./RoutePaths";

const renderRouteElement = (layout, roles, Component) => {
  const element = <Component />;

  switch (layout) {
    case "AdminLayout":
      return (
        <PrivateRoute roles={roles}>
          <Layout>{element}</Layout>
        </PrivateRoute>
      );
    case "AuthLayout":
      return element;
    case "UserLayout":
      return (
        <PrivateRoute roles={roles}>
          <Layout>{element}</Layout>
        </PrivateRoute>
      );
    // return <Layout>{element}</Layout>;
    default:
      return element;
  }
};

export const Router = () => (
  <ReactRoutes>
    {Object.entries(AppRoutes).map(([key, route]) => {
      const Component = ComponentMap[key];
      if (!Component) return null;

      return (
        <Route
          key={key}
          path={route.path}
          element={renderRouteElement(route.layout, route.roles, Component)}
        />
      );
    })}
  </ReactRoutes>
);
