import React from 'react'
import Button from '../Button'
import style from './Form.module.scss'
import { ITask } from '../../types/task'
import { v4 as uuidv4 } from 'uuid'

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

export default function Form({ setTasks }: Props) {
  const [task, setTask] = React.useState('');
  const [time, setTime] = React.useState('00:00:00');

  function addTasks(event: React.FormEvent) {
    event.preventDefault();
    setTasks((prevTasks) =>
      [
        ...prevTasks,
        {
          task,
          time,
          selected: false,
          completed: false,
          id: uuidv4()
        },
      ]
    );
    setTask('');
    setTime('00:00:00');
  }
  
  return (
    <form className={style.newTask} onSubmit={addTasks}>
      <div className={style.inputContainer}>
          <label htmlFor="task">Adicione um novo estudo</label>
          <input
            name="task"
            id="task"
            type="text"
            placeholder="O que você quer estudar?"
            value={task}
            onChange={event => setTask(event.target.value)}
            required
          />
      </div>
      <div className={style.inputContainer}>
          <label htmlFor="time">Tempo</label>
          <input
            type="time"
            name="time"
            id="time"
            step="1"
            min="00:00:00"
            max="01:30:00"
            value={time}
            onChange={event => setTime(event.target.value)}
            required
          />
      </div>
      <div className={style.buttonContainer}>
          <Button type='submit'>Adicionar</Button>
      </div>
    </form>
  )
}
