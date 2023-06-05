import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router";
import { ConfigProvider } from "antd";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#b937de",
        },
      }}
    >
      <Router />
    </ConfigProvider>
  </React.StrictMode>
);
