import { addTextContentToDomElements } from "../helpers/addTextContentToDomElements.js";
import { inputCode, descriptionCode } from "../helpers/DomElements.js";

import { toggleErrorClass } from "../helpers/toggleErrorClass.js";

export const checkIsValidCodePackage = () => {
	const REQUIRED_NUMBER = 4;

	const isValidCode = () => inputCode.value.length === REQUIRED_NUMBER;

	if (!isValidCode()) {
		toggleErrorClass("add", inputCode, descriptionCode);
		addTextContentToDomElements(descriptionCode, "Kod odbioru musi mieć 4 liczby");

		return false;
	}

	toggleErrorClass("remove", inputCode, descriptionCode);
	addTextContentToDomElements(descriptionCode, "Kod odbioru jest poprawny");

	return true;
};
