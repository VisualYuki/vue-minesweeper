const state = {
	isCellMousedown: false
};

const actions = {};

const mutations = {
	setCellMousedown(state: any) {
		state.isCellMousedown = true;
	},
	unsetCellMousedown(state: any) {
		state.isCellMousedown = false;
	}
};

const getters = {
	isCellMousedown(state: any) {
		return state.isCellMousedown;
	}
};

export default {namespaced: true, state, actions, mutations, getters};
