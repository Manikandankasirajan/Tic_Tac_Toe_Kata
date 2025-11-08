export default function validateMoves(movesMadeByPlayers) {
	const markedPositions = [];

	for (const move of movesMadeByPlayers) {
		for (const player in move) {
			const currPosition = move[player];
			if (markedPositions.find((position) => position === currPosition)) {
				throw new Error(
					"Invalid Move! position already marked, please try different position"
				);
			} else {
				markedPositions.push(move[player]);
			}
		}
	}
}
