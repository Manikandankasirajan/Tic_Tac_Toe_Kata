import game from "../game";
test("to return 'New Game!!! Moves left => X : 5, O : 4' for new game", () => {
	const movesMadeByPlayers = [];
	expect(game(movesMadeByPlayers)).toBe(
		"New Game!!! Moves left => X : 5, O : 4"
	);
});
