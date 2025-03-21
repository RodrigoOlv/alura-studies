import React from 'react'
import style from './Button.module.scss'

export default class Button extends React.Component <{children: React.ReactNode, type?: 'button' | 'submit' | 'reset' | undefined }> {
    render() {
      const { type } = this.props;

      return (
        <button className={style.button} type={type}>
          { this.props.children }
        </button>
      )
   }
}
