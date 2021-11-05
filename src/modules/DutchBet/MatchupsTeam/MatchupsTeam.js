import styles from './MatchupsTeam.module.css'

export default function MatchupsTeam(props) {
		
	return (
		<>
			<div className={`${styles.betListMatchupsTeam} ${styles[props.selected]}`}>
			<div className={styles.betListMatchupsTeamIcon} style={{backgroundColor: props.teamColor}}>
				{props.teamEmoji}
			</div>
			<div className={styles.betListMatchupsTeamOdds}>
				{props.odds + "%"}
			</div>
		</div>
	</>
);
}