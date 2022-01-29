import { handleClickRedirectToFirstView } from "../handleClick/handleClickRedirectToFirstView.js";
import { descriptionErrorSend } from "./DomElements.js";

const toggleClassDescriptionError = () => descriptionErrorSend.classList.toggle("hidden");

export const handleErrorPromise = () => {
	toggleClassDescriptionError();
	setTimeout(() => {
		toggleClassDescriptionError();
		handleClickRedirectToFirstView();
	}, 3000);
};
