import { modalWrapper, container } from "../helpers/DomElements.js";
import { resetInputs } from "../helpers/resetValueInput.js";

export const openModal = () => {
	container.classList.add("opacity");
	modalWrapper.classList.add("active");
	resetInputs();
};
