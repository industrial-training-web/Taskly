import { Button, Input } from "antd";
import React from "react";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import { Checkbox } from "antd";

const onCheck = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};
const dateFormatList = ["DD-MM-YYYY"];

const { TextArea } = Input;
const AddTasks = () => (
  <div className="bg-[F5F5F5] max-h-screen py-4 md:px-24">
    <header className="flex justify-between  items-center">
      <span className="text-[#3B3838] font-bold text-2xl">Add Tasks</span>
    </header>
    <div>
      <div className="py-7 grid gap-2">
        <span className="text-[#868585] text-xl font-semibold">
          Title <span className="text-[#FB7474]">*</span>
        </span>
        <Input className="w-[555px] h-10"></Input>
      </div>
      <div className=" grid gap-2">
        <span className="text-[#868585] text-xl font-semibold">
          Description
        </span>
        <TextArea
          className="w-[555px]"
          style={{ height: 200, resize: "none" }}
        />
      </div>
      <div className="pt-7 grid gap-2">
        <span className="text-[#868585] text-xl font-semibold">
          Deadline <span className="text-[#FB7474]">*</span>
        </span>
        <DatePicker
          onChange={onChange}
          className="w-[555px] h-10"
          format={dateFormatList}
        />
      </div>
      <Checkbox
        className="text-[#625E5E] text-base font-medium pt-4"
        onChange={onCheck}
      >
        Visible to Public
      </Checkbox>
      <div className="pt-6">
        <Button className="text-white bg-[#3B3838] rounded-xl w-[555px] p-5 flex items-center justify-center">
          Add
        </Button>
      </div>
    </div>
    ;
  </div>
);

export default AddTasks;
