<template>
	<div
		class="face face_default"
		@click="startNewGame()"
		:class="{'face_click-cell': isCellMousedown, face_win: isWin, face_loss: isLoss}"
	></div>
</template>

<script lang="ts">
	import Vue from "vue";

	import {mapActions, mapGetters} from "vuex";

	export default Vue.extend({
		methods: {
			...mapActions("game", ["startNewGame"])
		},
		computed: {
			...mapGetters("face", ["isCellMousedown"]),
			...mapGetters("game", ["isWin", "isLoss"])
		}
	});
</script>

<style lang="scss">
	.face {
		width: 26px;
		height: 26px;
		margin: 0 25px;

		background-repeat: no-repeat;
		background-position: center center;
		cursor: pointer;

		&_default {
			background: url("/face_smile.png");
		}

		&_click-cell {
			background: url("/face_worry.png");
		}

		&_loss {
			background: url("/face_dead.png");
		}

		&_win {
			background: url("/face_boss.png");
		}
	}
</style>
