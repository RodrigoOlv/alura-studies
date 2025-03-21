import React from 'react'
import Button from '../Button'
import style from './Form.module.scss'
import { ITask } from '../../types/task'
import { v4 as uuidv4 } from 'uuid'

export default class Form extends React.Component<{setTasks: React.Dispatch<React.SetStateAction<ITask[]>>}> {
  state = {
    task: '',
    time: '00:00:00'
  }

  constructor(props: any) {
    super(props);
    this.addTasks = this.addTasks.bind(this);
  }

  addTasks(event: React.FormEvent) {
    event.preventDefault();
    this.props.setTasks((prevTasks) =>
      [
        ...prevTasks,
        {
          ...this.state,
          selected: false,
          completed: false,
          id: uuidv4()
        },
      ]
    );
    this.setState({ task: '', time: '00:00:00' });
  }
  
  render() {
    return (
      <form className={style.newTask} onSubmit={this.addTasks}>
        <div className={style.inputContainer}>
            <label htmlFor="task">Adicione um novo estudo</label>
            <input
              name="task"
              id="task"
              type="text"
              placeholder="O que você quer estudar?"
              value={this.state.task}
              onChange={event => this.setState({ ...this.state, task: event.target.value })}
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
              value={this.state.time}
              onChange={event => this.setState({ ...this.state, time: event.target.value })}
              required
            />
        </div>
        <div className={style.buttonContainer}>
            <Button type='submit'>Adicionar</Button>
        </div>
      </form>
    )
  }
}
