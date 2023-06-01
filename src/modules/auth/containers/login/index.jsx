import {
  Form,
  Button,
  Checkbox,
  Input,
  Card,
  Typography,
  Row,
  Col,
} from "antd";
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
          onFinish={() => {}}
        >
          <Form.Item
            label="Email"
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
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              className="bg-[#c51f4d] w-full"
              htmlType="submit"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
        <Row justify={"space-between"}>
          <Col>
            <Typography.Text>
              <Link to={"/auth/reset-password"}>Forgot Password ?</Link>
            </Typography.Text>
          </Col>
          <Col>
            <Typography.Text>
              <span className="font-semibold mr-1">New user?</span>
              <Link to={"/auth"}>Register</Link>
            </Typography.Text>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Index;
