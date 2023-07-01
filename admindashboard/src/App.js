import Login from "./Pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProtectedLayout from "./Component/ProtectedLayout";
import Layout from "./Component/Layout/Layout";
import Home from "./Pages/Home/Home";
import NewProduct from "./Pages/ProductApp/CreateProduct/NewProduct";
import ProductList from "./Pages/ProductApp/ProductList/ProductList";
import EditProduct from "./Pages/ProductApp/EditProduct/EditProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedLayout />}>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/addproduct" element={<NewProduct />} />
              <Route path="/productlist" element={<ProductList />} />
              <Route path="/edit-product" element={<EditProduct />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      {/* {logged && (
        <>
          <div>
            <Header/>
            <Sidenav />
            <Content />
          </div>
        </>
      )}
      {!logged && (
        <>
          <div className="main">
            <Login/>
          </div>
        </>
      )} */}
    </>
  );
}

export default App;
