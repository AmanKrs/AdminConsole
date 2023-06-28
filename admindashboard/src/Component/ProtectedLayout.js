import React from "react";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
export default function ProtectedLayout() {
  const [logged, setLogged] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      setLogged(false);
    }
  }, []);

  return <div>{logged ? <Outlet /> : <Navigate to="/login" />}</div>;
}
