import { modalWrapper, container } from "../helpers/DomElements.js";
import { resetInputs } from "../helpers/resetValueInput.js";

export const handleRedirectToNewPackage = () => {
	modalWrapper.classList.remove("active");
	container.classList.remove("opacity");
	resetInputs();
};
