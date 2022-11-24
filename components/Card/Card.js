import { Text } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { CardContent, CardWrapper, DrinkImage, HeartBox } from "./Card.styled";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
	addDrinkToFavorite,
	removeDrinkFromFavorite,
} from "../../store/userReducer";

export const CardComponent = (props) => {
	const { backgroundColor, icon, description, onPress, item, isFavorite } =
		props;

	const chosedBgColor = backgroundColor ? backgroundColor : "white";
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	console.log(user, item);
	const onPressCard = () => {
		console.log("item: ", item);
		onPress && onPress(item);
	};

	const addToFav = () => {
		console.log("IS FAV : ", isFavorite);
		if (!isFavorite) {
			item &&
				axios
					.post("/addFavouriteDrink", {
						userId: user.userID,
						drinkId: item.drinkID,
					})
					.then((resp) => console.log("added!"))
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
					.then((resp) => console.log("added!"))
					.catch((error) => {
						console.log(error);
					});

			item && dispatch(removeDrinkFromFavorite(item));
		}
	};
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
