import Login from "./Pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProtectedLayout from "./Component/ProtectedLayout";
import Layout from "./Component/Layout/Layout";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedLayout />}>
            <Route path="/" element={<Layout />}>
              <Route path="/home" element={<Home />} />
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
