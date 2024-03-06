export interface AddTaskProps {
  onTaskAdded: (addedTask: IAddTask) => void;
}

export interface IAddTask {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
