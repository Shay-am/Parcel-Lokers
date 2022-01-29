import { addTextContentToDomElements } from "../helpers/addTextContentToDomElements.js";
import { descriptionCode, descriptionPhone } from "../helpers/DomElements.js";
import { renderToFirstView } from "../helpers/renderToFirstView.js";
import { resetInputs } from "../helpers/resetValueInput.js";

export const handleClickRedirectToFirstView = () => {
	renderToFirstView();
	addTextContentToDomElements(descriptionCode, "Code Package must have 4 numbers");
	addTextContentToDomElements(descriptionPhone, "The phone number must have 9 numbers");
	resetInputs();
};
