import React, { useEffect, useState } from "react";
import { Space, Typography, Card, Statistic, Table } from "antd";
import {
  DollarOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  getDashBoardOrders,
  getDashboardCustomers,
  getDashboardInventory,
  getDashboardRevenue,
  getOrders,
  getRevenue,
} from "../../api";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getDashBoardOrders(setOrders);
    getDashboardRevenue(setRevenue);
    getDashboardInventory(setInventory);
    getDashboardCustomers(setCustomers);
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>대시보드</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={iconStyle("#BF8A30", "rgba(191,138,48,0.25)")}
            />
          }
          title={"일 주문"}
          value={orders}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={iconStyle("#6A1B1B", "rgba(106,27,27,0.25)")}
            />
          }
          title={"메뉴관리"}
          value={inventory}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={iconStyle("#009E73", "rgba(0,158,115,0.25)")}
            />
          }
          title={"일 방문"}
          value={customers}
        />
        <DashboardCard
          icon={
            <DollarOutlined
              style={iconStyle("#EB5757", "rgba(255,36,0,0.25)")}
            />
          }
          title={"일 매출"}
          value={revenue}
        />
      </Space>
      <Space>
        <RecentOrders />
        <DashboardChart />
      </Space>
    </Space>
  );
};

const iconStyle = (color, bgColor) => ({
  color,
  backgroundColor: bgColor,
  borderRadius: 10,
  fontSize: 24,
  padding: 8,
});

const DashboardCard = ({ icon, title, value }) => (
  <Card>
    <Space direction="horizontal">
      {icon}
      <Statistic title={title} value={value} />
    </Space>
  </Card>
);

const RecentOrders = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders(setDataSource);
    setLoading(false);
  }, []);

  return (
    <>
      <Typography.Text size={12} direction="vertical">
        최근 주문 내역
      </Typography.Text>
      <Table
        columns={[
          {
            title: <div style={{ textAlign: "center" }}>품명</div>,
            dataIndex: "title",
          },
          {
            title: <div style={{ textAlign: "center" }}>수량</div>,
            dataIndex: "quantity",
          },
          {
            title: <div style={{ textAlign: "center" }}>가격</div>,
            dataIndex: "total",
            render: (text) =>
              `${Math.floor(Number(text)).toLocaleString("ko-KR")}원`,
            align: "right",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      />
    </>
  );
};

const DashboardChart = () => {
  const [revenueData, setRevenueData] = useState({ labels: [], datasets: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getRevenue(setRevenueData);
    setLoading(false);
  }, []);

  const options = {
    plugins: {
      legend: { position: "bottom" },
      title: { display: true, text: "월별 수익" },
    },
    responsive: true,
    interaction: { mode: "index", intersect: false },
    scales: { x: { stacked: true }, y: { stacked: true } },
  };

  return (
    <Card style={{ width: 500, height: 250 }}>
      <Bar options={options} data={revenueData} />
    </Card>
  );
};

export default Dashboard;
