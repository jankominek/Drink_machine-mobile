import styled from "styled-components";
import { colorPallete } from "../../utils/colorPallete";

export const FavoriteViewWrapper = styled.View`
	display: flex;
	flex: 1;
	flex-direction: column;
`;

export const FavouriteElementBox = styled.TouchableOpacity`
	width: 95%;
	background: ${colorPallete.backgroundDarkGray};
	display: flex;
	align-items: center;
	padding: 10px 10px;
	border-radius: 5px;
	flex-direction: row;
	margin: 5px 0px;
`;

export const FavoriteElementTitle = styled.Text`
	font-size: 15px;
	color: black;
	width: 60%;
`;
export const ButtonWrapper = styled.View`
	flex-grow: 1;
	border: 1px solid ${colorPallete.greenSea};
`;

export const DetailsViewContainer = styled.View`
	padding: 5px;
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const DetailsViewTitle = styled.Text`
	font-size: 15px;
	color: black;
	font-weight: bold;
	margin-bottom: 15px;
`;

export const DetailsIngredientBox = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const DetailsIngredientElement = styled.Text`
	margin: 0px 5px;
`;

export const DetailsDrinkImage = styled.Image`
	width: 10px;
	height: 40px;
	resizemode: contain;
	margin: 5px;
`;

export const ButtonsContainer = styled.View`
	display: flex;
	width: 90%;
	margin-top: 15px;
	flex-direction: row;
	justify-content: space-evenly;
`;
