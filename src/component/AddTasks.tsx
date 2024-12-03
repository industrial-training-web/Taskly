import { Button, Input } from "antd";
import React from "react";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import { Checkbox } from "antd";
import { CloudSyncOutlined } from "@ant-design/icons";
const { TextArea } = Input;

const AddTasks = () => {
  const addToIndexedDb = () => {
    const request: IDBOpenDBRequest = window.indexedDB.open("taskly", 1);

    request.onerror = (event: Event) => {
      console.error("Error opening IndexedDB:", event);
    };

    request.onsuccess = (_) => {
      const db: IDBDatabase = request.result;
      const transaction: IDBTransaction = db.transaction(
        ["tasks"],
        "readwrite"
      );
      const objectStore: IDBObjectStore = transaction.objectStore("tasks");

      const timeStamp = Date.now();
      const task = {
        title: `Task 1 ${timeStamp}`,
        description: "Task 1 Description",
        deadline: "2022-12-12",
        visibleToPublic: true,
      };

      const addRequest: IDBRequest<IDBValidKey> = objectStore.add(task);

      addRequest.onsuccess = (_) => {
        console.log("Task has been added to your database.");
      };

      addRequest.onerror = (event: Event) => {
        console.error("Error adding task:", event);
      };
    };

    request.onupgradeneeded = (_) => {
      const db: IDBDatabase = request.result;
      if (!db.objectStoreNames.contains("tasks")) {
        db.createObjectStore("tasks", { keyPath: "title" });
      }
    };
  };

  const onCheck = (mouseClickEvent: { target: { checked: any } }) => {
    console.log(`checked = ${mouseClickEvent.target.checked}`);
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  const dateFormatList = ["DD-MM-YYYY"];
  return (
    <div className="bg-[F5F5F5] max-h-screen py-4 px-24">
      <header className="flex items-center md:space-x-[420px] space-x-[300px]">
        <span className="text-[#3B3838] font-bold text-2xl">Add Tasks</span>
        <CloudSyncOutlined className="text-[18px] text-gray-700" />
      </header>
      <div>
        <div className="py-7 grid gap-2">
          <span className="text-gray-500 text-xl font-semibold">
            Title <span className="text-red-400">*</span>
          </span>
          <Input className="md:w-[555px] h-10"></Input>
        </div>
        <div className=" grid gap-2">
          <span className="text-gray-500 text-xl font-semibold">
            Description
          </span>
          <TextArea
            className="md:w-[555px]"
            style={{ height: 200, resize: "none" }}
          />
        </div>
        <div className="pt-7 grid gap-2">
          <span className="text-gray-500 text-xl font-semibold">
            Deadline <span className="text-red-400">*</span>
          </span>
          <DatePicker
            onChange={onChange}
            className="md:w-[555px] h-10"
            format={dateFormatList}
          />
        </div>
        <Checkbox
          className="text-gray-500 text-base font-medium pt-4"
          onChange={onCheck}
        >
          Visible to Public
        </Checkbox>
        <div className="pt-6 ">
          <Button
            onClick={() => {
              addToIndexedDb();
            }}
            className="text-white bg-gray-800 rounded-xl md:w-[555px] w-[400px] p-5 flex items-center justify-center"
          >
            Add
          </Button>
        </div>
      </div>
      ;
    </div>
  );
};

export default AddTasks;
