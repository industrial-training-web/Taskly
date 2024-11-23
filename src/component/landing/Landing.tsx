import { Button, Checkbox } from "antd";
import React, { useState } from "react";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import Tasks from "../Tasks";

// import styles from "./Landing.module.scss";

// import logo from "./landing.svg";

const Landing = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="bg-white max-h-screen pb-4 pt-2 px-24">
      {/* <header>
      <img src={logo} className="animate-spin h-10" alt="logo" />
      <div className="text-red-600">React + TS + Vite + Tailwind</div>
      <div className={styles.sassExample}>sass is here for styling</div>
    </header> */}
      <header className="flex justify-between  items-center pb-10">
        <span className="text-[#3B3838] font-bold text-2xl">My Tasks</span>
        <NavLink
          to="/addtasks"
          className="text-white bg-gray-200 px-4 py-2 rounded-xl flex items-center gap-2"
        >
          <PlusOutlined />
          Add Task
        </NavLink>
      </header>
      {/* task-card */}
      <Tasks></Tasks>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Landing;
