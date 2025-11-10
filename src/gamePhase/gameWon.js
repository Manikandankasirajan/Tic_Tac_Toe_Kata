import getOGameAttributes from "../utils/getOGameAttributes";
import getXGameAttributes from "../utils/getXGameAttributes";

export default function gameWon(movesMadeByPlayers) {
	const [, xResult] = getXGameAttributes(movesMadeByPlayers);
	const [, oResult] = getOGameAttributes(movesMadeByPlayers);
	return (
		(xResult.length > 0 && "X Wins!!!") || (oResult.length > 0 && "O Wins!!!")
	);
}
