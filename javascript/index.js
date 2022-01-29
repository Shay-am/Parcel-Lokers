import { checkIsValidInputs } from "./validation/checkIsValidInputs.js";
import { inputCode, inputPhone } from "./helpers/DomElements.js";
import { button, resetButton, nextButton } from "./helpers/DomElements.js";
import { handleClickButton } from "./handleClick/handleClickButton.js";
import { handleRedirectToNewPackage } from "./handleClick/handleClickToRenderNewPackage.js";
import { handleClickToRenderStartView } from "./handleClick/handleClickToRenderStartView.js";

button.addEventListener("click", handleClickButton);
resetButton.addEventListener("click", handleClickToRenderStartView);
nextButton.addEventListener("click", handleRedirectToNewPackage);

[inputCode, inputPhone].forEach(input => {
	input.addEventListener("input", checkIsValidInputs);
});
