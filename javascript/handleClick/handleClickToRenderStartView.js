import { modalWrapper, container, inputsWrapper, button } from "../helpers/DomElements.js";
import { resetInputs } from "../helpers/resetValueInput.js";

export const handleClickToRenderStartView = () => {
	button.disabled = false;
	modalWrapper.classList.remove("active");
	container.classList.remove("opacity");
	inputsWrapper.classList.add("hidden");
	resetInputs();
};
