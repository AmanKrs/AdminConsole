import React from "react";
import { useEffect, useState } from "react";

import { Navigate } from "react-router-dom";

export default function ProtectedLayout({ Chlidren }) {
  const [logged, setLogged] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      setLogged(false);
    }
  }, []);

  return <div>{logged ? <Chlidren /> : <Navigate to="/login" />}</div>;
}
