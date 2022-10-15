import { useState } from "react";
import { Text } from "react-native";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { withLayout } from "../../layout/pageLayout/PageLayout";
import { ViewWrapper } from "../../layout/pageLayout/PageLayout.styled";
import { Login } from "./Login";
import { Register } from "./Register";
import {
	SignCredentialContent,
	SigningViewWrapper,
	LogoContent,
	AppTitleContent,
	AppTitleText,
	AdvertiseContentBox,
	AdvertiseText,
	SingOption,
	SingOptionBox,
	SingOptionText,
} from "./SigningView.styled";

export const SigningViewContainer = (props) => {
	const [userCredential, setUserCredential] = useState({});
	const [isLogin, setIsLogin] = useState(true);

	const onChangeView = () => {
		setIsLogin(!isLogin);
	};

	return (
		<ViewWrapper>
			<SigningViewWrapper>
				{/* <AdvertiseContentBox>
					<AdvertiseText fontSize={30}>Make your</AdvertiseText>
					<AdvertiseText fontSize={20}>Favourite</AdvertiseText>
					<AdvertiseText fontSize={15}>drinks.</AdvertiseText>
				</AdvertiseContentBox> */}
				<AppTitleContent>
					<AppTitleText>Drink Machine</AppTitleText>
				</AppTitleContent>
				<LogoContent source={require("../../assets/drinks.png")} />
				{isLogin ? <Login isLogin /> : <Register />}
			</SigningViewWrapper>
			<SingOptionBox onPress={onChangeView}>
				<SingOptionText>{isLogin ? "Register" : "Login"}</SingOptionText>
			</SingOptionBox>
		</ViewWrapper>
	);
};

export const SigningView = withLayout(SigningViewContainer);
