import React from "react";
import { Outlet } from "react-router-dom";
import Background from "../../assets/auth-bg.jpeg";
import { Layout } from "antd";
const Index = () => {
  return (
    <Layout
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <Layout.Content className="flex justify-center items-center">
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};

export default Index;
