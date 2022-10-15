export const stringValidation = (text) => {
	const regex = /^[a-zA-Z ]*$/;
	return regex.test(text);
};
