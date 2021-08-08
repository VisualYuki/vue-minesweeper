<template>
	<div class="app">
		<div class="app__content">
			<div class="app__option">
				<Option />
			</div>
			<div class="app__game">
				<Header />
				<Board />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	import "@/scss/custom-reset.scss";

	import Option from "@comp/Option.vue";
	import Header from "@comp/header/Header.vue";
	import Board from "@/components/Board.vue";

	export default Vue.extend({
		components: {
			Option,
			Header,
			Board
		},
		created() {
			this.$store.dispatch("game/startNewGame");
		}
	});
</script>

<style lang="scss">
	.app {
		@include flex(center, flex-start);
		height: 100vh;
		margin-top: 100px;

		font-size: 14px;
		font-family: "Times New Roman", Times, serif;

		user-select: none;
		&__content {
			max-width: 600px;
		}

		&__game {
			padding: 6px;

			background-color: silver;
			border: outset 2px #eee;
		}
	}
</style>
