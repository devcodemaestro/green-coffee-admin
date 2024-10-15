import { Space, Table, Typography } from "antd/es";
import { useEffect, useState } from "react";
import { getAllStore } from "../../api/superadmin";

function Store() {
  // const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    getAllStore(setDataSource);
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>매장관리</Typography.Title>
      <Table
        // loading={loading}
        columns={[
          {
            title: <div style={{ textAlign: "center" }}>매장명</div>,
            dataIndex: "name",
          },
          {
            title: <div style={{ textAlign: "center" }}>주소</div>,
            dataIndex: "address",
          },

          {
            title: <div style={{ textAlign: "center" }}>연락처</div>,
            dataIndex: "phone",
          },
          {
            title: <div style={{ textAlign: "center" }}>점주명</div>,
            dataIndex: "adminName",
          },
          {
            title: <div style={{ textAlign: "center" }}>오픈시간</div>,
            dataIndex: "open",
          },
          {
            title: <div style={{ textAlign: "center" }}>종료시간</div>,
            dataIndex: "close",
          },
          {
            title: <div style={{ textAlign: "center" }}>정기휴일</div>,
            dataIndex: "holiday",
          },
          {
            title: <div style={{ textAlign: "center" }}>영업상태</div>,
            dataIndex: "status",
          },
        ]}
        dataSource={dataSource}
        rowKey="id"
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
}

export default Store;
