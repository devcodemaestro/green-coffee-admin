import {
  DollarOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons/lib";
import { Card, Space, Statistic, Table, Typography } from "antd/es";
import { useEffect, useState } from "react";
import { getOrders, getRevenue } from "../../api";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>대시보드</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "#BF8A30",
                backgroundColor: "rgba(191,138,48,0.25)",
                borderRadius: 10,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"일 주문"}
          value={1234}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "#6A1B1B",
                backgroundColor: "rgba(106,27,27,0.25)",
                borderRadius: 10,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"메뉴관리"}
          value={1234}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "#009E73",
                backgroundColor: "rgba(0,158,115,0.25)",
                borderRadius: 10,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"일 방문"}
          value={1234}
        />
        <DashboardCard
          icon={
            <DollarOutlined
              style={{
                color: "#EB5757",
                backgroundColor: "rgba(255,36,0,0.25)",
                borderRadius: 10,
                fontSize: 20,
                padding: 8,
              }}
            />
          }
          title={"일 매출"}
          value={1234}
        />
      </Space>
      <Space>
        <RecentOrders />
        <DashboardChart />
      </Space>
    </Space>
  );
}
const DashboardCard = ({ icon, title, value }) => {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
};

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
      ></Table>
    </>
  );
};

function DashboardChart() {
  const [revenueData, setRevenueData] = useState({ labels: [], datasets: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getRevenue(setRevenueData);
    setLoading(false);
  }, []);

  const options = {
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "월별 수익",
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <Card style={{ width: 500, height: 250 }}>
      <Bar options={options} data={revenueData} />
    </Card>
  );
}

export default Dashboard;
