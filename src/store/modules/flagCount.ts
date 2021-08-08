const state = {
	flagTotalCount: undefined,
	flagRemainCount: undefined
};

const actions = {
	setFlagCount({rootGetters, commit}: any, num: any) {
		let flagCount: number = rootGetters["game/getBombsCount"];

		commit("setFlagCount", flagCount);
	},
	updateFlagCount({rootGetters, getters, commit, dispatch}: any, {i, j}: any) {
		function isCorrectDecrement() {
			return 0 < getters.flagRemainCount ? true : false;
		}

		let boardState: any = rootGetters["board/getBoardState"];

		const isFlag: boolean = boardState[i][j].isFlag;

		if (!isFlag && isCorrectDecrement()) {
			commit("board/addFlag", {i, j}, {root: true});
			commit("decrementFlagRemainCount");
		} else if (isFlag) {
			commit("board/removeFlag", {i, j}, {root: true});
			commit("incrementFlagRemainCount");
		}

		if (rootGetters["flagCount/flagRemainCount"] === 0) {
			dispatch("board/checkWin", null, {root: true});
		}
	}
};

const mutations = {
	setFlagCount(state: any, num: number) {
		state.flagRemainCount = num;
		state.flagTotalCount = num;
	},
	decrementFlagRemainCount(state: any) {
		state.flagRemainCount -= 1;
	},
	incrementFlagRemainCount(state: any) {
		state.flagRemainCount += 1;
	}
};

const getters = {
	flagRemainCount(state: any) {
		return state.flagRemainCount;
	},
	flagTotalCount(state: any) {
		return state.flagTotalCount;
	}
};

export default {namespaced: true, state, actions, mutations, getters};
