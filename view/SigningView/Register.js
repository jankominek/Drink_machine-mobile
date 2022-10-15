import { useState } from "react";
import { Alert } from "react-native";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import {
	emailValidation,
	signFormValidation,
} from "../../validation/credentialValidation";
import { stringValidation } from "../../validation/generalValidation";
import { SignCredentialContent } from "./SigningView.styled";
import { initialRegisterCredentials } from "./SigningView.utils";

export const Register = () => {
	const [userCredentials, setUserCredentials] = useState(
		initialRegisterCredentials,
	);

	const onChangeCredentials = (value, name) => {
		setUserCredentials({
			...userCredentials,
			[name]: value,
		});
	};
	const onRegister = () => {
		console.log(stringValidation(userCredentials.firstname));
		console.log(emailValidation(userCredentials.email));
		const validation = signFormValidation(userCredentials);
		const convertedToText = validation.join("\n");
		convertedToText &&
			Alert.alert("Wrong data!", convertedToText, [{ text: "Accept" }]);
		if (!convertedToText) {
			//SEND CREDENTIALS REGISTER
		}
	};
	return (
		<SignCredentialContent>
			<Input
				placeholder="First name"
				margin={8}
				name="firstname"
				onChange={onChangeCredentials}
			/>
			<Input
				placeholder="Email"
				margin={8}
				name="email"
				onChange={onChangeCredentials}
			/>
			<Input
				placeholder="Password"
				margin={8}
				name="password"
				onChange={onChangeCredentials}
				password
			/>
			<Button text="Register" margin={15} onPress={onRegister} />
		</SignCredentialContent>
	);
};
