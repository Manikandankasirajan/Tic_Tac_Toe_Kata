import { MAX_MOVES_FOR_O, MAX_MOVES_FOR_X } from "../constants";
import validateMoves from "../utils/validateMoves";
import isWinPossible from "../utils/isWinPossible";
import getXGameAttributes from "../utils/getXGameAttributes";
import getOGameAttributes from "../utils/getOGameAttributes";

export default function gameInProgress(movesMadeByPlayers) {
	validateMoves(movesMadeByPlayers);
	const [xMoves, xResult] = getXGameAttributes(movesMadeByPlayers);
	const [oMoves, oResult] = getOGameAttributes(movesMadeByPlayers);
	if (xMoves.length < MAX_MOVES_FOR_X && oMoves.length < MAX_MOVES_FOR_O) {
		if (!isWinPossible(xResult, oResult)) {
			return `Moves left => X : ${MAX_MOVES_FOR_X - xMoves.length}, O : ${
				MAX_MOVES_FOR_O - oMoves.length
			}`;
		}
	}
}
