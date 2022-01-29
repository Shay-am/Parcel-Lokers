import { changeButtonType } from "./changeButtonType.js";
import { checkIsValidInputs } from "../validation/checkIsValidInputs.js";
import { handleErrorPromise } from "../helpers/handleErrorPromise.js";

// const promiseLoader = () => {
// 	changeButtonType("loader");
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve("Succes");
// 		}, 2000);
// 	});
// };

export const addLoader = async callback => {
	try {
		const result = await promiseLoader();

		if (result) {
			changeButtonType("button");
			checkIsValidInputs();
			return callback();
		}
	} catch (error) {
		handleErrorPromise();
	}
};
