import { Avatar, Space, Table, Typography } from "antd/es";
import { useEffect, useState } from "react";
import { getCustomers } from "../../api";

function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSoure, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCustomers(setDataSource);
    setLoading(false);
  }, []);

  console.log("dataSoure", dataSoure);
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>메뉴관리</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: <div style={{ textAlign: "center" }}>사진</div>,
            dataIndex: "image",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: <div style={{ textAlign: "center" }}>이름</div>,
            dataIndex: "firstName",
            render: (text, record) => (
              <span>
                {text}
                {record.lastName}
              </span>
            ),
          },

          {
            title: <div style={{ textAlign: "center" }}>이메일</div>,
            dataIndex: "email",
          },
          {
            title: <div style={{ textAlign: "center" }}>연락처</div>,
            dataIndex: "phone",
          },
          {
            title: <div style={{ textAlign: "center" }}>주소</div>,
            dataIndex: "address",
            render: (address) => {
              return <span>{address.address}</span>;
            },
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

export default Customers;
