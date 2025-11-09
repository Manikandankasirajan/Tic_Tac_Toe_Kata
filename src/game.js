import firstMoveCheck from "./gamePhase/firstMoveCheck";
import gameDraw from "./gamePhase/gameDraw";
import gameInProgress from "./gamePhase/gameInProgress";
import gameWon from "./gamePhase/gameWon";
import newGame from "./gamePhase/newGame";

export default function game(movesMadeByPlayers) {
	if (!Array.isArray(movesMadeByPlayers)) {
		throw new TypeError("Invalid Input Type");
	}

	const gamePhase = [
		newGame,
		firstMoveCheck,
		gameInProgress,
		gameWon,
		gameDraw,
	];
	for (const phase of gamePhase) {
		const result = phase(movesMadeByPlayers);
		if (result) {
			return result;
		}
	}
}
