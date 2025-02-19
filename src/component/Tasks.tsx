/* eslint-disable react/react-in-jsx-scope */
import { Checkbox } from "antd";
import { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Avatar, List } from "antd";

interface Task {
  title: string;
  description: string;
  deadline: string;
  visibleToPublic: boolean;
}

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const listAllTasksFromIndexedDb = (): Promise<Task[]> => {
    return new Promise((resolve, reject) => {
      const request: IDBOpenDBRequest = window.indexedDB.open("taskly", 1);

      request.onerror = (event: Event) => {
        console.error("Error opening IndexedDB:", event);
        reject(new Error("Failed to open IndexedDB."));
      };

      request.onsuccess = () => {
        const db: IDBDatabase = request.result;

        const transaction: IDBTransaction = db.transaction(
          ["tasks"],
          "readonly"
        );
        const objectStore: IDBObjectStore = transaction.objectStore("tasks");

        const tasks: Task[] = [];
        const cursorRequest: IDBRequest<IDBCursorWithValue | null> =
          objectStore.openCursor();

        cursorRequest.onsuccess = () => {
          const cursor: IDBCursorWithValue | null = cursorRequest.result;

          if (cursor) {
            tasks.push(cursor.value as Task);
            cursor.continue();
          } else {
            resolve(tasks);
          }
        };

        cursorRequest.onerror = (event: Event) => {
          console.error("Error fetching tasks:", event);
          reject(new Error("Failed to fetch tasks."));
        };
      };

      request.onupgradeneeded = () => {
        const db: IDBDatabase = request.result;
        if (!db.objectStoreNames.contains("tasks")) {
          db.createObjectStore("tasks", { keyPath: "title" });
        }
      };
    });
  };

  useEffect(() => {
    listAllTasksFromIndexedDb().then((tasks) => {
      setTasks(tasks);
    });
  }, []);

  const onCheck = (mouseClickEvent: { target: { checked: any } }) => {
    console.log(`checked = ${mouseClickEvent.target.checked}`);
  };
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={tasks}
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
