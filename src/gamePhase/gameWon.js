import { WIN_COMBINATIONS } from "../constants";
import getMovesMadeByPlayer from "../utils/getMovesMadeByPlayer";
import getPlayerPositions from "../utils/getPlayerPositions";

export default function gameWon(movesMadeByPlayers) {
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

	if (xResult.length > 0) {
		return "X Wins!!!";
	}
	if (oResult.length > 0) {
		return "O Wins!!!";
	}
}
