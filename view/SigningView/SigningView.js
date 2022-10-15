import { useState } from "react";
import { Text } from "react-native";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { withLayout } from "../../layout/pageLayout/PageLayout";
import { ViewWrapper } from "../../layout/pageLayout/PageLayout.styled";
import {
	SignCredentialContent,
	SigningViewWrapper,
	LogoContent,
	AppTitleContent,
} from "./SigningView.styled";

export const SigningViewContainer = (props) => {
	const [userCredential, setUserCredential] = useState({});

	return (
		<ViewWrapper>
			<SigningViewWrapper>
				<AppTitleContent>
					<Text>Drink Machine</Text>
				</AppTitleContent>
				<LogoContent source={require("../../assets/drinks.png")} />
				<SignCredentialContent>
					<Input placeholder="Email" margin={8} />
					<Input placeholder="Password" margin={8} />
					<Button text="Login" margin={15} />
				</SignCredentialContent>
			</SigningViewWrapper>
		</ViewWrapper>
	);
};

export const SigningView = withLayout(SigningViewContainer);
