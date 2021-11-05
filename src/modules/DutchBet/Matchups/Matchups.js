import styles from './Matchups.module.css'
import MatchupsTeam from '@/modules/DutchBet/MatchupsTeam/MatchupsTeam'

import useSWR from 'swr';

const tyiliana = "https://api.sibr.dev/corsmechanics/";
const blaseballbase = "api.blaseball.com"; // or as I like to call it, Baseball
const baseurl = tyiliana + blaseballbase + "/database/simulationData";
const modurl = tyiliana + blaseballbase + "/bets/availableBets?day=";

{/* const fetcher = (...args) => fetch(...args).then((res) => res.json());

function getPayout(e) {
	var t = 0;
	if (e && 1 === e.length && e[0] && e[0].payout) t = e[0].payout;
	else if (e.length > 0) {
		var a = 0,
			n = Math.pow(0.777, e.length),
			r = 1;
		e.forEach(function (e) {
			if (e && e.payout && e.odds) {
				var t = e.payout;
				a += t;
				var s = e.odds * (1 - n) + 0.5 * n;
				r *= s;
			}
		}),
			(t = (a * (1 / r)) / (e.length + 1));
	}
	return Math.round(t);
} */}

export default function Matchups(props) {
	
	let username = "evie tacos";
	let group = "14";
	
	const url = modurl + props.day;
	
	{/* gameBase = [
		{id: null, sim: null, season: null, day: null, away: Team, home: Team}
	]; */}
	
	{/* teamBase = [
		{id: null, nickname: null, color: null, emoji: null, odds: null, payout: null}
	]; */}
	
	{/* const { data: game, error } = useSWR(url, fetcher);
	if(error) return <p>fuck</p>;
	if(!game) return <p>Please Wait</p>;
	
	const games = [{
		id: game.id,
		sim: game.sim,
		season: game.season,
		day: game.day,
		away: {
			payout: getPayout(game.awayTeam),
			id: game.awayTeam,
			nickname: game.awayTeamNickname,
			color: game.awayTeamColor,
			emoji: game.awayTeamEmoji,
			odds: game.awayOdds,
		},
		home: {
			payout: getPayout(game.homeTeam),
			id: game.homeTeam,
			nickname: game.homeTeamNickname,
			color: game.homeTeamColor,
			emoji: game.homeTeamEmoji,
			odds: game.homeTeamOdds,
		},
	}]; */}
	
	{/* function picksgen() {
		let picks = [];
		for (let i = 0; i < 4; i++) {
			picks.push({id:0, team: team[Math.floor(Math.random() * 24)], notteam: team[Math.floor(Math.random() *24)]});
		}

		return picks;
	}
	
	function coinFlip() {
		return ((Math.floor(Math.random() *2) % 2))
	}

	let games = [
		{id: 0, day: 69, picks: picksgen()},
		{id: 1, day: 69, picks: picksgen()},
		{id: 2, day: 69, picks: picksgen()},
		{id: 3, day: 69, picks: picksgen()},
		{id: 4, day: 69, picks: picksgen()}
	];
	
	const picks = picksgen(); */}
	
	return (
		<>
			{/* <p><strong>Logged in as {username} — Group: {group}</strong><br/> Your teams for this day are:</p>
			<ul className={styles.betListMatchups}>
				{picks.map((picks) => (
					<div className={styles.betListMatchupsGroup}>
						<MatchupsTeam selected="Selected" teamColor={picks.team.color} teamEmoji={picks.team.emoji} odds="50" />
						<MatchupsTeam selected="Fade" teamColor={picks.notteam.color} teamEmoji={picks.notteam.emoji} odds="50" />
					</div>
				))}
			</ul> */}
		</>
	);
}