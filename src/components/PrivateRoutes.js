import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { AuthStateAtom } from "../recoil/atoms/AuthState";

const PrivateRoutes = () => {
  const navigate = useNavigate();
  const { token, role } = useRecoilValue(AuthStateAtom);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else if (role === "ADMIN") {
      navigate("/admin/dashboard");
    } else if (role === "SUPERADMIN") {
      navigate("/superadmin/dashboard");
    }
  }, [token, role, navigate]);

  if (!token) {
    return null;
  }

  return <Outlet />;
};

export default PrivateRoutes;
