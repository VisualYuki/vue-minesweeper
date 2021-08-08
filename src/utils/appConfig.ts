export const appConfig: any = {
	startGameLevel: "beginner",
	levels: {
		beginner: {
			widthCellCount: 3,
			heightCellCount: 3,
			bombCount: 1
		},
		middle: {
			widthCellCount: 9,
			heightCellCount: 9,
			bombCount: 9
		},
		master: {
			widthCellCount: 14,
			heightCellCount: 14,
			bombCount: 40
		}
	},
	getLevelConfig(currentGameLevel: string): any {
		return this.levels[currentGameLevel];
	},
	getLevels(): string[] {
		let result: string[] = [];
		for (let prop in this.levels) {
			result.push(prop);
		}

		return result;
	}
};
