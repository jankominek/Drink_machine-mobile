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
	console.log("XXXX: ", data);

	const [addToFav, setAddToFav] = useState(false);

	const ingredients = data.ingredients.map((element) => (
		<IngredientBox>
			<IngredientElement>[element]</IngredientElement>
			<IngredientElement>{element.amount}ml</IngredientElement>
		</IngredientBox>
	));
	return (
		<DrinkModalWrapper>
			<ModalBox>
				<ModalContent>
					<ModalText>{data.name}</ModalText>
					<DescriptionContainer>{ingredients}</DescriptionContainer>
					<Button
						text="Add to favorite"
						background={
							addToFav ? colorPallete.nonBlockedGreen : colorPallete.gray
						}
						onPress={() => setAddToFav(!addToFav)}
						margin={20}
					/>
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
			</ModalBox>
		</DrinkModalWrapper>
	);
};
