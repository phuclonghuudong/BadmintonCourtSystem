import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const account = useSelector((state) => state.userAccount.account);

  if (!account) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
