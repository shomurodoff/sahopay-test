import React from "react";
import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";
import { Content } from "antd/es/layout/layout";
import { Layout } from "antd";

const Index = () => {
  return (
    <div className={"container mx-auto"}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Index;
