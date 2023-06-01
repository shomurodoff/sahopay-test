import { Button, Card, Form, Input, Row, Space, Typography } from "antd";
import clsx from "clsx";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { isEqual } from "lodash";

const Index = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);
  const [form] = Form.useForm();

  const navigate = useNavigate();
  return (
    <div>
      <div className="flex-grow flex justify-center ">
        <Card
          title={
            <Row align={"middle"} justify={"space-between"}>
              <Typography.Title
                level={4}
                style={{
                  marginBottom: 0,
                  maxWidth: "300px",
                }}
              >
                We sent confirmation to your email.
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
          <Form layout="vertical" form={form}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item label={"Confirm code"} name={"otp"} className="mb-0">
              <OtpInput
                value={otp}
                onChange={setOtp}
                name="otp"
                numInputs={6}
                inputStyle={clsx(
                  error && otp?.length < 6
                    ? "ant-input-affix-wrapper ant-input-password ant-input-affix-wrapper-status-error css-dev-only-do-not-override-bhqgg0 !w-12 h-12 "
                    : "ant-input css-dev-only-do-not-override-bhqgg0 !w-12 h-12 "
                )}
                className="flex"
                shouldAutoFocus
                renderSeparator={() => <span className="mx-1">-</span>}
                renderInput={(props) => <Input {...props} />}
              />
              <div
                className={clsx(
                  error && otp?.length < 6 ? "visible" : "invisible h-0"
                )}
              >
                <div
                  id="basic_password_help"
                  class="ant-form-item-explain ant-form-item-explain-connected css-dev-only-do-not-override-bhqgg0"
                  role="alert"
                >
                  <div class="ant-form-item-explain-error">
                    Please input your password!
                  </div>
                </div>
                <div></div>
              </div>
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
            <Form.Item>
              <Button
                type="primary"
                className="bg-[#c51f4d] w-full"
                htmlType="submit"
                onClick={() => {
                  if (otp?.length <= 0 || otp?.length !== 6) {
                    return setError(true);
                  }
                  if (otp?.length === 6) {
                    return setError(false);
                  }
                }}
              >
                Confirm
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Index;
