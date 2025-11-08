export default function getMovesMadeByPlayer(movesMadeByPlayers, playerToGet) {
	const moves = movesMadeByPlayers.filter((move) => {
		for (const player in move) {
			return player === playerToGet;
		}
	});
	return moves;
}
