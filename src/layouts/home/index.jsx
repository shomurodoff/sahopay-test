import React from "react";
import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";
import { Content } from "antd/es/layout/layout";
import { Layout } from "antd";

const Index = () => {
  return (
    <Layout>
      <Navbar />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default Index;
