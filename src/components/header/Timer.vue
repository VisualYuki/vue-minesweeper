<template>
	<div>
		<Number :number="secondCount" />
	</div>
</template>

<script lang="ts">
	import Vue from "vue";

	import Number from "@/components/header/Number.vue";
	import {mapState} from "vuex";

	export default Vue.extend({
		components: {
			Number
		},
		computed: {
			...mapState("timer", ["secondCount"])
		}
	});
</script>
<style lang="scss"></style>
