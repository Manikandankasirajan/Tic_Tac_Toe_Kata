import game from "../game";
test("to return 'New Game!!! Moves left => X : 5, O : 4' for new game", () => {
	const movesMadeByPlayers = [];
	expect(game(movesMadeByPlayers)).toBe(
		"New Game!!! Moves left => X : 5, O : 4"
	);
});

test("to return 'Invalid Move! X should make the first move' when O makes the first move", () => {
	const movesMadeByPlayers = [{ O: "A1" }];
	expect(game(movesMadeByPlayers)).toBe(
		"Invalid Move! X should make the first move"
	);
});

test("to return 'Moves left => X : 4, O : 4' when game in progress", () => {
	const movesMadeByPlayers = [{ X: "A1" }];
	expect(game(movesMadeByPlayers)).toBe("Moves left => X : 4, O : 4");
});
test("to return 'Moves left => X : 4, O : 3' when game in progress", () => {
	const movesMadeByPlayers = [{ X: "A1" }, { O: "A2" }];
	expect(game(movesMadeByPlayers)).toBe("Moves left => X : 4, O : 3");
});
