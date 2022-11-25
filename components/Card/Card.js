import { Text } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import { CardContent, CardWrapper, DrinkImage, HeartBox } from "./Card.styled";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
	addDrinkToFavorite,
	removeDrinkFromFavorite,
} from "../../store/userReducer";
import { Selector } from "@react-native-material/core";

export const CardComponent = (props) => {
	const { backgroundColor, icon, description, onPress, item, index } = props;
	console.log(description + " rerender  " + index);
	const chosedBgColor = backgroundColor ? backgroundColor : "white";
	const user = useSelector((state) => state.user);
	const [isFavorite, setIsFavorite] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		const res = user?.favouriteDrinks.filter(
			(e) => e.drinkID === item.drinkID,
		)?.[0];
		console.log("RES:", res);
		if (res) {
			setIsFavorite(true);
		}
	}, []);

	const onPressCard = () => {
		onPress && onPress(item);
	};

	const addToFav = useCallback(() => {
		if (!isFavorite) {
			item &&
				axios
					.post("/addFavouriteDrink", {
						userId: user.userID,
						drinkId: item.drinkID,
					})
					.then((resp) => setIsFavorite(true))
					.catch((error) => {
						console.log(error);
					});

			item && dispatch(addDrinkToFavorite(item));
		} else {
			item &&
				axios
					.post("/deleteDrinkFromFavourite", {
						userId: user.userID,
						drinkId: item.drinkID,
					})
					.then((resp) => setIsFavorite(false))
					.catch((error) => {
						console.log(error);
					});

			item && dispatch(removeDrinkFromFavorite(item));
		}
	}, [isFavorite]);
	return (
		<CardWrapper onPress={onPressCard}>
			<Card
				style={{
					backgroundColor: chosedBgColor,
				}}
			>
				<Card.Content style={{ fontAlign: "center" }}>
					<CardContent>
						<Paragraph numberOfLines={1}>{description}</Paragraph>
					</CardContent>
					<HeartBox onPress={addToFav}>
						{isFavorite ? (
							<FontAwesome name="heart" size={15} color="green" />
						) : (
							<FontAwesome5 name="heart" size={15} color="black" />
						)}
					</HeartBox>
				</Card.Content>
			</Card>
		</CardWrapper>
	);
};

export const MemoizedCard = React.memo(
	CardComponent,
	(prevState, nextState) => prevState !== nextState,
);
