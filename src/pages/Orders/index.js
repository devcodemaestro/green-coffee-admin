import { Avatar, Rate, Space, Table, Typography } from "antd/es";
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
            title: <div style={{ textAlign: "center" }}>할인금액</div>,
            dataIndex: "discountedTotal",
            render: (value) => (
              <span>{Math.floor(Number(value)).toLocaleString("ko-KR")}원</span>
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
            dataIndex: "quantity",
          },
          {
            title: <div style={{ textAlign: "center" }}>최종금액</div>,
            dataIndex: "total",
            render: (value) => (
              <span>{Math.floor(Number(value)).toLocaleString("ko-KR")}원</span>
            ),
            align: "right",
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
