import { useEffect, useState } from 'react'
import { ITask } from '../../types/task'
import Button from '../Button'
import Clock from './Clock'
import style from './Timer.module.scss'
import { timeToSeconds } from '../../common/utils/time'

interface ITimerProps {
  selected: ITask | undefined,
  finishTask: () => void
}

export default function Timer({selected, finishTask} : ITimerProps) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function regressTime(time: number = 0) {
    setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
        return regressTime(time - 1);
      }
      finishTask();
    }, 1000);
  }

  return (
    <div className={style.timer}>
        <p className={style.title}>Escolha um card e inicie o cronômetro.</p>
        <div className={style.clockWrapper}>
            <Clock time={time} />
        </div>
        <Button onClick={() => regressTime(time)}>
          Começar
        </Button>
    </div>
  )
}
