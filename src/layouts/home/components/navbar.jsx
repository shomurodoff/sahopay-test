import React, { useState } from "react";

import LogoImage from "../../../assets/home/icons/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Header } from "antd/es/layout/layout";
import { Button, Col, Menu, Row, Select, Space } from "antd";
const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState("home");
  const navigate = useNavigate();
  return (
    <Header className="sticky shadow-sm w-full bg-transparent top-0 z-50 px-4 backdrop-blur-md">
      <Row
        justify={"space-around"}
        className={" flex-grow items-center font-bold"}
      >
        <Col className="flex items-center">
          <ScrollLink
            spy={true}
            smooth={true}
            to="home"
            duration={500}
            offset={-72}
            onClick={() => setActiveNavbar("home")}
          >
            <img src={LogoImage} className="w-[50px]" />
          </ScrollLink>
        </Col>
        <Col className="hidden md:flex flex-grow items-center">
          <Menu
            selectedKeys={activeNavbar}
            mode="horizontal"
            className=" flex flex-grow justify-center bg-transparent "
            items={[
              {
                key: "buy-crypto",
                label: (
                  <ScrollLink
                    spy={true}
                    smooth={true}
                    to="buy-crypto"
                    duration={500}
                    offset={-72}
                    onClick={() => setActiveNavbar("buy-crypto")}
                  >
                    Buy Crypto
                  </ScrollLink>
                ),
              },
              {
                key: "features",
                label: (
                  <ScrollLink
                    spy={true}
                    smooth={true}
                    to="features"
                    duration={500}
                    onClick={() => setActiveNavbar("features")}
                  >
                    Features
                  </ScrollLink>
                ),
              },

              {
                key: "feature",
                label: (
                  <ScrollLink
                    spy={true}
                    smooth={true}
                    to="feature"
                    duration={500}
                    onClick={() => setActiveNavbar("feature")}
                  >
                    Feature
                  </ScrollLink>
                ),
              },

              {
                key: "about-us",
                label: (
                  <ScrollLink
                    spy={true}
                    smooth={true}
                    to="about-us"
                    duration={500}
                    onClick={() => setActiveNavbar("about-us")}
                  >
                    About us
                  </ScrollLink>
                ),
              },

              {
                key: "testimonials",
                label: (
                  <ScrollLink
                    spy={true}
                    smooth={true}
                    to="testimonials"
                    duration={500}
                    onClick={() => setActiveNavbar("testimonials")}
                  >
                    Testimonials
                  </ScrollLink>
                ),
              },
            ]}
          />
        </Col>
        <Col className="flex items-center gap-2">
          {/* <Select
            defaultValue={"uz"}
            style={{ minWidth: 85 }}
            options={[
              {
                value: "uz",
                label: (
                  <span className="flex gap-1">
                    <img src={FlagUzb} className="w-5" />
                    Uz
                  </span>
                ),
              },
              {
                value: "ru",
                label: (
                  <span className="flex gap-1">
                    <img src={FlagRus} className="w-5" />
                    Ru
                  </span>
                ),
              },
              {
                value: "en",
                label: (
                  <span className="flex gap-1">
                    <img src={FlagUsa} className="w-5" />
                    Us
                  </span>
                ),
              },
            ]}
          /> */}
          <Button
            className="border-[#000] px-[24px] rounded-[80px] hover:bg-purple-600 hover:text-[#fff]"
            onClick={() => navigate("/auth/login")}
          >
            Buy for $24
          </Button>
          <Button
            className="border-[#c51f4d] md:hidden"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#c51f4d"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 stroke-red-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            }
          />
        </Col>
      </Row>
    </Header>
  );
};

export default Navbar;
