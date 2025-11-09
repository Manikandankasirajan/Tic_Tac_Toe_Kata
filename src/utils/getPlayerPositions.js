export default function getPlayerPositions(moves) {
	const positions = moves.map((move) => {
		for (const player in move) {
			return move[player];
		}
	});
	return positions;
}
