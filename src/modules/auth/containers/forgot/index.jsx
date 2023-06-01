import { Form, Button, Input, Card, Typography, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { get } from "lodash";

const Index = () => {
  const navigate = useNavigate();

  const onSubmit = (value) => {
    navigate(`/auth/new-password/${get(value, "email", "")}`);
  };
  return (
    <div className="flex-grow flex justify-center ">
      <Card
        className="w-11/12 md:w-1/4"
        title={
          <Row align={"middle"} justify={"space-between"}>
            <Typography.Title
              level={4}
              style={{
                marginBottom: 0,
              }}
            >
              Login to Sahopay
            </Typography.Title>
            <Button
              onClick={() => {
                navigate("/");
              }}
              shape="circle"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              }
            />
          </Row>
        }
      >
        <Form
          name="basic"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
          onFinish={onSubmit}
        >
          <Form.Item
            label="Email"
            name="email"
            className="mb-14"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              className="bg-[#c51f4d] w-full"
              htmlType="submit"
            >
              Send Request
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              type="ghost"
              className="w-full flex items-center justify-center"
              htmlType="button"
              onClick={() => navigate("/auth/login")}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              }
            >
              Return to Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Index;
