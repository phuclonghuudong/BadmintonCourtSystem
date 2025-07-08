import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "../screens/pages/Category";
import Customer from "../screens/pages/Customer";
import HomeScreen from "../screens/pages/HomeScreen";
import MainLayout from "../screens/pages/MainLayout";
import Personnel from "../screens/pages/Personnel";
import Product from "../screens/pages/Product";
import TypeOfYard from "../screens/pages/TypeOfYard";
import Yard from "../screens/pages/Yard";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeScreen />} />
          <Route path="/category" element={<Category />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/personnel" element={<Personnel />} />
          <Route path="/type" element={<TypeOfYard />} />
          <Route path="/yard" element={<Yard />} />
          <Route path="/product" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
