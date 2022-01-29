import { modalWrapper, container, inputsWrapper, button } from "../helpers/DomElements.js";

export const renderToFirstView = () => {
	button.disabled = false;
	modalWrapper.classList.remove("active");
	container.classList.remove("opacity");
	inputsWrapper.classList.add("hidden");
};
