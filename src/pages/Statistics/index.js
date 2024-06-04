import { Card, Space, Typography } from "antd/es";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { getRevenue, getVertical } from "../../api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

function Statistics() {
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>통계자료</Typography.Title>
      <Space direction="horizontal">
        <VerticalChart />
        <LineChart />
      </Space>
      <Space direction="horizontal">
        <PieChart />
        <HorizontalChart />
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

function VerticalChart() {
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
        text: "매출, 방문자수",
        padding: 0,
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

function LineChart() {
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
        position: "bottom",
      },
      title: {
        display: true,
        text: "일일 매출 변화",
        padding: {
          top: 0,
        },
      },
    },
  };

  return (
    <Card style={{ width: 500, height: 250 }}>
      <Line options={options} data={verticalData} />
    </Card>
  );
}

function PieChart() {
  const [verticalData, setVerticalData] = useState({
    labels: [],
    datasets: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getVertical(setVerticalData);
    setLoading(false);
  }, []);

  const options = {
    // 비율유지 제외 옵션
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: false,
        text: "추천 수",
        position: "bottom",
        padding: {
          top: 120,
        },
      },
    },
  };

  const data = {
    labels: [
      "아메리카노",
      "레몬에이드",
      "텀블러",
      "카페라떼",
      "오렌지주스",
      "사과주스",
      "요쿠르트",
      "짜장면",
    ],
    datasets: [
      {
        label: "추천 수",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Card style={{ width: 500, height: 250 }}>
      <div style={{ width: 400, height: 200 }}>
        <Pie data={data} options={options} />
      </div>
    </Card>
  );
}

// 각 메뉴 아이템의 판매 수량을 비교하기 좋다
function HorizontalChart() {
  const [revenueData, setRevenueData] = useState({ labels: [], datasets: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getRevenue(setRevenueData);
    setLoading(false);
  }, []);
  console.log("revenueData", revenueData);
  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "판매실적",
        position: "top",
        padding: {
          top: 0,
          bottom: 10,
        },
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const dataset1 = [
    Math.random() * 1000,
    Math.random() * 1000,
    Math.random() * 1000,
    Math.random() * 1000,
    Math.random() * 1000,
    Math.random() * 1000,
    Math.random() * 1000,
  ];
  const dataset2 = [
    Math.random() * 1000,
    Math.random() * 1000,
    Math.random() * 1000,
    Math.random() * 1000,
    Math.random() * 1000,
    Math.random() * 1000,
    Math.random() * 1000,
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "A상품",
        data: dataset1,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "B상품",
        data: dataset2,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <Card style={{ width: 500, height: 250 }}>
      <Bar options={options} data={data} />
    </Card>
  );
}

export default Statistics;
