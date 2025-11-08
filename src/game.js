import newGame from "./gamePhase/newGame";

export default function game(movesMadeByPlayers) {
	const gamePhase = [newGame];
	for (const phase of gamePhase) {
		const result = phase(movesMadeByPlayers);
		if (result) {
			return result;
		}
	}
}
