import styled from "styled-components";
import { colorPallete } from "../../utils/colorPallete";

export const DrinkOrderViewWrapper = styled.View`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const DrinkOrderViewBox = styled.View`
	width: 95%;
	height: 95%;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 5px;
	background: ${colorPallete.white};
`;

export const DrinkImage = styled.Image`
	width: 10px;
	height: 40px;
	resizemode: contain;
	margin-right: 15px;
`;

export const DrinkName = styled.Text`
	font-size: 20px;
	margin: 10px;
`;

export const IngredientBox = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin: 10px;
`;

export const LineBlock = styled.View`
	width: 90%;
	height: 2px;
	border-radius: 10px;
	background: ${colorPallete.darkBlue};
	margin-bottom: 20%;
`;

export const IngredientName = styled.Text`
	font-size: 15px;
	margin: 10px;
`;

export const ButtonsWrapper = styled.View`
	bottom: 0;
	margin: 10px;
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`;
