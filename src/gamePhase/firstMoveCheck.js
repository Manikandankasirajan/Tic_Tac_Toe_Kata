export default function firstMoveCheck(movesMadeByPlayers) {
	const totalMoves = movesMadeByPlayers.length;
	if (totalMoves === 1) {
		for (const move of movesMadeByPlayers) {
			for (const player in move) {
				return player === "O"
					? "Invalid Move! X should make the first move"
					: null;
			}
		}
	}
}
