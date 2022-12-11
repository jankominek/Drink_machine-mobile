import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { colorPallete } from "./utils/colorPallete";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MODAL_WIDTH = windowWidth * 0.9;
const MODAL_HEIGHT = windowHeight * 0.7;
const MODAL_TOP_MARGIN = (windowHeight - MODAL_HEIGHT) / 2;
const MODAL_LEFT_MARGIN = (windowWidth - MODAL_WIDTH) / 2;

export const DrinkModalWrapper = styled.View`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	background: ${colorPallete.greenSea};
`;

export const Flex = styled.TouchableOpacity`
	display: flex;
	flex-direction: row;
	align-items: center;
	box-sizing: border-box;
	padding: 10px 5px;
	// background: #008264;
	background: #fae99b;
	border-radius: 5px;
	${({ status }) =>
		status === -1
			? `background: #D4FFC5;`
			: status === 0
			? `background: #fae99b;`
			: `background: #008264;`}
`;

export const DrinkElementBox = styled.View`
	width: 95%;
	border-radius: 5px;
	margin: 3px 0px;
`;

export const DrinkElementTitle = styled.Text`
	flex: 1;
	font-size: 15px;
	box-sizing: border-box;
	padding: 0px 5px;
	margin: 0 5px;
	${({ status }) =>
		status === -1
			? `color: ${colorPallete.darkBlue};`
			: status === 0
			? `color: ${colorPallete.darkBlue};`
			: `color: ${colorPallete.white};`}
`;

export const DrinkDetails = styled.View`
	width: 100%;
	padding-top: 5px;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`;

export const DrinkQueueNumber = styled.Text`
	width: 30%;
	font-size: 15px;
	box-sizing: border-box;
	padding: 0px 5px;
	margin: 0 5px;
	${({ status }) =>
		status === -1
			? `color: ${colorPallete.darkBlue};`
			: status === 0
			? `color: ${colorPallete.darkBlue};`
			: `color: ${colorPallete.white};`}
`;

export const ModalTitle = styled.Text`
	font-size: 16px;
	padding: 0% 0px;
	color: ${colorPallete.textColorBackground};
`;
