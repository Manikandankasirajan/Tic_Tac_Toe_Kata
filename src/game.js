import firstMoveCheck from "./gamePhase/firstMoveCheck";
import gameInProgress from "./gamePhase/gameInProgress";
import newGame from "./gamePhase/newGame";

export default function game(movesMadeByPlayers) {
	const gamePhase = [newGame, firstMoveCheck, gameInProgress];
	for (const phase of gamePhase) {
		const result = phase(movesMadeByPlayers);
		if (result) {
			return result;
		}
	}
}
