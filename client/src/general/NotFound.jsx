import { useNavigate } from "react-router-dom";
import { RoutePaths } from "./RoutePaths.jsx";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col items-center">
        <h3 className="px-3 py-2 text-lg text-base font-medium">
          Page not found.
        </h3>
        <button onClick={() => navigate(RoutePaths.HOME)} type="button">
          Go Home
        </button>
        <div className="w-50 h-50 bg-[url('./assets/notfound.webp')] bg-cover bg-center bg-no-repeat "></div>
      </div>
    </div>
  );
};
