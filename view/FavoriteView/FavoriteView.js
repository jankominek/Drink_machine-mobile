import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { useDispatch } from "react-redux";
import { Button } from "../../components/Button/Button";
import { withLayout } from "../../layout/pageLayout/PageLayout";
import { ViewWrapper } from "../../layout/pageLayout/PageLayout.styled";
import { addDrinkToQueue } from "../../store/userReducer";
import { colorPallete } from "../../utils/colorPallete";
import {
	ButtonsContainer,
	ButtonWrapper,
	DetailsDrinkImage,
	DetailsIngredientBox,
	DetailsIngredientElement,
	DetailsViewContainer,
	DetailsViewTitle,
	FavoriteElementTitle,
	FavoriteViewWrapper,
	FavouriteElementBox,
} from "./FavoriteView.styled";
import { tempData } from "./FavoriteView.utils";

export const FavoriteViewContainer = () => {
	const [data, setData] = useState([]);
	const [selected, setSelected] = useState();
	const dispatch = useDispatch();
	const navigation = useNavigation();

	useEffect(() => {
		setData(tempData);
	}, []);

	const onRemoveElement = (indexElement) => {
		const filtered = data.filter((_, index) => index !== indexElement);
		console.log(indexElement);
		setData(filtered);
		setSelected();
	};

	const elementToggle = (indexElement) => {
		if (selected === indexElement) {
			setSelected();
		} else {
			setSelected(indexElement);
		}
	};

	const createDrink = (drink) => {
		dispatch(addDrinkToQueue({ drink: drink }));
		navigation.navigate("Home");
	};

	const favoriteDrinkList = data.map((element, index) => (
		<FavouriteElementBox onPress={() => elementToggle(index)}>
			{selected !== index && (
				<>
					<FavoriteElementTitle numberOfLines={1}>
						{element.name}
					</FavoriteElementTitle>
					<Button
						text="Create"
						background={colorPallete.darkGreen}
						onPress={() => createDrink(element)}
					/>
				</>
			)}
			{selected === index && (
				<DetailsViewContainer>
					<DetailsViewTitle>{element.name}</DetailsViewTitle>
					{element.ingredients.map((ingredient) => (
						<DetailsIngredientBox>
							<DetailsDrinkImage
								source={require("../../assets/finlandia.png")}
							/>
							<DetailsIngredientElement>
								{ingredient.name}
							</DetailsIngredientElement>
							<DetailsIngredientElement>
								{ingredient.amount} ml
							</DetailsIngredientElement>
						</DetailsIngredientBox>
					))}
					<ButtonsContainer>
						<Button
							text="Remove"
							background={colorPallete.blockedRed}
							onPress={() => onRemoveElement(index)}
						/>
						<Button
							text="Create"
							background={colorPallete.darkGreen}
							onPress={() => createDrink(element)}
						/>
					</ButtonsContainer>
				</DetailsViewContainer>
			)}
		</FavouriteElementBox>
	));
	return (
		<FavoriteViewWrapper>
			<ViewWrapper center>{favoriteDrinkList}</ViewWrapper>
		</FavoriteViewWrapper>
	);
};

export const FavoriteView = withLayout(FavoriteViewContainer);
