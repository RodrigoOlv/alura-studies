import React, { Component } from 'react'
import Button from '../Button'
import style from './Form.module.scss'

export default class Form extends Component {
  render() {
    return (
      <form className={style.newTask}>
        <div className={style.inputContainer}>
            <label htmlFor="task">Adicione um novo estudo</label>
            <input name="task" id="task" type="text" placeholder="O que você quer estudar?" required />
        </div>
        <div className={style.inputContainer}>
            <label htmlFor="time">Tempo</label>
            <input type="time" name="time" id="time" step="1" min="00:00:00" max="01:30:00" required />
        </div>
        <div className={style.buttonContainer}>
            <Button>Adicionar</Button>
        </div>
      </form>
    )
  }
}
