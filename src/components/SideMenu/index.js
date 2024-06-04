import {
  AppstoreOutlined,
  LineChartOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons/lib";
import { Menu } from "antd/es";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom/dist";

const SideMenu = () => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState(`/`);

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "대시보드",
            icon: <AppstoreOutlined />,
            key: "/",
          },
          {
            label: "메뉴관리",
            icon: <ShopOutlined />,
            key: "/inventory",
          },
          {
            label: "주문관리",
            icon: <ShoppingCartOutlined />,
            key: "/orders",
          },
          {
            label: "고객관리",
            icon: <UserOutlined />,
            key: "/customers",
          },
          {
            label: "통계자료",
            icon: <LineChartOutlined />,
            key: "/statistics",
          },
        ]}
      ></Menu>
    </div>
  );
};

export default SideMenu;
