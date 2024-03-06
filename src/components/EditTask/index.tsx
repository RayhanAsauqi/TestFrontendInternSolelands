import React, { useState, useEffect } from "react";
import { IListTask } from "../../pages/Home/home.type";
import { EditTaskProps } from "./EditTask.type";
import Button from "../app/Button";
import Input from "../app/Input";

const EditTask: React.FC<EditTaskProps> = ({ task, onSave, onCancel }) => {
  const [editedTask, setEditedTask] = useState<IListTask>(task);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setEditedTask(task);
    setError(null);
  }, [task]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTask({
      ...editedTask,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveClick = () => {
    if (!editedTask.todo.trim()) {
      setError("Task name cannot be empty");
      return;
    }
    onSave(editedTask);
  };
  const handelKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSaveClick();
    }
  };

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-opacity-50 bg-black z-50">
      <div className="bg-neutral p-6 rounded-md w-96">
        <h2 className="text-xl font-bold mb-4 text-neutral-content">
          Edit Task
        </h2>
        <div className="mb-4">
          <label className="block text-sm font-medium  text-neutral-content pb-3">
            Task Name
          </label>

          <Input
            type="text"
            names="todo"
            value={editedTask.todo}
            onChange={handleInputChange}
            onKeyDown={handelKeyPress}
          />
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <div className="flex justify-end gap-2">
          <Button
            label="save"
            onClick={handleSaveClick}
            className="btn btn-primary mr-2"
          />

          <Button
            label="Cancel"
            className="btn btn-danger"
            onClick={onCancel}
          />
        </div>
      </div>
    </div>
  );
};

export default EditTask;
