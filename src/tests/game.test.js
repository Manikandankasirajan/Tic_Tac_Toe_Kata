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

test("to throw error 'Invalid Move! position already marked please try different position' when player try to mark already marked position", () => {
	const movesMadeByPlayers = [{ X: "A1" }, { O: "A2" }, { X: "A1" }];
	expect(() => game(movesMadeByPlayers)).toThrow();
	expect(() => game(movesMadeByPlayers)).toThrow(Error);
	expect(() => game(movesMadeByPlayers)).toThrow(
		"Invalid Move! position already marked, please try different position"
	);
});

describe("test cases to validate if program can identity when players win by marking three consecutive horizontal positions", () => {
	test("to return 'Player X Wins!!!' if position marked by X matches the win combination", () => {
		const movesMadeByPlayers = [
			{ X: "A1" },
			{ O: "B2" },
			{ X: "A3" },
			{ O: "B3" },
			{ X: "A2" },
		];
		expect(game(movesMadeByPlayers)).toBe("X Wins!!!");
	});
	test("to return 'Player O Wins!!!' if position marked by O matches the win combination", () => {
		const movesMadeByPlayers = [
			{ X: "A1" },
			{ O: "B2" },
			{ X: "A3" },
			{ O: "B3" },
			{ X: "C1" },
			{ O: "B1" },
		];
		expect(game(movesMadeByPlayers)).toBe("O Wins!!!");
	});
});
describe("test cases to validate if program can identity when players win by marking three consecutive vertical positions", () => {
	test("to return 'Player X Wins!!!' if position marked by X matches the win combination", () => {
		const movesMadeByPlayers = [
			{ X: "A1" },
			{ O: "B2" },
			{ X: "B1" },
			{ O: "A3" },
			{ X: "C1" },
		];
		expect(game(movesMadeByPlayers)).toBe("X Wins!!!");
	});
	test("to return 'Player O Wins!!!' if position marked by O matches the win combination", () => {
		const movesMadeByPlayers = [
			{ X: "A1" },
			{ O: "B2" },
			{ X: "C1" },
			{ O: "C2" },
			{ X: "A3" },
			{ O: "A2" },
		];
		expect(game(movesMadeByPlayers)).toBe("O Wins!!!");
	});
});
describe("test cases to validate if program can identity when players win by marking three consecutive diagonal positions", () => {
	test("to return 'Player X Wins!!!' if position marked by X matches the win combination", () => {
		const movesMadeByPlayers = [
			{ X: "A1" },
			{ O: "A3" },
			{ X: "C3" },
			{ O: "C1" },
			{ X: "B2" },
		];
		expect(game(movesMadeByPlayers)).toBe("X Wins!!!");
	});
	test("to return 'Player O Wins!!!' if position marked by O matches the win combination", () => {
		const movesMadeByPlayers = [
			{ X: "A1" },
			{ O: "C1" },
			{ X: "C3" },
			{ O: "B2" },
			{ X: "B3" },
			{ O: "A3" },
		];
		expect(game(movesMadeByPlayers)).toBe("O Wins!!!");
	});
});

test("to return 'Game is Draw!!!' when no player can mark any three consecutive postion within allowed moves", () => {
	const movesMadeByPlayers = [
		{ X: "A1" },
		{ O: "C1" },
		{ X: "C3" },
		{ O: "B2" },
		{ X: "A3" },
		{ O: "A2" },
		{ X: "B1" },
		{ O: "B3" },
		{ X: "C2" },
	];
	expect(game(movesMadeByPlayers)).toBe("Game is Draw!!!");
});

test("to throw error for invalid input", () => {
	const movesMadeByPlayers = null;
	expect(() => game(movesMadeByPlayers)).toThrow();
	expect(() => game(movesMadeByPlayers)).toThrow(TypeError);
	expect(() => game(movesMadeByPlayers)).toThrow("Invalid Input Type");
});

test("to throw error for invalid Game Position", () => {
	const movesMadeByPlayers = [{ X: "A1" }, { O: "D1" }];
	expect(() => game(movesMadeByPlayers)).toThrow();
	expect(() => game(movesMadeByPlayers)).toThrow(TypeError);
	expect(() => game(movesMadeByPlayers)).toThrow("Invalid Position");
});
