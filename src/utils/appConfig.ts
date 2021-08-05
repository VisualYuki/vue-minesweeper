export const appConfig: any = {
	levels: {
		beginner: {
			widthCellCount: 4,
			heightCellCount: 4,
			bombCount: 4
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
