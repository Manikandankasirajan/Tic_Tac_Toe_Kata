import { GAME_POSITIONS } from "../constants.js";

export default function isPositionValid(movesMadeByPlayers) {
	movesMadeByPlayers.forEach((move) => {
		if (
			!GAME_POSITIONS.find(
				(position) => position === Object.values(move).join("")
			)
		) {
			throw new TypeError("Invalid Position");
		}
	});
}
