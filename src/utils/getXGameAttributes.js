import getMovesMadeByPlayer from "./getMovesMadeByPlayer";
import getPlayerPositions from "./getPlayerPositions";
import { WIN_COMBINATIONS } from "../constants";
export default function getXGameAttributes(movesMadeByPlayers) {
	const xMoves = getMovesMadeByPlayer(movesMadeByPlayers, "X");
	const xPositions = getPlayerPositions(xMoves);
	const xResult = WIN_COMBINATIONS.map((combination) =>
		combination.filter((comb) => xPositions.includes(comb))
	).filter((result) => result.length === 3);
	return [xMoves, xResult];
}
