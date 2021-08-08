<template>
	<div>
		<Number :number="flagRemainCount" />
	</div>
</template>

<script lang="ts">
	import Vue from "vue";

	import Number from "@/components/header/Number.vue";
	import {mapGetters} from "vuex";

	export default Vue.extend({
		components: {
			Number
		},
		computed: {
			...mapGetters("flagCount", ["flagRemainCount"])
		}
	});
</script>

<style lang="scss"></style>
