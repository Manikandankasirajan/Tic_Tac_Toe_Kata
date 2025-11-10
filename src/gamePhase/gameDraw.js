import { MAX_MOVES_FOR_O, MAX_MOVES_FOR_X } from "../constants";
import isWinPossible from "../utils/isWinPossible";
import getXGameAttributes from "../utils/getXGameAttributes";
import getOGameAttributes from "../utils/getOGameAttributes";

export default function gameDraw(movesMadeByPlayers) {
	const [xMoves, xResult] = getXGameAttributes(movesMadeByPlayers);
	const [oMoves, oResult] = getOGameAttributes(movesMadeByPlayers);
	return (
		xMoves.length === MAX_MOVES_FOR_X &&
		oMoves.length === MAX_MOVES_FOR_O &&
		!isWinPossible(xResult, oResult) &&
		"Game is Draw!!!"
	);
}
