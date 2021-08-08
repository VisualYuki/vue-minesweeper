<template>
	<div class="header">
		<FlagCount />
		<Face />
		<Timer />
	</div>
</template>

<script lang="ts">
	import Vue from "vue";

	import FlagCount from "./FlagCount.vue";
	import Face from "./Face.vue";
	import Timer from "./Timer.vue";

	export default Vue.extend({
		components: {
			FlagCount,
			Face,
			Timer
		}
	});
</script>

<style lang="scss">
	.header {
		@include flex(space-between, center);
		margin-bottom: 6px;
		padding: 6px 8px;

		border: inset 2px #eee;

		text-align: center;
	}
</style>
