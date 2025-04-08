import style from './Clock.module.scss'

interface IClockProps {
  time: number | undefined
}

export default function Clock({ time = 0 }: IClockProps) {
  const minutes = String(Math.floor(time / 60)).padStart(2, '0')
  const seconds = String(time % 60).padStart(2, '0')
  const [minute1, minute2] = minutes.split('')
  const [second1, second2] = seconds.split('')

  return (
    <>
      <span className={style.clockNumber}>{minute1}</span>
      <span className={style.clockNumber}>{minute2}</span>
      <span className={style.clockDivider}>:</span>
      <span className={style.clockNumber}>{second1}</span>
      <span className={style.clockNumber}>{second2}</span>
    </>
  )
}
