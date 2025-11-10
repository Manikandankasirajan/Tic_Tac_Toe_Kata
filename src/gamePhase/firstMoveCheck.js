export default function firstMoveCheck(movesMadeByPlayers) {
	const firstMove = movesMadeByPlayers.at(0);
	for (const player in firstMove) {
		return player !== "X" && "Invalid Move! X should make the first move";
	}
}
