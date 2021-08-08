import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import game from "./modules/game";
import flagCount from "./modules/flagCount";
import timer from "./modules/timer";
import number from "./modules/number";
import board from "./modules/board";
import face from "./modules/face";

export default new Vuex.Store({
	modules: {
		game,
		flagCount,
		timer,
		number,
		board,
		face
	}
});
