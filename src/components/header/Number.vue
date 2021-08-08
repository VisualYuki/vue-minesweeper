<template>
	<div class="number">
		<img class="number__digit1 number__digit" :src="getImg(1)" />
		<img class="number__digit2 number__digit" :src="getImg(2)" />
		<img class="number__digit3 number__digit" :src="getImg(3)" />
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	import {mapGetters} from "vuex";

	export default Vue.extend({
		props: {
			number: {
				type: Number,
				default: 0,
				required: true,
				validator: function(value: number): boolean {
					return value.toString().length <= 3 ? true : false;
				}
			}
		},
		methods: {
			//...mapGetters(["getImg"])
			getImg(order: 1 | 2 | 3) {
				return this.$store.getters.getImg(order, this.number);
			}
		}
	});
</script>

<style lang="scss" scoped>
	.number {
		@include flex(flex-start, center);
	}
</style>
