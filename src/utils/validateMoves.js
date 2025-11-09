import { GAME_POSITIONS } from "../constants";
export default function validateMoves(movesMadeByPlayers) {
	const markedPositions = [];

	for (const move of movesMadeByPlayers) {
		for (const player in move) {
			const currPosition = move[player];
			if (GAME_POSITIONS.find((position) => position == currPosition)) {
				if (markedPositions.find((position) => position === currPosition)) {
					throw new Error(
						"Invalid Move! position already marked, please try different position"
					);
				} else {
					markedPositions.push(move[player]);
				}
			} else {
				throw new TypeError("Invalid Position");
			}
		}
	}
}
