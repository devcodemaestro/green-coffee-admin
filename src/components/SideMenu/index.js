import {
  AppstoreOutlined,
  LineChartOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Menu, message } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { AuthStateAtom } from "../../recoil/atoms/AuthState";
import { postLogout } from "../../api/admin";
import Sider from "antd/es/layout/Sider";

const SideMenu = () => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState(`/`);
  const navigate = useNavigate();
  const [authState, setAuthState] = useRecoilState(AuthStateAtom);
  const { role } = authState;

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const getRoleBasedItems = () => {
    const basePath = role === "ADMIN" ? "/admin" : "/superadmin";
    return [
      {
        label: "대시보드",
        icon: <AppstoreOutlined />,
        key: `${basePath}/dashboard`,
      },
      {
        label: "메뉴관리",
        icon: <ShopOutlined />,
        key: `${basePath}/inventory`,
      },
      {
        label: "주문관리",
        icon: <ShoppingCartOutlined />,
        key: `${basePath}/orders`,
      },
      // {
      //   label: "매장관리",
      //   icon: <UserOutlined />,
      //   key: `${basePath}/store`,
      // },
      {
        label: "통계자료",
        icon: <LineChartOutlined />,
        key: `${basePath}/statistics`,
      },
      {
        label: "로그아웃",
        icon: <LogoutOutlined />,
        key: "logout",
        onClick: handleLogout,
      },
    ];
  };

  const handleLogout = async () => {
    try {
      const response = await postLogout();
      if (response.result === 200) {
        setAuthState({
          loginstate: "N",
          token: "",
          role: "",
        });
        message.success("로그아웃되었습니다.");
        navigate("/");
      } else {
        message.error("로그아웃에 실패했습니다.");
      }
    } catch (error) {
      message.error("로그아웃 중 오류가 발생했습니다.");
      console.error("Logout error:", error);
    }
  };

  return (
    <Sider>
      <div className="SideMenu">
        <Menu
          theme="dark"
          className="SideMenuVertical"
          mode="vertical"
          onClick={(item) => {
            if (item.key !== "logout") {
              navigate(item.key);
            }
          }}
          selectedKeys={[selectedKeys]}
          items={getRoleBasedItems()}
        />
      </div>
    </Sider>
  );
};

export default SideMenu;
