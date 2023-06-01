import { Form, Button, Checkbox, Input, Card, Row, Typography } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
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
              Register
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
          onFinish={() => {}}
        >
          <Form.Item
            label="Email"
            className="mb-2"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            className="mb-2"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirm"
            className="mb-2"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item className="mt-8">
            <Button
              type="primary"
              className="bg-[#c51f4d] w-full"
              htmlType="submit"
              onClick={() => navigate("/auth/confirm")}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
        <Typography.Paragraph>
          Already have an account?{" "}
          <Link className="text-underline" to={"/auth/login"}>
            To come in
          </Link>
        </Typography.Paragraph>
      </Card>
    </div>
  );
};

export default Index;
