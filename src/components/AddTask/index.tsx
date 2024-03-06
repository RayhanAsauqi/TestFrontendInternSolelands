import Input from "../app/Input";
import Button from "../app/Button";
import axios from "axios";
import React, { useState } from "react";
import { IAddTask, AddTaskProps } from "./AddTask.type";

function AddTask({ onTaskAdded }: AddTaskProps) {
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
    setErrorMessage("");
  };

  const handleTask = async () => {
    try {
      if (!taskTitle.trim()) {
        setErrorMessage("Task title cannot be empty");
        return;
      }
      const response = await axios.post("https://dummyjson.com/todos/add", {
        todo: taskTitle,
        completed: false,
        userId: 1,
      });

      const addedTask: IAddTask = response.data;

      if (onTaskAdded) {
        onTaskAdded(addedTask);
      }

      setTaskTitle("");
    } catch (error) {
      console.log(error);
    }
  };

  const handelKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleTask();
    }
  };
  return (
    <div>
      <div className="flex justify-center gap-4 pt-10">
        <Input
          type="text"
          placeholder="Input Task"
          value={taskTitle}
          onChange={handleInputChange}
          onKeyDown={handelKeyPress}
        />
        <Button
          label="Add"
          onClick={handleTask}
          className="btn btn-primary btn-"
        />
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      </div>
    </div>
  );
}

export default AddTask;
