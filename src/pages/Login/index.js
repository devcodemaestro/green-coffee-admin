import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  ProForm,
  ProFormCheckbox,
  ProFormText,
} from "@ant-design/pro-components";
import { Button, ConfigProvider, Tabs, theme } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { AuthStateAtom } from "../../recoil/atoms/AuthState";

// const iconStyles = {
//   color: "rgba(0, 0, 0, 0.2)",
//   fontSize: "18px",
//   verticalAlign: "middle",
//   cursor: "pointer",
// };

function Login() {
  const [loginType, setLoginType] = useState("account");
  const { token } = theme.useToken();
  const setAuthState = useSetRecoilState(AuthStateAtom);
  const navigate = useNavigate();
  // const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (values) => {
    try {
      // console.log("Form values:", values); // 디버깅 로그 추가
      // const response = await postLogin({ payload: values, setErrMsg });
      // console.log("Login response:", response); // 디버깅 로그 추가
      // if (!response) {
      //   message.error(errMsg || "로그인에 실패했습니다.");
      //   return;
      // }
      // const { role, token } = response;

      setAuthState({
        loginstate: "Y",
        token: token,
        role: "ADMIN",
      });
      navigate("admin/dashboard");
      // if (role === "SUPERADMIN") {
      //   navigate("superadmin/dashboard");
      // } else if (role === "ADMIN") {
      //   navigate("admin/dashboard");
      // } else {
      //   message.error("로그인에 실패했습니다. 관리자 권한이 없습니다.");
      // }
    } catch (error) {
      console.error("Login error:", error); // 디버깅 로그 추가
      // message.error(errMsg || "로그인에 실패했습니다.");
    }
  };

  const items = [
    {
      key: "account",
      label: "계정과 비밀번호 로그인",
      children: (
        <>
          <ProFormText
            name="email"
            fieldProps={{
              size: "large",
              prefix: (
                <UserOutlined
                  style={{
                    color: token.colorText,
                  }}
                  className={"prefixIcon"}
                />
              ),
            }}
            placeholder={"아이디"}
            rules={[
              {
                required: true,
                message: "사용자 아이디를 입력하세요!",
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: "large",
              prefix: (
                <LockOutlined
                  style={{
                    color: token.colorText,
                  }}
                  className={"prefixIcon"}
                />
              ),
            }}
            placeholder={"비밀번호"}
            rules={[
              {
                required: true,
                message: "비밀번호를 입력하세요!",
              },
            ]}
          />
        </>
      ),
    },
  ];

  return (
    <ConfigProvider>
      <div
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* <video
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source
            src={`${process.env.PUBLIC_URL}/assets/coffee.mp4`}
            type="video/mp4"
          />
        </video> */}
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0,0.65)",
            padding: "24px",
            borderRadius: "8px",
            backdropFilter: "blur(4px)",
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "24px",
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/emblem.png`}
              alt="Green Coffee"
              style={{ height: "40px", marginBottom: "16px" }}
            />
            <h1 style={{ color: "white" }}>Green Coffee</h1>
          </div>
          <ProForm
            onFinish={handleSubmit}
            submitter={{
              render: (props, doms) => {
                return (
                  <Button type="primary" htmlType="submit" size="large" block>
                    확인
                  </Button>
                );
              },
            }}
          >
            <Tabs
              centered
              activeKey={loginType}
              onChange={(activeKey) => setLoginType(activeKey)}
              items={items}
            />
            <div
              style={{
                marginBlockEnd: 24,
                color: "white",
              }}
            >
              <ProFormCheckbox noStyle name="autoLogin">
                자동 로그인
              </ProFormCheckbox>
              {/* <a
                href="http://naver.com/"
                style={{
                  float: "right",
                  color: token.colorTextPlaceholder,
                }}
              >
                비밀번호 분실
              </a> */}
            </div>
          </ProForm>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default Login;
