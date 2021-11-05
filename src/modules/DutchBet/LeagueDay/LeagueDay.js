import { useRef, useEffect } from 'react';

import styles from './LeagueDay.module.css'

const LeagueDay = (props) => {
	const days = props.days;
	const curRef = useRef();
	
	function giveCurrentDay() {
		console.log(days);
		return days;
	}
	
	useEffect(() => {
		if (props.days == props.curDay) {
			curRef.current.scrollIntoView();
		}
	});
	
	return <div ref={curRef} onClick={giveCurrentDay} className={styles.leagueScheduleDayWrapper} name={days.toString()} key={days.toString()}>
			<div className={styles.leagueScheduleDay}>
				<div className={styles.leagueScheduleDayNum}>{days.toString()}</div>
			</div>
	  </div>
}

export default LeagueDay