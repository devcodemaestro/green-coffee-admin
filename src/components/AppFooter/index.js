import { Typography } from "antd/es";
import React from "react";

const AppFooter = () => {
  return (
    <div className="AppFooter">
      {/* 해외 전화번호 체계에서는 0 대신 +를 사용. +82는 대한민국 국가번호. 휴대폰 010의 경우 +82 10으로 시작 */}
      <Typography.Link href="tel:+82535721005">
        전화 : 053-572-1005
      </Typography.Link>
      {/* 개인정보 보호정책. 추후 해당 페이지로 이동하도록 추가 작업 필요 */}
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        개인정보 보호정책
      </Typography.Link>
      {/* 이용 약관. 추후 해당 페이지로 이동하도록 추가 작업 필요 */}
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        이용 약관
      </Typography.Link>
    </div>
  );
};

export default AppFooter;
