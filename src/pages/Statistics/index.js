import { Card, Space, Typography } from "antd/es";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { getRevenue, getVertical } from "../../api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Statistics() {
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>통계자료</Typography.Title>
      <Space direction="horizontal">
        <RevenueChart />
        <RevenueChart />
      </Space>
      <Space direction="horizontal">
        <RevenueChart />
        <RevenueChart />
      </Space>
      <Space>
        <Card>
          <VerticalBarChart />
        </Card>
        <Card>
          <VerticalBarChart />
        </Card>
        <Card>
          <VerticalBarChart />
        </Card>
      </Space>
    </Space>
  );
  // }
  // const DashboardCard = ({ icon, title, value }) => {
  //   return (
  //     <Card>
  //       <Space direction="horizontal">
  //         {icon}
  //         <Statistic title={title} value={value} />
  //       </Space>
  //     </Card>
  //   );
}

// const RecentOrders = () => {
//   const [dataSource, setDataSource] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     getDashBoardOrders(setDataSource);
//     setLoading(false);
//   }, []);

//   return (
//     <>
//       <Typography.Text size={12} direction="vertical">
//         최근 주문 내역
//       </Typography.Text>
//       <Table
//         columns={[
//           {
//             title: <div style={{ textAlign: "center" }}>품명</div>,
//             dataIndex: "title",
//           },
//           {
//             title: <div style={{ textAlign: "center" }}>수량</div>,
//             dataIndex: "quantity",
//           },
//           {
//             title: <div style={{ textAlign: "center" }}>가격</div>,
//             dataIndex: "total",
//             render: (text) =>
//               `${Math.floor(Number(text)).toLocaleString("ko-KR")}원`,
//             align: "right",
//           },
//         ]}
//         loading={loading}
//         dataSource={dataSource}
//         pagination={false}
//       ></Table>
//     </>
//   );
// };

function RevenueChart() {
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

function VerticalBarChart() {
  const [verticalData, setVerticalData] = useState({
    labels: [],
    datasets: [],
  });
  const [loading, setLoading] = useState(false);

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ]; //x축 기준

  const data = {
    labels,
    datasets: [
      {
        label: "분류 1", //그래프 분류되는 항목
        data: [1, 2, 3, 4, 5, 6, 7], //실제 그려지는 데이터(Y축 숫자)
        borderColor: "rgb(255, 99, 132)", //그래프 선 color
        backgroundColor: "rgba(255, 99, 132, 0.5)", //마우스 호버시 나타나는 분류네모 표시 bg
      },
      {
        label: "분류 2",
        data: [2, 3, 4, 5, 4, 7, 8],
        borderColor: "rgb(53, 162, 235)", //실제 그려지는 데이터(Y축 숫자)
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  useEffect(() => {
    setLoading(true);
    getVertical(setVerticalData);
    setLoading(false);
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  return (
    <Card style={{ width: 500, height: 250 }}>
      <Bar options={options} data={verticalData} />
    </Card>
  );
}

export default Statistics;
