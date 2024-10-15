import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { removeCookie } from "../api/cookie";
import { useResetRecoilState } from "recoil";
import { AuthStateAtom } from "../recoil/atoms/AuthState";
import { UserStateAtom } from "../recoil/atoms/UserState";

const NoLayout = () => {
  const { pathname } = useLocation();
  const resetAuthState = useResetRecoilState(AuthStateAtom);
  const resetUserState = useResetRecoilState(UserStateAtom);

  useEffect(() => {
    if (pathname === "/" || pathname === "/terms" || pathname === "/signup") {
      removeCookie("token");
      removeCookie("refreshToken");
      resetAuthState();
      resetUserState();
    }
  }, [pathname]);

  return <Outlet />;
};

export default NoLayout;
