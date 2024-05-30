import { Avatar, Rate, Space, Table, Typography } from "antd/es";
import { useEffect, useState } from "react";
import { getInventory } from "../../api";

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSoure, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory(setDataSource);
    setLoading(false);
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>메뉴관리</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: <div style={{ textAlign: "center" }}>상품</div>,
            dataIndex: "thumbnail",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: <div style={{ textAlign: "center" }}>품명</div>,
            dataIndex: "title",
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
            title: <div style={{ textAlign: "center" }}>추천</div>,
            dataIndex: "rating",
            render: (rating) => {
              return <Rate value={rating} allowHalf disabled />;
            },
          },
          {
            title: <div style={{ textAlign: "center" }}>판매점</div>,
            dataIndex: "stock",
          },
          {
            title: <div style={{ textAlign: "center" }}>브랜드</div>,
            dataIndex: "brand",
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

export default Inventory;
