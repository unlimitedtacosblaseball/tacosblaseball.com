import styles from "./SeasonDay.module.css";
import LeagueDay from "../LeagueDay/LeagueDay";

const SeasonDay = ({ day, curDay, setDay, season }) => {
  const maxDay = curDay + 12; // TODO: Replace this with the api based solution
  const days = [];

  for (let i = 0; i < maxDay; i++) {
    days.push(i + 1);
  }

  return (
    <div className={styles.betSchedule}>
      <div className={styles.betDate}>
        <div className={styles.betLine}>
          Season
          <span className={styles.betCallout}>{season + 1}</span>
        </div>
        <div className={styles.betLine}>
          Day
          <span className={styles.betCallout}>{day}</span>
        </div>
      </div>
      <div
        className={[styles.leagueScrollWrapper, styles.leagueBets].join(" ")}
      >
        <div className={styles.leagueScroll}>
          <div className={styles.leagueWrapper}>
            <div
              className={[
                styles.leagueSchedule,
                styles.leagueScheduleBets,
              ].join(" ")}
              id={styles.scheduleContainer}
              name="Container"
            >
              {days.map((day) => (
                <LeagueDay onClick={() => setDay(day)} day={day} key={day} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonDay;
