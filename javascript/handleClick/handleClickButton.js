import { button, inputsWrapper } from "../helpers/DomElements.js";
import { openModal } from "../utils/openModal.js";
import { addLoader } from "../loader/addLoader.js";

export const handleClickButton = () => {
	button.disabled = true;
	if (inputsWrapper.classList.contains("hidden")) {
		inputsWrapper.classList.remove("hidden");
		button.disabled = true;
	} else {
		addLoader(openModal);
	}
};
