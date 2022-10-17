import { Dimensions } from "react-native";
import styled from "styled-components";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const CardWrapper = styled.View`
	width: ${windowWidth / 3}px;
	margin: 2px 10px;
`;

export const DrinkImage = styled.Image`
	width: 50px;
	height: 80px;
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
