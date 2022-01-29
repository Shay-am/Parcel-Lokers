import { inputCode, inputPhone } from "./DomElements.js";

export const resetValueInput = input => (input.value = null);

export const resetInputs = () => {
	inputCode.value = null;
	inputPhone.value = null;
};
