import { useState } from "react";
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

export const DrinkModal = ({ data, onClose }) => {
	const [addToFav, setAddToFav] = useState(false);

	const ingredients = data.ingredients.map((element) => (
		<IngredientBox>
			<IngredientElement>[element]</IngredientElement>
			<IngredientElement>{element.amount}ml</IngredientElement>
		</IngredientBox>
	));
	return (
		<DrinkModalWrapper>
			<ModalContent>
				<ModalText>{data.name}</ModalText>
				<DescriptionContainer>{ingredients}</DescriptionContainer>
			</ModalContent>
			<ButtonContainer>
				<Button
					text="Close"
					background={colorPallete.blockedRed}
					onPress={onClose}
				/>
				<Button
					text="Create"
					background={colorPallete.nonBlockedGreen}
					onPress={onClose}
				/>
			</ButtonContainer>
		</DrinkModalWrapper>
	);
};
