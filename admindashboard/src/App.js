import Header from "./Component/Header/Header";
import Sidenav from "./Component/Sidenav/Sidenav";
import Content from "./Component/Content/Content";
import Login from "./Pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProtectedLayout from "./Component/ProtectedLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedLayout Chlidren={Header} />} />
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
