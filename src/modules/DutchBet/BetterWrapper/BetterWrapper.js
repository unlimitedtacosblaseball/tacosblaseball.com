
import SeasonDay from '@/modules/DutchBet/SeasonDay/SeasonDay'
import Matchups from '@/modules/DutchBet/Matchups/Matchups'

import useSWR from 'swr';

const tyiliana = "https://api.sibr.dev/corsmechanics/";
const blaseballbase = "api.blaseball.com"; // or as I like to call it, Baseball
const baseurl = tyiliana + blaseballbase + "/database/simulationData";
const modurl = tyiliana + blaseballbase + "/bets/availableBets?day=";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function BetterWrapper() {
	
	const { data: result, error } = useSWR(baseurl, fetcher);
	if (error) return <p>oh no</p>;
	if(!result) return <p>Please Wait</p>
	
	return (
		<>
			<SeasonDay key={result.id} curDay={result.day} day={result} season={result.season} />
			<Matchups day={result.day} />
		</>
	);
}