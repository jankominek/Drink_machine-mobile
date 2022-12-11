import { useFocusEffect } from "@react-navigation/native";
import { useEffect } from "react";
import React from "react";
import { useState } from "react";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
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
import { clearDb } from "../../store/userReducer";

export const SigningViewContainer = ({ navigation }) => {
	const [userCredential, setUserCredential] = useState({});
	const [isLogin, setIsLogin] = useState(true);
	const dispatch = useDispatch();
	const selector = useSelector((state) => state.user);

	useFocusEffect(
		React.useCallback(() => {
			dispatch(clearDb());
		}, []),
	);

	const onChangeView = () => {
		setIsLogin(!isLogin);
	};

	const changeView = (isLogin) => {
		setIsLogin(isLogin);
	};

	return (
		<ViewWrapper>
			<SigningViewWrapper>
				<AppTitleContent>
					<AppTitleText>Drink Machine</AppTitleText>
				</AppTitleContent>
				<LogoContent source={require("../../assets/drinks.png")} />
				{isLogin ? (
					<Login isLogin changeView={changeView} />
				) : (
					<Register changeView={changeView} />
				)}
			</SigningViewWrapper>
			<SingOptionBox onPress={onChangeView}>
				<SingOptionText>{isLogin ? "Register" : "Login"}</SingOptionText>
			</SingOptionBox>
		</ViewWrapper>
	);
};

export const SigningView = withLayout(SigningViewContainer);
