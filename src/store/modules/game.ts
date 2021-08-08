import {appConfig} from "@/utils/appConfig";

const state = {
	win: true,
	loss: false,
	gameLevelConfig: undefined,
	gameLevel: appConfig.startGameLevel
};

const actions = {
	startNewGame({dispatch, commit, getters}: any): void {
		dispatch("updateGameLevelConfig");
		dispatch("board/initBoardState", getters.getBombsCount, {root: true});
		dispatch("timer/newTimer", null, {root: true});
		dispatch("flagCount/setFlagCount", null, {root: true});
		commit("startNewGame");
	},

	updateGameLevelConfig({commit, state}: any) {
		commit("updateGameLevelConfig", state.gameLevel);
	},

	setWin({dispatch, commit}: any) {
		dispatch("timer/stopTimer", null, {root: true});
		commit("setWin");
	},
	setLoss({dispatch, commit}: any) {
		dispatch("timer/stopTimer", null, {root: true});
		commit("setLoss");
	}
};

const mutations = {
	startNewGame(state: {win: boolean; loss: boolean}): void {
		state.win = false;
		state.loss = false;
	},
	updateGameLevelConfig(state: any, gameLevel: string) {
		state.gameLevelConfig = appConfig.getLevelConfig(gameLevel);
	},
	setWin(state: any) {
		state.win = true;
	},
	setLoss(state: any) {
		state.loss = true;
	},
	setGameLevel(state: any, gameLevel: string) {
		state.gameLevel = gameLevel;
	}
};

const getters = {
	getBombsCount(state: any) {
		return state.gameLevelConfig.bombCount;
	},
	getWidthCellCount(state: any) {
		return state.gameLevelConfig.widthCellCount;
	},
	getHeightCellCount(state: any): string {
		return state.gameLevelConfig.heightCellCount;
	},
	isWin(state: any) {
		return state.win;
	},
	isLoss(state: any) {
		return state.loss;
	}
};

export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
};
