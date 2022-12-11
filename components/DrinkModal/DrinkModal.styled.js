import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { colorPallete } from "../../utils/colorPallete";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const DrinkModalWrapper = styled.View`
	width: 100%;
	${(props) => `height: ${props.height}px`};
`;

export const ModalText = styled.Text`
	font-size: 18px;
	position: absolute;
	top: 20px;
	text-transform: uppercase;
`;

export const ModalContent = styled.View`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const DescriptionContainer = styled.View`
	display: flex;
	flex-direction: row;
	// border: 1px solid red;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

export const IngredientBox = styled.View`
	display: flex;
	flex-direction: row;
`;

export const IngredientElement = styled.Text`
	margin: 1% 2%;
`;
export const ButtonContainer = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	margin: 5%;
`;
