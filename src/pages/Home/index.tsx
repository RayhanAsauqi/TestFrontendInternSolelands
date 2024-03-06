import axios from "axios";
import { useEffect, useState } from "react";
import AddTask from "../../components/AddTask";
import { IListTask } from "./home.type";
import EditTask from "../../components/EditTask";
import Button from "../../components/app/Button";

function Home() {
  const [data, setData] = useState<IListTask[]>([]);
  const [selectedTask, setSelectedTask] = useState<IListTask | null>(null);

  useEffect(() => {
    const fetchGetAllTodo = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/todos");
        setData(response.data.todos);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGetAllTodo();
  }, []);

  const handleTaskAdded = (addedTask: IListTask) => {
    const newId = Math.max(...data.map((task) => task.id)) + 1;
    const taskWithId = { ...addedTask, id: newId, completed: false };
    const updatedData = data.map((task) =>
      task.id === addedTask.id ? taskWithId : task
    );

    setData([taskWithId, ...updatedData]);
  };

  const handleCheckboxChange = (index: number) => {
    const updatedData = [...data];
    updatedData[index].completed = !updatedData[index].completed;
    setData(updatedData);
  };

  const handleEditClick = (task: IListTask) => {
    setSelectedTask(task);
  };

  const handleRemoveClick = (taskId: number) => {
    const updateData = data.filter((task) => task.id !== taskId);
    setData(updateData);
  };

  const handleSaveTask = (editedTask: IListTask) => {
    const editedIndex = data.findIndex((task) => task.id === editedTask.id);
    const updatedData = data.map((task, index) =>
      index === editedIndex ? editedTask : task
    );

    setData(updatedData);
    setSelectedTask(null);
  };

  const handleCancelEdit = () => {
    setSelectedTask(null);
  };
  return (
    <>
      <div className="px-40 py-5 ">
        <div className="card w-full bg-base-300 shadow-xl px-16">
          <AddTask onTaskAdded={handleTaskAdded} />
          <div className="py-10">
            {data.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between py-2">
                  <div
                    style={{
                      textDecoration: item.completed ? "line-through" : "none",
                    }}
                  >
                    {item.todo}
                  </div>
                  <div className="grid grid-cols-3">
                    <input
                      type="checkbox"
                      checked={item.completed}
                      className="checkbox checkbox-md"
                      onChange={() => handleCheckboxChange(index)}
                    />

                    <Button
                      label="Edit"
                      className="btn btn-primary btn-sm"
                      onClick={() => handleEditClick(item)}
                    />
                    <Button
                      label="Remove"
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRemoveClick(item.id)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedTask && (
          <EditTask
            task={selectedTask}
            onSave={handleSaveTask}
            onCancel={handleCancelEdit}
          />
        )}
      </div>
    </>
  );
}

export default Home;
