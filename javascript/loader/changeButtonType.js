import { button, loader } from "../helpers/DomElements.js";

export const changeButtonType = type => {
	switch (type) {
		case "loader":
			loader.classList.remove("hide-loader");
			button.textContent = "";
			button.style.display = "none";
			break;
		case "button":
			button.textContent = "Odbierz paczke";
			button.style.display = "block";
			loader.classList.add("hide-loader");
			break;
	}
};
