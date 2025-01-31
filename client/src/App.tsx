import { useGameStore } from './stores/gameStore';

function App() {
	const { players, addPlayer } = useGameStore();

	return (
		<div className="p-5">
			<h1 className="text-2xl font-bold">Beast Battle</h1>
			<button
				onClick={() => addPlayer('Player 1')}
				className="px-4 py-2 bg-blue-500 text-white"
			>
				Add Player
			</button>
			<ul>
				{players.map((player, idx) => (
					<li key={idx}>{player}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
