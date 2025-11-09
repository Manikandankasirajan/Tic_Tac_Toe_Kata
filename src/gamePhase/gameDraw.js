import { MAX_MOVES_FOR_O, MAX_MOVES_FOR_X } from "../constants";
import getMovesMadeByPlayer from "../utils/getMovesMadeByPlayer";
import isWinPossible from "../utils/isWinPossible";
import getPlayerPositions from "../utils/getPlayerPositions";
import { WIN_COMBINATIONS } from "../constants";

export default function gameDraw(movesMadeByPlayers) {
	const xMoves = getMovesMadeByPlayer(movesMadeByPlayers, "X");
	const oMoves = getMovesMadeByPlayer(movesMadeByPlayers, "O");
	const xPositions = getPlayerPositions(xMoves);
	const oPositions = getPlayerPositions(oMoves);
	const xResult = WIN_COMBINATIONS.map((combination) =>
		combination.filter((comb) => xPositions.includes(comb))
	).filter((result) => result.length === 3);

	const oResult = WIN_COMBINATIONS.map((combination) =>
		combination.filter((comb) => oPositions.includes(comb))
    ).filter((result) => result.length === 3);
    
	if (xMoves.length === MAX_MOVES_FOR_X && oMoves.length === MAX_MOVES_FOR_O) {
		if (!isWinPossible(xResult, oResult)) {
			return "Game is Draw!!!";
		}
	}
}
