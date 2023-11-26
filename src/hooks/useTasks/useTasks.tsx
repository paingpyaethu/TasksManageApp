import {useAtom} from 'jotai';
import {taskListAtom} from '../../store';
import {getFormattedDateTime} from '../../utils/HelperFunc';

export const useTasks = () => {
  const [tasks, setTasks] = useAtom(taskListAtom);
  const addTask = (title: string, description: string, date: Date) => {
    setTasks(prevTasks => [
      ...prevTasks,
      {
        id: Date.now(),
        title,
        description,
        date: getFormattedDateTime(date),
        completed: false,
      },
    ]);
  };

  const editTask = (id: number, updatedTask: Partial<TaskType>) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? {...task, ...updatedTask} : task,
      ),
    );
  };

  const toggleTask = (id: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task,
      ),
    );
  };

  const deleteTask = (id: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  return {tasks, addTask, editTask, toggleTask, deleteTask};
};
