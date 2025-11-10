export default function isPositionFree(movesMadeByPlayers) {
	let markedPositions = [];
	movesMadeByPlayers.forEach((move) => {
		if (
			!markedPositions.find(
				(position) => position === Object.values(move).join("")
			)
		) {
			markedPositions = [...markedPositions, Object.values(move).join("")];
		} else {
			throw new Error(
				`Invalid Move! position ${Object.values(move).join(
					""
				)} already marked, please try different position`
			);
		}
	});
}
