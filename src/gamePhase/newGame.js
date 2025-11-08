import { MAX_MOVES_FOR_X, MAX_MOVES_FOR_O } from "../constants";
export default function newGame(movesMadeByPlayers) {
	const totalMoves = movesMadeByPlayers.length;
	return totalMoves === 0
		? `New Game!!! Moves left => X : ${MAX_MOVES_FOR_X}, O : ${MAX_MOVES_FOR_O}`
		: null;
}
