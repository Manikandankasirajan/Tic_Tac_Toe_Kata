import { MAX_MOVES_FOR_O, MAX_MOVES_FOR_X } from "../constants";
import getMovesMadeByPlayer from "../utils/getMovesMadeByPlayer";
import validateMoves from "../utils/validateMoves";

export default function gameInProgress(movesMadeByPlayers) {
	validateMoves(movesMadeByPlayers);
	const xMoves = getMovesMadeByPlayer(movesMadeByPlayers, "X");
	const oMoves = getMovesMadeByPlayer(movesMadeByPlayers, "O");
	return `Moves left => X : ${MAX_MOVES_FOR_X - xMoves.length}, O : ${
		MAX_MOVES_FOR_O - oMoves.length
	}`;
}
