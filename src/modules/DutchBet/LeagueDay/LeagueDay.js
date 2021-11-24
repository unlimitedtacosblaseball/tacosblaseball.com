import styles from "./LeagueDay.module.css";

const LeagueDay = ({ day, onClick }) => {
  return (
    <div className={styles.leagueScheduleDayWrapper} onClick={onClick}>
      <div className={styles.leagueScheduleDay}>
        <div className={styles.leagueScheduleDayNum}>{day}</div>
      </div>
    </div>
  );
};

export default LeagueDay;
