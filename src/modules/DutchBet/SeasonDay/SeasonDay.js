

import styles from './SeasonDay.module.css'
import LeagueDay from '../LeagueDay/LeagueDay'

const SeasonDay = (props) => {
  
  const curDay = props.curDay;
  const maxDay = (curDay + 9 < 98 ? curDay + 9 : 98);
  const days = [];

  for (let i = 0; i < maxDay; i++) {
    days.push(i+1);
  }

  return <div className={styles.betSchedule}>
    <div className={styles.betDate}>
      <div className={styles.betLine}>
        Season
        <span className={styles.betCallout}>
          {props.season + 1}
        </span>
      </div>
      <div className={styles.betLine}>
        Day
        <span className={styles.betCallout}>
          {curDay + 1}
        </span>
      </div>
    </div>
    <div className={[styles.leagueScrollWrapper, styles.leagueBets].join(" ")}>
      <div className={styles.leagueScroll}>
        <div className={styles.leagueWrapper}>
          <div className={[styles.leagueSchedule, styles. leagueScheduleBets].join(" ")} id={styles.scheduleContainer} name="Container">
            {days.map((days) => (
              <LeagueDay days={days} curDay={curDay} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default SeasonDay