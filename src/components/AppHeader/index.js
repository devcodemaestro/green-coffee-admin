import { BellFilled, MailOutlined } from "@ant-design/icons/lib";
import { Badge, Image, Space, Typography } from "antd/es";
import React from "react";

const AppHeader = () => {
  return (
    <div className="AppHeader">
      <Image
        width={40}
        src={`${process.env.PUBLIC_URL}/assets/emblem.png`}
        alt="emblem"
      ></Image>
      <Typography.Title
        level={2}
        style={{
          margin: 0,
        }}
      >
        Green Coffee's AdminPage
      </Typography.Title>
      <Space>
        {/* 미확인 숫자 아이콘 표기. 속성값으로 dot이 들어가면 갯수 표기 안됨 */}
        <Badge count={10} dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={20}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  );
};

export default AppHeader;
