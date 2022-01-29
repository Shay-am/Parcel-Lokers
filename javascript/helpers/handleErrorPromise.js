import { handleClickToRenderStartView } from "../handleClick/handleClickToRenderStartView.js";
import { descriptionErrorSend } from "./DomElements.js";

const toggleClassDescriptionError = () => descriptionErrorSend.classList.toggle("hidden");

export const handleErrorPromise = () => {
	toggleClassDescriptionError();
	setTimeout(() => {
		toggleClassDescriptionError();
		handleClickToRenderStartView();
	}, 3000);
};
