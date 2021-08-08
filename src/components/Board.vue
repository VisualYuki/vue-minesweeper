<template>
	<div class="board" @mousedown="setCellMousedown" @mouseup="unsetCellMousedown">
		<div class="row" v-for="(num, i) of getHeightCellCount" :key="i">
			<div
				class="cell"
				:data-hint="getHintNumber(i, j)"
				:class="{
					cell_closed: !isOpenedCell(i, j),
					cell_bomb: isBombCell(i, j),
					cell_empty: isEmptyCell(i, j),
					'cell_bomb-trigger': isTriggerBomb(i, j),
					cell_flag: isFlag(i, j),
					'cell_defused-bomb': isDefusedBomb(i, j)
				}"
				v-for="(num, j) of getWidthCellCount"
				:key="j"
				@click="cellClickHandler({i, j})"
				@click.right.prevent="updateFlagCount({i, j})"
			></div>
		</div>
		{{ $store.getWidthCellCount }}
	</div>
</template>

<script lang="ts">
	import Vue from "vue";

	import {mapGetters, mapActions, mapMutations} from "vuex";

	export default Vue.extend({
		methods: {
			...mapActions("board", ["cellClickHandler"]),
			...mapActions("flagCount", ["updateFlagCount"]),
			...mapMutations("board", ["toggleFlag"]),
			...mapMutations("face", ["setCellMousedown", "unsetCellMousedown"]),
			getCell(i: number, j: number) {
				return this.getBoardState[i][j];
			},
			isOpenedCell(i: number, j: number) {
				return this.getCell(i, j).opened || this.isLoss;
			},
			isBombCell(i: number, j: number) {
				return this.getCell(i, j).status === -1;
			},
			isEmptyCell(i: number, j: number) {
				let cell: any = this.getCell(i, j);
				return cell.status === 0 && cell.bombHint === 0;
			},
			isHintCell(i: number, j: number) {
				let cell: any = this.getCell(i, j);
				return cell.bombHint !== 0;
			},
			isTriggerBomb(i: number, j: number) {
				let cell: any = this.getCell(i, j);
				return cell.isTriggerBomb;
			},
			isDefusedBomb(i: number, j: number) {
				let cell: any = this.getCell(i, j);
				return cell.isFlag && (this.isLoss || this.isWin);
			},
			isFlag(i: number, j: number) {
				let cell: any = this.getCell(i, j);

				return cell.isFlag;
			},
			getHintNumber(i: number, j: number) {
				let cell: any = this.getCell(i, j);

				return cell.bombHint;
			}
		},
		computed: {
			...mapGetters("game", ["getWidthCellCount", "getHeightCellCount", "isLoss", "isWin"]),
			...mapGetters("board", ["getBoardState"])
		}
	});
</script>

<style lang="scss" scoped>
	.board {
		width: max-content;
		margin: 0 auto;

		border: inset 2px #eee;
	}

	.row {
		@include flex(center, center);
	}

	.cell {
		width: 16px;
		height: 16px;

		cursor: pointer;
		background-repeat: no-repeat;
		background-position: center center;

		&_question {
			background-image: url("/cell_question.png");
		}

		&_empty {
			background-image: url("/cell_empty.png");
		}

		&_bomb {
			background-image: url("/bomb.png");
		}

		&_bomb-trigger {
			background-image: url("/bomb_red-back.png");
		}

		&[data-hint="1"] {
			background-image: url("/cell_1.png");
		}

		&[data-hint="2"] {
			background-image: url("/cell_2.png");
		}

		&[data-hint="3"] {
			background-image: url("/cell_3.png");
		}

		&[data-hint="4"] {
			background-image: url("/cell_4.png");
		}

		&[data-hint="5"] {
			background-image: url("/cell_5.png");
		}

		&[data-hint="6"] {
			background-image: url("/cell_6.png");
		}

		&[data-hint="7"] {
			background-image: url("/cell_7.png");
		}

		&[data-hint="8"] {
			background-image: url("/cell_8.png");
		}

		&_closed {
			background-image: url("/cell_closed.png") !important;
		}

		&_flag {
			background-image: url("/flag.png") !important;
		}

		&_defused-bomb {
			background-image: url("/bomb_red-lines.png") !important;
		}
	}
</style>
