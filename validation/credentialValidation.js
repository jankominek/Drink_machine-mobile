import { stringValidation } from "./generalValidation";

export const emailValidation = (email) => {
	const regex =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	return regex.test(email);
};

export const signFormValidation = (credentials) => {
	const result =
		credentials &&
		Object.keys(credentials)
			.map((key) => {
				if (credentials[key].length == 0) return `${key} cannot be empty!`;
				if (key == "firstname") {
					console.log(credentials[key]);
					return stringValidation(credentials[key])
						? ""
						: "First name should cointains only letters";
				} else if (key == "email") {
					console.log(credentials[key]);
					return emailValidation(credentials[key])
						? ""
						: "E-mail address is incorrect";
				}
				return "";
			})
			.filter((validated) => validated.length);
	return result;
};
