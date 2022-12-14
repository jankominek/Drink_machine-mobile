import { Dimensions } from "react-native";
import styled from "styled-components";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const CardWrapper = styled.TouchableOpacity`
	width: ${windowWidth / 3}px;
	margin: 2px 10px;
`;

export const DrinkImage = styled.Image`
	width: 20px;
	height: 30px;
	aspectratio: 1;
	resizemode: contain;
`;

export const CardContent = styled.View`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const HeartBox = styled.TouchableOpacity`
	position: absolute;
	z-index: 10;
	bottom: 0;
	left: 2px;
`;
