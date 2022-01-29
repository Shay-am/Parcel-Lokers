import { addTextContentToDomElements } from "../helpers/addTextContentToDomElements.js";
import { inputPhone, descriptionPhone } from "../helpers/DomElements.js";

import { toggleErrorClass } from "../helpers/toggleErrorClass.js";

export const checkIsValidPhoneNumber = () => {
	const REG_EXP_PHONE_NUMBER = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3})$/;

	const isValidPhone = () => REG_EXP_PHONE_NUMBER.test(inputPhone.value);

	if (!isValidPhone()) {
		toggleErrorClass("add", inputPhone, descriptionPhone);
		addTextContentToDomElements(descriptionPhone, "Numer telefonu musi miec 9 liczb");

		return false;
	}

	toggleErrorClass("remove", inputPhone, descriptionPhone);
	addTextContentToDomElements(descriptionPhone, "Numer telefonu jest poprawny");

	return true;
};
