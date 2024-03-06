import { IListTask } from "../../pages/Home/home.type";

export interface EditTaskProps {
    task: IListTask;
    onSave: (editedTask: IListTask) => void;
    onCancel: () => void;
  }
  