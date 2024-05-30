import {
  AppstoreOutlined,
  LineChartOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons/lib";
import { Menu } from "antd/es";
import React from "react";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        onClick={(item) => {
          navigate(item.key);
        }}
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
