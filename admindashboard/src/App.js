import Login from "./Pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProtectedLayout from "./Component/ProtectedLayout";
import Layout from "./Component/Layout/Layout";
import Home from "./Pages/Home/Home";
import NewProduct from "./Pages/ProductApp/CreateProduct/NewProduct";
import ProductList from "./Pages/ProductApp/ProductList/ProductList";
import EditProduct from "./Pages/ProductApp/EditProduct/EditProduct";
import OrderList from "./Pages/OrderList/OrderList";
import OrderSummary from "./Pages/OrderSummary/OrderSummary";
import Logout from "./Pages/Logout/Logout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedLayout />}>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/orderlist" element={<OrderList />} />
              <Route path="/addproduct" element={<NewProduct />} />
              <Route path="/productlist" element={<ProductList />} />
              <Route path="/edit-product" element={<EditProduct />} />
              <Route path="/order-summary" element={<OrderSummary />} />
            </Route>
          </Route>
          <Route path="/register" element={<Logout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
