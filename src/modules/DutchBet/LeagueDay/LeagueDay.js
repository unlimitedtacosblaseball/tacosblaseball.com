import { useRef, useEffect } from 'react';

import styles from './LeagueDay.module.css'

const LeagueDay = (props) => {
	const day = props.day;
	const curRef = useRef();
	
	function giveCurrentDay() {
		return day;
	}
	
	useEffect(() => {
		if (props.day == props.curDay) {
			curRef.current.scrollIntoView();
		}
	});
	
	return <div ref={curRef} onClick={giveCurrentDay} className={styles.leagueScheduleDayWrapper} name={day.toString()} key={day.toString()}>
			<div className={styles.leagueScheduleDay}>
				<div className={styles.leagueScheduleDayNum}>{day.toString()}</div>
			</div>
	  </div>
}

export default LeagueDay