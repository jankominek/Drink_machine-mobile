import { stringValidation } from "./generalValidation";

export const emailValidation = (email) => {
	const regex =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	return regex.test(email);
};

export const ipValidation = (ip) => {
	const regex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
	return regex.test(ip);
};

export const passwordValidation = (passwd) => {
	return passwd.length >= 5;
};

export const signFormValidation = (credentials, ip) => {
	const result =
		credentials &&
		Object.keys(credentials)
			.map((key) => {
				if (credentials[key].length == 0) return `${key} cannot be empty!`;
				if (key == "name") {
					return stringValidation(credentials[key])
						? ""
						: "First name should cointains only letters";
				} else if (key == "email") {
					return emailValidation(credentials[key])
						? ""
						: "E-mail address is incorrect";
				} else if (key == "password") {
					return passwordValidation(credentials[key])
						? ""
						: "Password should contains more than 5 characters";
				}
				return "";
			})
			.filter((validated) => validated.length);
	if (!ip) {
		result.push("IP address cannot be empty");
	}
	if (!ipValidation(ip)) {
		result.push("IP address is incorrect");
	}

	return result;
};
