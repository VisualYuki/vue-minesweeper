<template>
	<div class="app">
		<div class="app__content">
			<div class="app__option">
				<Option />
			</div>
			<div class="app__game">1212</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Option from "@comp/Option.vue";
import "@/scss/custom-reset.scss";

export default Vue.extend({
	components: {
		Option
	}
});
</script>

<style lang="scss">
.app {
	@include flex(center, center);
	height: 100vh;

	font-size: 14px;

	font-family: "Times New Roman", Times, serif;

	&__content {
		max-width: 600px;
	}

	&__game {
		background-color: silver;
		border: outset 2px #eee;
	}
}
</style>
