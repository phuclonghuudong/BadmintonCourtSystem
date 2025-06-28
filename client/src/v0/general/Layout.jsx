import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import IconTaskbar from "../components/layouts/IconTaskbar.jsx";
import MenuTaskbar from "../components/layouts/MenuTaskbar";
import { ErrorFallback } from "../components/ui/ErrorFallback.jsx";

export const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClickMenu = () => {};
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="flex h-screen ">
        {showMenu ? (
          <div className="w-1/24 lg:block hidden">
            <IconTaskbar />
          </div>
        ) : (
          <div className="w-1/6 lg:block hidden">
            <MenuTaskbar />
          </div>
        )}

        <div className="flex-1 flex flex-col overflow-hidden">
          <Header onClickMenu={() => setShowMenu((pre) => !pre)} />
          <main className="flex-1 bg-indigo-50 overflow-auto">{children}</main>
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  );
};
