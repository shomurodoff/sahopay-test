import { Button, Col, Row, Statistic } from "antd";
import React from "react";
import HeroBg from "../../../../../assets/hero-bg.jpg";
import { Element } from "react-scroll";
import CountUp from "react-countup";
import { Navigate, useNavigate } from "react-router-dom";
const HomeSection = () => {
  const navigate = useNavigate();
  const formatter = (value) => (
    <CountUp end={value} duration={5} separator="," />
  );
  return (
    <Element
      name="home"
      className="bg-opacity-20 h-[calc(100vh-64px)] relative flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${HeroBg})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <Row justify={"space-between"} className="max-w-4xl ">
        <Col span={24} className="text-white z-10 text-center mb-16">
          <h1 className="text-6xl font-bold mb-2">SahoPay</h1>
          <h3 className="text-xl mb-6">Available all online payments</h3>
          <Button
            type="primary"
            className="bg-[#c51f4d] w-56 !h-14 !text-xl"
            size="large"
            onClick={() => navigate("/auth")}
          >
            Create An Account
          </Button>
        </Col>
        <Col xs={24} md={8} className="flex justify-center mb-5">
          <Statistic
            formatter={formatter}
            value={2340342}
            title="All Active Users"
            className="hero-statistics"
          />
        </Col>{" "}
        <Col xs={24} md={8} className="flex justify-center mb-5">
          <Statistic
            formatter={formatter}
            value={2342345}
            title="All Active Users"
            className="hero-statistics"
          />
        </Col>{" "}
        <Col xs={24} md={8} className="flex justify-center mb-5">
          <Statistic
            formatter={formatter}
            value={1000000}
            title="All Active Users"
            className="hero-statistics"
          />
        </Col>
      </Row>
    </Element>
  );
};

export default HomeSection;
