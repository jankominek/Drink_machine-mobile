import axios from "axios";
import { useState } from "react";
import { Alert } from "react-native";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { initAxiosConfig } from "../../utils/axiosConfig";
import {
	emailValidation,
	signFormValidation,
} from "../../validation/credentialValidation";
import { stringValidation } from "../../validation/generalValidation";
import { SignCredentialContent } from "./SigningView.styled";
import { initialRegisterCredentials } from "./SigningView.utils";

export const Register = (props) => {
	const { changeView } = props;

	const [userCredentials, setUserCredentials] = useState(
		initialRegisterCredentials,
	);

	const [ip, setIp] = useState("192.168.1.16");

	const registerUser = (userData) => {
		axios
			.post("/register", userData)
			.then((response) => {
				if (response.status == 200) {
					changeView(true);
				}
				if (response.status == 404) {
				}
			})
			.catch((err) => {
				Alert.alert("User already exists", convertedToText, [
					{ text: "Accept" },
				]);
			});
	};

	const onChangeCredentials = (value, name) => {
		setUserCredentials({
			...userCredentials,
			[name]: value,
		});
	};
	const onRegister = async () => {
		initAxiosConfig(ip);
		const validation = signFormValidation(userCredentials);
		const convertedToText = validation.join("\n");
		convertedToText &&
			Alert.alert("Wrong data!", convertedToText, [{ text: "Accept" }]);
		if (!convertedToText) {
			registerUser(userCredentials);
		}
	};

	const onChangeIp = (value) => {
		setIp(value);
	};

	return (
		<SignCredentialContent>
			<Input
				placeholder="First name"
				margin={8}
				name="name"
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
			<Input placeholder="IP" margin={8} onChange={onChangeIp} />
			<Button text="Register" margin={15} onPress={onRegister} />
		</SignCredentialContent>
	);
};
