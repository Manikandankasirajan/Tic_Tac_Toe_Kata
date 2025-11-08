import { MAX_MOVES_FOR_O, MAX_MOVES_FOR_X } from "../constants";

export default function gameInProgress(movesMadeByPlayers) {
	const xMoves = movesMadeByPlayers.filter((move) => {
		for (const player in move) {
			return player === "X";
		}
	});
	const oMoves = movesMadeByPlayers.filter((move) => {
		for (const player in move) {
			return player === "O";
		}
	});
	return `Moves left => X : ${MAX_MOVES_FOR_X - xMoves.length}, O : ${
		MAX_MOVES_FOR_O - oMoves.length
	}`;
}
