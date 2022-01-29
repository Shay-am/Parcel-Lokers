export const toggleErrorClass = (type, input, description) => {
	if (typeof input !== "undefined" && typeof description !== "undefined") {
		input.classList[type]("error");
		description.classList[type]("error-code");
	}
};
