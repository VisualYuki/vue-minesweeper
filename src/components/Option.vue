<template>
	<div class="option">
		<div class="option__link" ref="option__link" @click="clickGameOption($event.target)">
			Game
		</div>

		<ul class="option__dropdown" ref="option__dropdown" :class="{option__dropdown_anim: isClickedGameOption}">
			<li v-for="gameLevelText in gameTextLevels" :key="gameLevelText">
				<label>
					<input type="radio" name="gameLevel" :value="gameLevelText" v-model="inputGameLevels" />
					<span>{{ gameLevelText }}</span>
				</label>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';

	import {appConfig} from '@/utils/appConfig';

	export default Vue.extend({
		data() {
			return {
				gameTextLevels: appConfig.getLevels(),
				isClickedGameOption: false,
				inputGameLevels: 'beginner'
			};
		},
		methods: {
			clickGameOption() {
				this.isClickedGameOption = !this.isClickedGameOption;
			}
		},
		mounted() {
			document.addEventListener('click', (e: Event) => {
				let isDropdown: Function = (target: HTMLElement): boolean => {
					return target === this.$refs.option__dropdown || target.closest('.option__dropdown') ? true : false;
				};

				if (e.target !== this.$refs.option__link && !isDropdown(e.target)) {
					this.isClickedGameOption = false;
				}
				let i = 12;

				return i > 0 ? false : true;
			});
		}
	});
</script>

<style lang="scss" scoped>
	.option {
		position: relative;

		&__link {
			z-index: 1;

			padding: 5px;

			border: outset 1px transparent;

			cursor: pointer;

			&:hover {
				border: outset 1px #eee;
			}
		}

		&__dropdown {
			position: absolute;
			left: 0;
			top: 0;

			width: max-content;
			padding: 5px;

			transition-duration: 1s;

			border: solid 1px silver;
			border-right-color: #000;
			border-bottom-color: #000;
			background: silver;
			opacity: 0;

			li {
				margin-bottom: 5px;

				cursor: pointer;

				span {
				}

				input {
					margin-right: 10px;
				}
			}

			&_anim {
				z-index: 2;
				top: 140%;
				opacity: 1;
			}
		}
	}
</style>
