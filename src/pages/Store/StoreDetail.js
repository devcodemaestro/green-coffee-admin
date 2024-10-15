import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailStore } from "../../api/superadmin";
import { Descriptions, Spin } from "antd";

function StoreDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [detailStore, setDetailStore] = useState(null);

  useEffect(() => {
    getDetailStore(setDetailStore);
  }, [id]);

  console.log(detailStore);

  if (loading) {
    return <Spin />;
  }

  if (!detailStore) {
    return <div>매장 정보를 불러올 수 없습니다.</div>;
  }

  return (
    <Descriptions title="매장 상세 정보" bordered>
      <Descriptions.Item label="매장명">{detailStore.name}</Descriptions.Item>
      <Descriptions.Item label="주소">{detailStore.address}</Descriptions.Item>
      <Descriptions.Item label="연락처">{detailStore.phone}</Descriptions.Item>
      <Descriptions.Item label="점주명">
        {detailStore.adminName}
      </Descriptions.Item>
      <Descriptions.Item label="오픈시간">{detailStore.open}</Descriptions.Item>
      <Descriptions.Item label="종료시간">
        {detailStore.close}
      </Descriptions.Item>
      <Descriptions.Item label="정기휴일">
        {detailStore.holiday}
      </Descriptions.Item>
      <Descriptions.Item label="영업상태">
        {detailStore.status}
      </Descriptions.Item>
    </Descriptions>
  );
}

export default StoreDetail;
