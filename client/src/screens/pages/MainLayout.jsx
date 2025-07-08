import { Outlet } from "react-router-dom";
import HeaderComponent from "../../components/layouts/HeaderComponent";
import SiderBarComponent from "../../components/layouts/SiderBarComponent";

const MainLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-2/12 min-w-[200px] bg-white ">
        <SiderBarComponent />
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col h-full">
        <HeaderComponent />
        <div className="p-2 flex-1 overflow-y-auto bg-gray-50">
          <div className="bg-white rounded-lg shadow-sm p-4 h-full">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
