import { Checkbox } from "antd";
import { React, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Avatar, List } from "antd";

const data = [
  {
    title: "Home Work",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team",
  },
  {
    title: "Complete Task 1",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team",
  },
  {
    title: "Complete Project 2",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team",
  },
  {
    title: "Complete Project 3",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team",
  },
];

const Tasks = () => {
  const [isChecked, setIsChecked] = useState(false);

  const onCheck = (mouseClickEvent: { target: { checked: any } }) => {
    console.log(`checked = ${mouseClickEvent.target.checked}`);
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Checkbox onChange={onCheck} />}
              title={
                <div className="flex justify-between">
                  <div className="grid">
                    <h2 className="text-xl font-bold text-gray-800">
                      {item.title}
                    </h2>
                    <span className="text-[17px] text-gray-700">
                      {item.description}
                    </span>
                    <span className="text-gray-500 font-">Due 15 Feb,2025</span>
                  </div>
                  <div>
                    <EditOutlined className="px-1 text-gray-500 text-[22px]" />
                    <DeleteOutlined className="text-red-500 text-[22px]" />
                  </div>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};
// eslint-disable-next-line import/no-default-export
export default Tasks;
