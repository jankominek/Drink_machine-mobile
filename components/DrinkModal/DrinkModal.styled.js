import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { colorPallete } from "../../utils/colorPallete";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const DrinkModalWrapper = styled.View`
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	background: rgba(108, 122, 137, 0.7);
	align-items: center;
`;

export const ModalBox = styled.View`
	width: 90%;
	height: 95%;
	border-radius: 5px;
	background: ${colorPallete.white};
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ModalText = styled.Text`
	font-size: 20px;
	margin: 5% 0%;
`;

export const ModalContent = styled.View`
	height: 90%;
	width: 100%;
	display: flex;
	align-items: center;
`;

export const DescriptionContainer = styled.View`
	flex: 1;
	justify-content: center;
`;

export const IngredientBox = styled.View`
	display: flex;
	flex-direction: row;
`;

export const IngredientElement = styled.Text`
	padding: 5px 10px;
	font-size: 15px;
`;
export const ButtonContainer = styled.View`
	height: 10%;
	display: flex;
	justify-content: space-evenly;
	flex-direction: row;
	align-items: center;
	width: 100%;
	align-self: flex-end;
`;
