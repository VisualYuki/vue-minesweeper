import {cloneDeep, clone, random, result} from "lodash";
import cellType from "@/types/cell";
import cellStatus from "@/types/cellStatus";
import Vue from "vue";

const cell: cellType = {
	status: cellStatus.isEmpty,
	bombHint: 0,
	opened: false,
	isTriggerBomb: false,
	isDefusedbomb: false,
	isFlag: false
};

function getSiblingArrayIndexes(i: number, j: number) {
	let result: any = [
		{i: i - 1, j: j - 1},
		{i: i, j: j - 1},
		{i: i - 1, j: j},
		{i: i + 1, j: j},
		{i: i, j: j + 1},
		{i: i - 1, j: j + 1},
		{i: i + 1, j: j - 1},
		{i: i + 1, j: j + 1}
	];

	return result;
}

function isValidArrayIndexes(boardState: cellType[][], i: number, j: number): boolean {
	if (0 <= i && i < boardState.length && 0 <= j && j < boardState[0].length) {
		return true;
	} else {
		return false;
	}
}

const state = {
	remainedBombCount: undefined,
	boardState: []
};

const actions = {
	initBoardState({commit, rootGetters, state}: any, bombCount: number) {
		function clearBoardState() {
			for (let i = 0; i < widthCellCount; i++) {
				Vue.set(boardState, i, []);

				for (let j = 0; j < heightCellCount; j++) {
					boardState[i][j] = cloneDeep(cell);
				}
			}
		}

		function setBombs() {
			let remainingBombs = bombCount;

			while (remainingBombs) {
				const randI = random(0, widthCellCount - 1);
				const randJ = random(0, heightCellCount - 1);

				if (boardState[randI][randJ].status === cellStatus.isEmpty) {
					boardState[randI][randJ].status = cellStatus.hasBomb;

					remainingBombs -= 1;
				}
			}
		}

		function setNumberBombHint() {
			function calcSiblingBombCount(boardState: cellType[][], i: number, j: number) {
				let result = 0;

				function checkParentCell(i: number, j: number): number {
					if (isValidArrayIndexes(boardState, i, j) && boardState[i][j].status === cellStatus.hasBomb) {
						return 1;
					} else {
						return 0;
					}
				}

				for (let siblingIndexes of getSiblingArrayIndexes(i, j)) {
					result += checkParentCell(siblingIndexes.i, siblingIndexes.j);
				}

				return result;
			}

			for (let i = 0; i < widthCellCount; i++) {
				for (let j = 0; j < heightCellCount; j++) {
					if (boardState[i][j].status === cellStatus.isEmpty) {
						boardState[i][j].bombHint = calcSiblingBombCount(boardState, i, j);
					}
				}
			}
		}

		commit("setBombCount", bombCount);

		const widthCellCount = rootGetters["game/getWidthCellCount"];
		const heightCellCount = rootGetters["game/getHeightCellCount"];
		const boardState = state.boardState;

		clearBoardState();
		setBombs();
		setNumberBombHint();
	},
	cellClickHandler({state, commit, dispatch}: any, {i, j}: any) {
		function findSiblingEmptyCells(boardState: cellType[][], i: number, j: number) {
			if (isValidArrayIndexes(boardState, i, j)) {
				const _cell: any = boardState[i][j];

				if (_cell !== undefined && _cell.opened === false) {
					commit("openCell", {i, j});
					if (_cell.bombHint === 0) {
						for (let siblingIndexes of getSiblingArrayIndexes(i, j)) {
							findSiblingEmptyCells(boardState, siblingIndexes.i, siblingIndexes.j);
						}
					}
				}
			}
		}

		const cell: cellType = state.boardState[i][j];

		if (!cell.isFlag) {
			if (cell.status === cellStatus.isEmpty) {
				findSiblingEmptyCells(state.boardState, i, j);
			} else if (cell.status === cellStatus.hasBomb) {
				commit("setTriggerBomb", {i, j});
				commit("openCell", {i, j});
				dispatch("game/setLoss", null, {root: true});
			} else {
				console.log("error in cellClickHandler() vuex Board.ts ");
			}

			const clone: any = cloneDeep(state.boardState);
			state.boardState = clone;
		}

		dispatch("checkWin");
	},
	checkWin({state, rootGetters, dispatch}: any) {
		let boardState: cellType[][] = state.boardState;
		let isWin = true;

		for (let i = 0; i < boardState.length; i++) {
			for (let j = 0; j < boardState[0].length; j++) {
				if (!boardState[i][j].opened && !boardState[i][j].isFlag) {
					isWin = false;
				}
			}
		}

		if (isWin) {
			dispatch("game/setWin", null, {root: true});
		}
	}
};

const mutations = {
	setBombCount(state: any, bombCount: number) {
		state.remainedBombCount = bombCount;
	},
	openCell(state: any, payload: any) {
		state.boardState[payload.i][payload.j].opened = true;
	},
	setTriggerBomb(state: any, {i, j}: any) {
		state.boardState[i][j].isTriggerBomb = true;
	},
	addFlag(state: any, {i, j}: any) {
		state.boardState[i][j].isFlag = true;

		// todo
		const clone: any = cloneDeep(state.boardState);
		state.boardState = clone;
	},
	removeFlag(state: any, {i, j}: any) {
		state.boardState[i][j].isFlag = false;

		// todo
		const clone: any = cloneDeep(state.boardState);
		state.boardState = clone;
	}
};

const getters = {
	getBoardState(state: any) {
		return state.boardState;
	}
};

export default {namespaced: true, state, actions, mutations, getters};
