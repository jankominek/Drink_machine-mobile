import styled from "styled-components/native";
import { colorPallete } from "../../utils/colorPallete";
import { Dimensions } from "react-native";

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;

export const SigningViewWrapper = styled.SafeAreaView`
	height: ${windowHeight}px;
	width: ${windowWidth}px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const AdvertiseContentBox = styled.View`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const SingOptionBox = styled.TouchableOpacity`
	position: absolute;
	bottom: ${windowHeight / 15}px;
	width: ${windowWidth}px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SingOptionText = styled.Text`
	text-align: center;
	color: ${colorPallete.white};
	font-size: 15px;
	letter-spacing: 1px;
`;

export const AdvertiseText = styled.Text`
	${({ fontSize }) => `font-size: ${fontSize}px;`}
	font-weight: bold;
	color: ${colorPallete.white};
	margin: 5px;
`;

export const AppTitleContent = styled.View`
	width: 100%;
	padding: 10px 0px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const AppTitleText = styled.Text`
	color: ${colorPallete.white};
	font-weight: bold;
	font-size: 30px;
`;

export const LogoContent = styled.Image`
	width: 160px;
	height: 150px;
	aspectratio: 1;
	resizemode: contain;
	margin-bottom: 20px;
`;
export const SignCredentialContent = styled.View`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
