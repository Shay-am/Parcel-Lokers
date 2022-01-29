import { modalWrapper, container, button } from "../helpers/DomElements.js";
import { resetInputs } from "../helpers/resetValueInput.js";
import { checkIsValidInputs } from "../validation/checkIsValidInputs.js";

export const handleClickRedirectToNewPackageView = () => {
	checkIsValidInputs();
	modalWrapper.classList.remove("active");
	container.classList.remove("opacity");
	resetInputs();
};
