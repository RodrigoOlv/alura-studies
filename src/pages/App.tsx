import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import style from './App.module.scss';
import { ITask } from '../types/task';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(tasksOld => tasksOld.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })));
  }

  function finishTask() {
    if (selected) {
      setSelected(undefined);
      setTasks(tasksOld => tasksOld.map(task => {
        if (task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task;
      }));
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List
        tasks={tasks}
        selectTask={selectTask}
      />
      <Timer
        selected={selected}
        finishTask={finishTask}
      />
    </div>
  );
}

export default App;
