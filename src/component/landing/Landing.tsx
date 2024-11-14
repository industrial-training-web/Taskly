import { Button, Checkbox } from "antd";
import React from "react";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
const onCheck = (e: { target: { checked: any } }) => {
  console.log(`checked = ${e.target.checked}`);
};

// import styles from "./Landing.module.scss";

// import logo from "./landing.svg";

const Landing = () => (
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
        className="text-white bg-[#3B3838] px-4 py-2 rounded-xl flex items-center gap-2"
      >
        <PlusOutlined />
        Add Task
      </NavLink>
    </header>
    {/* task-card */}
    <div className="grid gap-5">
      {/* tasks */}
      {[1, 2, 3].map((data) => (
        <div
          key={data}
          className="flex justify-between border solid border-[#D9D9D9] rounded-xl bg-[#F5F5F5]"
        >
          <div className="flex items-start gap-2 py-7 px-7">
            <Checkbox onChange={onCheck}></Checkbox>
            <div className="grid gap-2">
              <h3 className="font-semibold text-[#3B3838] text-xl">
                Home Work
              </h3>
              <span className="text-[#625E5E] text-[17px] ">
                Do complete questions 1 and 2
              </span>
              <span className="text-[#a9a8a8] font-">Due 15 Feb,2025</span>
            </div>
          </div>
          <div className="py-7 px-7">
            <EditOutlined
              style={{ color: "#959090", fontSize: "22px" }}
              className="px-1"
            />
            <DeleteOutlined style={{ color: "#FB7474", fontSize: "22px" }} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// eslint-disable-next-line import/no-default-export
export default Landing;
