import { Dimensions } from "react-native";
import styled from "styled-components";
import { colorPallete } from "../../utils/colorPallete";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const CreateDrinkViewWrapper = styled.View``;

export const DrinkImage = styled.Image`
	width: 230px;
	height: 200px;
	aspectratio: 1;
	resizemode: contain;
	margin-bottom: 20px;
`;

export const StartDrinkWrapper = styled.View`
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
`;

export const GlassViewWrapper = styled.View`
	width: 100%;
	height: 100%;
	border: 1px solid red;
	justify-content: space-between;
`;
export const CreateDrinkTitle = styled.Text`
	font-size: 20px;
	color: ${({ color }) => (color ? color : colorPallete.textColorBackground)};
`;

export const Flex = styled.View`
	display: flex;
	width: 90%;
	margin-top: 10px;
	flex-direction: row;
	justify-content: space-between;
`;
export const ListTitle = styled.View`
	width: 90%;
	margin: 10px 0px;
	background: ${colorPallete.white}
    border-radius: 5px;
	display: flex;
	align-items: center;
	padding: 10px 10px;
`;

export const AlcoholListWrapper = styled.View`
	width: 90%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin-top: 10px;
	justify-content: space-between;
`;

export const AlcoholElementBox = styled.TouchableOpacity`
	display: flex;
	width: ${windowWidth * 0.4}px;
	height: 100px;
	margin: ${windowWidth * 0.02}px 0px;
	border-radius: 5px;
	align-items: center;
	justify-content: center;
	background: ${({ background }) => background || colorPallete.white};
`;

export const AlcoholText = styled.Text`
	font-size: 15px;
	color: ${colorPallete.textColorBackground};
`;

export const Glass = styled.View`
	width: 50%;
	height: 50%;
	border-bottom-left-radius: 50px;
	border-bottom-right-radius: 50px;
	border-width: 5px;
	border-color: ${colorPallete.greenSea};
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	overflow: hidden;
	margin: ${windowHeight * 0.1}px 0px;
`;

export const GlassAlcohol = styled.View`
	width: 100%;
	${({ height }) => height};
	display: flex;
	justify-content: center;
	align-items: center;

	${({ background }) => `background: ${background}`};
`;
