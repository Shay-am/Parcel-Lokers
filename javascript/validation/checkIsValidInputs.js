import { checkIsValidCodePackage } from "./checkIsValidCodePackage.js";
import { checkIsValidPhoneNumber } from "./checkIsValidPhoneNumber.js";
import { button } from "../helpers/DomElements.js";

export const checkIsValidInputs = () => {
	const validators = [checkIsValidCodePackage(), checkIsValidPhoneNumber()];
	button.disabled = true;

	const isValid = validators.every(valid => valid);

	if (isValid) {
		button.disabled = false;
	}
};
