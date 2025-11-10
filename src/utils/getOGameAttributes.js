import getMovesMadeByPlayer from "./getMovesMadeByPlayer";
import getPlayerPositions from "./getPlayerPositions";
import { WIN_COMBINATIONS } from "../constants";
export default function getOGameAttributes(movesMadeByPlayers) {
	const oMoves = getMovesMadeByPlayer(movesMadeByPlayers, "O");
	const oPositions = getPlayerPositions(oMoves);
	const oResult = WIN_COMBINATIONS.map((combination) =>
		combination.filter((comb) => oPositions.includes(comb))
	).filter((result) => result.length === 3);
	return [oMoves, oResult];
}
