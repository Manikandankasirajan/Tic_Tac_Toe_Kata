import isPositionFree from "./isPositionFree.js";
import isPositionValid from "./isPositionValid.js";
export default function validateMoves(movesMadeByPlayers) {
	isPositionValid(movesMadeByPlayers);
	isPositionFree(movesMadeByPlayers);
}
