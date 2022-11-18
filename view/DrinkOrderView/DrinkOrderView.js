import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/Button/Button";
import { withLayout } from "../../layout/pageLayout/PageLayout";
import { removeDrinkFromQueue } from "../../store/userReducer";
import { colorPallete } from "../../utils/colorPallete";
import {
	ButtonsWrapper,
	DrinkImage,
	DrinkName,
	DrinkOrderViewBox,
	DrinkOrderViewWrapper,
	IngredientBox,
	IngredientName,
	LineBlock,
} from "./DrinkOrderView.styled";

export const DrinkOrderViewContainer = () => {
	const selector = useSelector((state) => state.user.drinkQueue);
	const [selectedDrink, setSelectedDrink] = useState(null);

	const navigation = useNavigation();
	const dispatch = useDispatch();

	useEffect(() => {
		if (selector.length !== 0) {
			setSelectedDrink(selector?.[0]);
		}
	}, [selector]);

	console.log("selected: ", selectedDrink);
	console.log(selectedDrink?.name);

	const ingredients = selectedDrink?.ingredients?.map((ingredient) => (
		<IngredientBox>
			<DrinkImage source={require("../../assets/finlandia.png")} />
			<IngredientName>Name</IngredientName>
			<IngredientName>{ingredient.amount}ml</IngredientName>
		</IngredientBox>
	));
	return (
		<DrinkOrderViewWrapper>
			<DrinkOrderViewBox>
				{selectedDrink && (
					<>
						<DrinkName>{selectedDrink?.name}</DrinkName>
						<LineBlock />
						{ingredients ? ingredients : null}
						<ButtonsWrapper>
							<Button
								text="Back"
								background={colorPallete.gray}
								onPress={() => navigation.navigate("Home")}
							/>
							<Button
								text="Cancel"
								background={colorPallete.red}
								onPress={() => {
									dispatch(removeDrinkFromQueue({ drink: selectedDrink }));
									navigation.navigate("Home");
								}}
							/>
						</ButtonsWrapper>
					</>
				)}
			</DrinkOrderViewBox>
		</DrinkOrderViewWrapper>
	);
};

export const DrinkOrderView = withLayout(DrinkOrderViewContainer);
