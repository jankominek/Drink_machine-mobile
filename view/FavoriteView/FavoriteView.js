import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/Button/Button";
import { withLayout } from "../../layout/pageLayout/PageLayout";
import { ViewWrapper } from "../../layout/pageLayout/PageLayout.styled";
import { addDrinkToQueue } from "../../store/userReducer";
import { getAxiosConfig } from "../../utils/axiosConfig";
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
	const user = useSelector((state) => state.user);

	useEffect(() => {
		axios.get(`/getUserFavouriteDrinks/${user.userID}`).then((response) => {
			setData(response.data);
		});
	}, [user]);

	const onRemoveElement = (indexElement) => {
		const filtered = data.filter((_, index) => index !== indexElement);
		const selectedElement = data.filter(
			(_, index) => index === indexElement,
		)?.[0];

		setData(filtered);
		setSelected();
		axios
			.post("/deleteDrinkFromFavourite", {
				userId: user.userID,
				drinkId: selectedElement.drinkID,
			})
			.catch((error) => {
				console.log(error);
				s;
			});
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
						background={colorPallete.greenSea}
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
							background={colorPallete.darkLightGray}
							onPress={() => onRemoveElement(index)}
						/>
						<Button
							text="Create"
							background={colorPallete.greenSea}
							onPress={() => createDrink(element)}
						/>
					</ButtonsContainer>
				</DetailsViewContainer>
			)}
		</FavouriteElementBox>
	));
	return (
		<FavoriteViewWrapper>
			<ViewWrapper centerTop>{favoriteDrinkList}</ViewWrapper>
		</FavoriteViewWrapper>
	);
};

export const FavoriteView = withLayout(FavoriteViewContainer);
