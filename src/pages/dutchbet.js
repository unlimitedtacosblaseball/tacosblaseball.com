import BetterWrapper from '@/modules/DutchBet/BetterWrapper/BetterWrapper'

export default function DutchBet() {

	// i stole this from iliana ty iliana
	// const [sim, setSim] = useState({
	// 	loading: false,
	// 	data: null,
	// });
	// 
	// useEffect(() => {
	// 	setSim({ loading: true });
	// 	const apiUrl = tyiliana + blaseballbase + '/database/simulationData';
	// 	fetch(apiUrl)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setSim({ loading: false, data: data });
	// 		})
	// 		.then((data) => console.log(sim.data));
	// }, [setSim]);
	
	return (
		<>
			<BetterWrapper />
		</>
	);
}