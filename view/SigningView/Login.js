import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useState } from "react";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { initUser } from "../../store/userReducer";
import {
	emailValidation,
	signFormValidation,
} from "../../validation/credentialValidation";
import { stringValidation } from "../../validation/generalValidation";
import { SignCredentialContent } from "./SigningView.styled";
import { initialLoginCredentials } from "./SigningView.utils";

export const Login = (props) => {
	const [userCredentials, setUserCredentials] = useState(
		initialLoginCredentials,
	);

	const dispatch = useDispatch();
	const navigation = useNavigation();

	const onChangeCredentials = (value, name) => {
		setUserCredentials({
			...userCredentials,
			[name]: value,
		});
	};
	const onLogin = () => {
		if (
			userCredentials.email == "admin" &&
			userCredentials.password == "adminpp"
		) {
			navigation.navigate("Admin");
			return;
		}

		if (userCredentials.email == "User" && userCredentials.password == "user") {
			navigation.navigate("Home");
			return;
		}

		const validation = signFormValidation(userCredentials);
		const convertedToText = validation.join("\n");
		convertedToText &&
			Alert.alert("Wrong data!", convertedToText, [{ text: "Accept" }]);
		if (!convertedToText) {
			axios.post("/login", userCredentials).then((response) => {
				if (response.status == 200) {
					dispatch(initUser(response.data));
					navigation.navigate("Home");
				}
			});
		}
	};

	return (
		<SignCredentialContent>
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
			<Button text="Login" margin={15} onPress={onLogin} />
		</SignCredentialContent>
	);
};
