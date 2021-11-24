import styles from "./Matchups.module.css";
import MatchupsTeam from "@/modules/DutchBet/MatchupsTeam/MatchupsTeam";

export default function Matchups(props) {
  let username = "evie tacos";
  let group = "14";

  {
    /* gameBase = [
		{id: null, sim: null, season: null, day: null, away: Team, home: Team}
	]; */
  }

  {
    /* teamBase = [
		{id: null, nickname: null, color: null, emoji: null, odds: null, payout: null}
	]; */
  }

  {
    /* const { data: game, error } = useSWR(url, fetcher);
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
	}]; */
  }

  {
    /* function picksgen() {
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
	
	const picks = picksgen(); */
  }

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
