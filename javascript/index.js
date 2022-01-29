import { checkIsValidInputs } from "./validation/checkIsValidInputs.js";
import { inputCode, inputPhone } from "./helpers/DomElements.js";
import { button, resetButton, nextButton } from "./helpers/DomElements.js";
import { handleClickButton } from "./handleClick/handleClickButton.js";
import { handleClickRedirectToNewPackageView } from "./handleClick/handleClickRedirectToNewPackageView.js";
import { handleClickRedirectToFirstView } from "./handleClick/handleClickRedirectToFirstView.js";

button.addEventListener("click", handleClickButton);
resetButton.addEventListener("click", handleClickRedirectToFirstView);
nextButton.addEventListener("click", handleClickRedirectToNewPackageView);

[inputCode, inputPhone].forEach(input => {
	input.addEventListener("input", checkIsValidInputs);
});
