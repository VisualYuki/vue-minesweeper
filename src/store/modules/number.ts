import digit_0 from "@/assets/digit_0.png";
import digit_1 from "@/assets/digit_1.png";
import digit_2 from "@/assets/digit_2.png";
import digit_3 from "@/assets/digit_3.png";
import digit_4 from "@/assets/digit_4.png";
import digit_5 from "@/assets/digit_5.png";
import digit_6 from "@/assets/digit_6.png";
import digit_7 from "@/assets/digit_7.png";
import digit_8 from "@/assets/digit_8.png";
import digit_9 from "@/assets/digit_9.png";

const state = {
	digit_0,
	digit_1,
	digit_2,
	digit_3,
	digit_4,
	digit_5,
	digit_6,
	digit_7,
	digit_8,
	digit_9
};

const getters = {
	getImg: (state: any) => (order: 1 | 2 | 3, number: number) => {
		function formatNumber(strNum: string): string {
			const MAX_NUMBER_LENGTH = 3;

			while (strNum.length < MAX_NUMBER_LENGTH) {
				strNum = "0" + strNum;
			}

			return strNum;
		}

		let strNum: string = formatNumber(number.toString());

		let orderNum: string = strNum[order - 1];

		switch (orderNum) {
			case "0":
				return state.digit_0;
			case "1":
				return state.digit_1;
			case "2":
				return state.digit_2;
			case "3":
				return state.digit_3;
			case "4":
				return state.digit_4;
			case "5":
				return state.digit_5;
			case "6":
				return state.digit_6;
			case "7":
				return state.digit_7;
			case "8":
				return state.digit_8;
			case "9":
				return state.digit_9;
			default:
				return state.digit_0;
		}
	}
};

export default {state, getters};
