import { addTextContentToDomElements } from "../helpers/addTextContentToDomElements.js";
import { descriptionCode, descriptionPhone } from "../helpers/DomElements.js";
import { renderToFirstView } from "../helpers/renderToFirstView.js";
import { resetInputs } from "../helpers/resetValueInput.js";

export const handleClickRedirectToFirstView = () => {
	renderToFirstView();
	addTextContentToDomElements(descriptionCode, "Kod paczki musi mieć 4 liczby");
	addTextContentToDomElements(descriptionPhone, "Numer telefonu musi mieć 9 liczb");
	resetInputs();
};
