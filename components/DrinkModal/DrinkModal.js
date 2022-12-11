import { useEffect, useState } from "react";
import { Text } from "react-native";
import { colorPallete } from "../../utils/colorPallete";
import { Button } from "../Button/Button";
import {
	ButtonContainer,
	DescriptionContainer,
	DrinkModalWrapper,
	IngredientBox,
	IngredientElement,
	ModalBox,
	ModalContent,
	ModalText,
} from "./DrinkModal.styled";

export const DrinkModal = ({ data, onClose, onCreate, parentHeight }) => {
	const [addToFav, setAddToFav] = useState(false);
	const [modalContentHeight, setModalContentHeight] = useState(0);

	const ingredients = data?.ingredients.map((element) => (
		<IngredientBox>
			<IngredientElement>[element]</IngredientElement>
			<IngredientElement>{element.amount}ml</IngredientElement>
		</IngredientBox>
	));

	const createDrink = () => {
		onCreate && data && onCreate(data);
	};
	const height = parentHeight / 2 - 23;
	return (
		<DrinkModalWrapper height={height}>
			<ModalContent
				onLayout={(event) => {
					var { x, y, width, height } = event.nativeEvent.layout;
					setModalContentHeight(height);
				}}
			>
				<ModalText>{data.name}</ModalText>
				<DescriptionContainer>{ingredients}</DescriptionContainer>
			</ModalContent>

			<ButtonContainer
				modalContentHeight={modalContentHeight}
				parentHeight={height}
			>
				<Button
					text="Remove"
					background={colorPallete.backgroundGray}
					onPress={onClose}
				/>
				<Button
					text="Create"
					background={colorPallete.backgroundGray}
					onPress={createDrink}
				/>
			</ButtonContainer>
		</DrinkModalWrapper>
	);
};
