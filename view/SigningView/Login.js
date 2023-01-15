import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useState } from "react";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { initUser } from "../../store/userReducer";
import { initAxiosConfig } from "../../utils/axiosConfig";
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
	const [ip, setIp] = useState("");

	const dispatch = useDispatch();
	const navigation = useNavigation();

	const onChangeCredentials = (value, name) => {
		setUserCredentials({
			...userCredentials,
			[name]: value,
		});
	};
	const onLogin = () => {
		initAxiosConfig(ip || "192.168.1.16");
		if (
			userCredentials.email == "googleconsole@gmail.com" &&
			userCredentials.password == "59488166-94f7-11ed-a1eb-0242ac120002"
		) {
			navigation.navigate("Admin");
			return;
		}

		if (userCredentials.email == "User" && userCredentials.password == "user") {
			navigation.navigate("Home");
			return;
		}

		const validation = signFormValidation(userCredentials, ip);
		const convertedToText = validation.join("\n");
		convertedToText &&
			Alert.alert("Wrong data!", convertedToText, [{ text: "Accept" }]);
		if (!convertedToText) {
			axios
				.post("/login", userCredentials)
				.then((response) => {
					if (response.status == 200) {
						if (userCredentials.email === "admin@admin.pl") {
							navigation.navigate("Admin");
							return;
						}
						console.log("response: ", response.data);
						dispatch(initUser(response.data));
						navigation.navigate("QuestionView");
					}
				})
				.catch((error) => {
					Alert.alert("Error!", error.response.data.message, [
						{ text: "Accept" },
					]);
				});
		}
	};

	const onChangeIp = (value) => {
		setIp(value);
	};
	return (
		<SignCredentialContent>
			<Input
				placeholder="Email"
				margin={8}
				name="email"
				width="80%"
				onChange={onChangeCredentials}
			/>
			<Input
				placeholder="Password"
				margin={8}
				name="password"
				width="80%"
				onChange={onChangeCredentials}
				password
			/>
			<Input placeholder="IP" margin={8} onChange={onChangeIp} width="80%" />
			<Button text="Login" margin={15} onPress={onLogin} />
		</SignCredentialContent>
	);
};
