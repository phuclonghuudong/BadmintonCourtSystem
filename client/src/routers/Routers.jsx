import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingAlert from "../components/ui/LoadingAlert";
import { localDataNames } from "../constants/appInfos";
import { addAuth, authSelector } from "../redux/reducers/AuthReducer";
import AuthRouter from "./AuthRouter";
import MainRouter from "./MainRouter";

const Routers = () => {
  const [isLoading, setIsLoading] = useState(false);

  const auth = useSelector(authSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = localStorage.getItem(localDataNames.authData);
    res && dispatch(addAuth(JSON.parse(res)));
  };

  return isLoading ? (
    <LoadingAlert />
  ) : !auth?.token ? (
    <AuthRouter />
  ) : (
    <MainRouter />
  );
};

export default Routers;
