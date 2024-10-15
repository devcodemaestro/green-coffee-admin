import { Rate, Space, Table, Typography } from "antd/es";
import { useEffect, useState } from "react";
import { getOrders } from "../../api";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSoure, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders(setDataSource);
    setLoading(false);
  }, []);
  // console.log("dataSoure", dataSoure);
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>주문관리</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: <div style={{ textAlign: "center" }}>품명</div>,
            dataIndex: "title",
          },
          {
            title: <div style={{ textAlign: "center" }}>할인율</div>,
            dataIndex: "discountPercentage",
            render: (value) => (
              <span>{Math.floor(Number(value)).toLocaleString("ko-KR")}%</span>
            ),
            align: "right",
          },
          {
            title: <div style={{ textAlign: "center" }}>가격</div>,
            dataIndex: "price",
            render: (value) => (
              <span>{Math.floor(Number(value)).toLocaleString("ko-KR")}원</span>
            ),
            align: "right",
          },
          {
            title: <div style={{ textAlign: "center" }}>수량</div>,
            dataIndex: "minimumOrderQuantity",
          },
          {
            title: <div style={{ textAlign: "center" }}>추천</div>,
            dataIndex: "rating",
            render: (rating) => {
              return <Rate value={rating} allowHalf disabled />;
            },
          },
          {
            title: <div style={{ textAlign: "center" }}>카테고리</div>,
            dataIndex: "category",
          },
        ]}
        dataSource={dataSoure}
        pagination={{
          pageSize: 7,
        }}
      ></Table>
    </Space>
  );
}

export default Orders;
