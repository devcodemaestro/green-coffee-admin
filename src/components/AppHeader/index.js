import { BellFilled, MailOutlined } from "@ant-design/icons/lib";
import { Badge, Drawer, Image, List, Space, Typography } from "antd/es";
import React, { useEffect, useState } from "react";
import { getHeaderComments, getHeaderOrders } from "../../api";
import { Header } from "antd/es/layout/layout";

const AppHeader = () => {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  useEffect(() => {
    getHeaderComments(setComments);
    getHeaderOrders(setOrders);
  }, []);
  return (
    <Header theme="dark">
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
          <Badge count={comments.length}>
            <MailOutlined
              style={{ fontSize: 24 }}
              onClick={() => {
                setCommentsOpen(true);
              }}
            />
          </Badge>
          <Badge count={orders.length}>
            <BellFilled
              style={{ fontSize: 24 }}
              onClick={() => {
                setNotificationsOpen(true);
              }}
            />
          </Badge>
        </Space>
        <Drawer
          title="Comments"
          open={commentsOpen}
          onClose={() => {
            setCommentsOpen(false);
          }}
          maskClosable
        >
          <List
            dataSource={comments}
            renderItem={(item) => {
              return <List.Item>{item.body}</List.Item>;
            }}
          ></List>
        </Drawer>
        <Drawer
          title="Notifications"
          open={notificationsOpen}
          onClose={() => {
            setNotificationsOpen(false);
          }}
          maskClosable
        >
          <List
            dataSource={orders}
            renderItem={(item) => {
              return (
                <List.Item>
                  <Typography.Paragraph strong>
                    {item.title}
                  </Typography.Paragraph>
                  주문승인
                </List.Item>
              );
            }}
          ></List>
        </Drawer>
      </div>
    </Header>
  );
};

export default AppHeader;
