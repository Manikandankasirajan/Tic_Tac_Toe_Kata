import getMovesMadeByPlayer from "./getMovesMadeByPlayer";
import getPlayerPositions from "./getPlayerPositions";

const xMoves = getMovesMadeByPlayer(movesMadeByPlayers, "X");
const oMoves = getMovesMadeByPlayer(movesMadeByPlayers, "O");
const xPositions = getPlayerPositions(xMoves);
const oPositions = getPlayerPositions(oMoves);
export const xResult = WIN_COMBINATIONS.map((combination) =>
	combination.filter((comb) => xPositions.includes(comb))
).filter((result) => result.length === 3);

export const oResult = WIN_COMBINATIONS.map((combination) =>
	combination.filter((comb) => oPositions.includes(comb))
).filter((result) => result.length === 3);

export default function winPrediction() {
	return xResult.length > 0 || oResult.length > 0;
}
