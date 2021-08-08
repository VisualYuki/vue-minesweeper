const state = {
	secondCount: undefined,
	intervalId: undefined
};

const actions = {
	newTimer({state, commit, dispatch}: any): void {
		commit("resetSeconds");
		dispatch("stopTimer");
		const MAX_SECONDS = 999;
		const MILLICESONDS_IN_SECOND = 1000;

		state.intervalId = setInterval(function() {
			if (MAX_SECONDS === state.secondCount) {
				dispatch("stopTimer");
			} else {
				commit("incrementSecondCount");
			}
		}, MILLICESONDS_IN_SECOND);
	},
	stopTimer({state}: any) {
		clearInterval(state.intervalId);
	}
};

const mutations = {
	incrementSecondCount(state: any) {
		state.secondCount += 1;
	},
	resetSeconds(state: any) {
		state.secondCount = 0;
	}
};

const getters = {};

export default {namespaced: true, state, actions, mutations, getters};
