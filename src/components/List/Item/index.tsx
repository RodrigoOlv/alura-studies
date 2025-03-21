import style from '../List.module.scss'
import { ITask } from '../../../types/task'

interface Props extends ITask {
  selectTask: (task: ITask) => void
}

export default function Item({ task, time, selected, completed, id, selectTask } : Props) {
  return (
    <li
      className={`${style.item} ${selected ? style.selectedItem : ''}`}
      onClick={() => selectTask({ task, time, selected, completed, id })}
    >
        <h3>{task}</h3>
        <span>{time}</span>
    </li>
  )
}
