import { Button } from "antd";
import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

// import styles from "./Landing.module.scss";

// import logo from "./landing.svg";

const Landing = () => (
  <div className="bg-white max-h-screen pb-4">
    {/* <header>
      <img src={logo} className="animate-spin h-10" alt="logo" />
      <div className="text-red-600">React + TS + Vite + Tailwind</div>
      <div className={styles.sassExample}>sass is here for styling</div>
    </header> */}
    <header className="flex justify-between md:px-24 items-center">
      <span className="text-[#3B3838] font-bold text-2xl">My Tasks</span>
      <NavLink
        to="/addtasks"
        className="text-white bg-[#3B3838] px-4 py-2 rounded-xl flex items-center"
      >
        <PlusOutlined />
        Add Task
      </NavLink>
    </header>
  </div>
);

// eslint-disable-next-line import/no-default-export
export default Landing;
