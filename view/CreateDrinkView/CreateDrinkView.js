import { Alert, Text } from "react-native";
import { Input } from "../../components/Input/Input";
import { withLayout } from "../../layout/pageLayout/PageLayout";
import {
	AlcoholElementBox,
	AlcoholListWrapper,
	AlcoholText,
	CreateDrinkFlex,
	CreateDrinkMlText,
	CreateDrinkTitle,
	CreateDrinkViewWrapper,
	DrinkImage,
	Flex,
	Glass,
	GlassAlcohol,
	ListTitle,
	PickerWrapper,
	StartDrinkWrapper,
} from "./CreateDrinkView.styled";
// import DropDownPicker from "react-native-dropdown-picker";
import { Picker } from "@react-native-picker/picker";
import { colorPallete } from "../../utils/colorPallete";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../../components/Button/Button";
import { drinkColors } from "./CreateDrinkView.utis";
import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "../../utils/showNotification";
import { addDrinkToQueue } from "../../store/userReducer";
import { ViewWrapper } from "../../layout/pageLayout/PageLayout.styled";

export const CreateDrinkViewContainer = ({ navigation }) => {
	const [drinkName, setDrinkName] = useState("");
	const [viewNumber, setViewNumber] = useState(0);
	const [alcoholList, setAlcoholList] = useState([]);
	const [selectedAlcohol, setSelectedAlcohol] = useState([]);
	const [glassCapacity, setGlassCapacity] = useState();
	const [currentGlassCapacity, setCurrentGlassCapacity] = useState(0);
	const [favoriteOption, setFavoriteOption] = useState(false);

	const dispatch = useDispatch();

	const selector = useSelector((state) => state.user);

	useEffect(() => {
		axios.get("/getAllAlcohols").then((response) => {
			setAlcoholList(response.data);
		});
	}, []);

	console.log(alcoholList);

	const addToFavorite = () => {
		// const preparedAlcoholList = selectedAlcohol.map((element) => {
		// 	return { alcoholID: element.alcoholID, amount: element.ml };
		// });

		// const objectToSend = {
		// 	userId: selector.userID,
		// 	name: drinkName,
		// 	ingredients: preparedAlcoholList,
		// };
		// axios.post("/addFavouriteDrink", objectToSend).then(() => {
		// 	showNotification(
		// 		`Added to favorites`,
		// 		`Your drink ${drinkName} has been added to your favorite drinks`,
		// 	);
		// });
		setFavoriteOption(!favoriteOption);
	};

	const onInputChange = (value, name) => {
		setDrinkName(value);
	};

	const onAlcoholClick = (alcohol) => {
		if (currentGlassCapacity < glassCapacity) {
			setCurrentGlassCapacity(currentGlassCapacity + 50);
			const alreadyExist = selectedAlcohol.filter(
				(oldElement) => oldElement.alcoholID === alcohol.alcoholID,
			);

			if (alreadyExist.length) {
				setSelectedAlcohol((prev) => {
					const newState = prev.map((element) => {
						if (element.alcoholID === alcohol.alcoholID) {
							return { ...element, ml: element.ml + 50 };
						}
						return element;
					});

					return newState;
				});
			} else {
				setSelectedAlcohol([...selectedAlcohol, { ...alcohol, ml: 50 }]);
			}
		}
	};

	const checkIfIsSelected = (alcohol) => {
		const result = selectedAlcohol.filter(
			(oldElement) => oldElement.alcoholID === alcohol.alcoholID,
		);
		return result.length ? colorPallete.green : colorPallete.white;
	};

	const onNextButtonClick = () => {
		if (viewNumber == 0) {
			if (!drinkName || !glassCapacity) {
				Alert.alert("Warning!", "Please fill all empty fields", [
					{ text: "Accept" },
				]);
				return;
			}
			if (glassCapacity % 50 !== 0) {
				Alert.alert("Warning!", "Glass capacity can be only multiply of 50ml", [
					{ text: "Accept" },
				]);
				return;
			}
		}

		if (viewNumber == 1) {
			if (!selectedAlcohol.length) {
				Alert.alert("Warning!", "Please select minimum\none position", [
					{ text: "Accept" },
				]);
				return;
			}
		}
		setViewNumber(viewNumber + 1);
	};

	const initViewValidation = () => {
		return glassCapacity && drinkName;
	};

	const displayAmountOfAlcohol = (alcohol) => {
		const filtered = selectedAlcohol.filter(
			(element) => element.alcoholID === alcohol.alcoholID,
		);
		if (filtered.length) {
			return filtered[0].ml + " ml";
		}
		return null;
	};

	const startDrink = () => {
		const preparedAlcoholList = selectedAlcohol.map((element) => {
			return { alcoholID: element.alcoholID, amount: element.ml };
		});

		const objectToSend = {
			userId: selector.userID,
			name: drinkName,
			ingredients: preparedAlcoholList,
			addToFavourite: favoriteOption,
		};
		axios.post("/createDrink", objectToSend).catch(() => {
			showNotification(
				"Something went wrong!",
				"Describe problem with administrator",
			);
		});
		showNotification(
			`Prepare drink`,
			`Your drink ${drinkName} will be ready in a few moments`,
		);
		dispatch(addDrinkToQueue({ drink: objectToSend }));
		navigation.navigate("Home");
	};

	const drinkMap = alcoholList.map((alcohol) => (
		<AlcoholElementBox
			id={alcohol.alcoholID}
			onPress={() => onAlcoholClick(alcohol)}
			background={() => checkIfIsSelected(alcohol)}
		>
			<Text>{displayAmountOfAlcohol(alcohol)}</Text>
			<AlcoholText>{alcohol.alcoholName}</AlcoholText>
		</AlcoholElementBox>
	));

	const StartDrinkView = (
		<StartDrinkWrapper>
			<DrinkImage source={require("../../assets/drinkCreate.png")} />
			<CreateDrinkTitle>Please type your drink name</CreateDrinkTitle>
			<Input
				placeholder="Name"
				margin={10}
				onChange={onInputChange}
				value={drinkName}
			/>
			<Input
				placeholder="Glass capacity"
				margin={10}
				onChange={(value) => setGlassCapacity(value)}
				value={glassCapacity}
			/>
			<Button
				text="Next"
				onPress={onNextButtonClick}
				background={colorPallete.darkGreen}
				margin={10}
			/>
		</StartDrinkWrapper>
	);

	const SelectDrinksView = (
		<>
			<ListTitle>
				<CreateDrinkTitle color={colorPallete.darkBlue}>
					Select from list
				</CreateDrinkTitle>
			</ListTitle>
			<Button
				text="Clear"
				margin={5}
				onPress={() => {
					setSelectedAlcohol([]);
					setCurrentGlassCapacity(0);
				}}
				background={colorPallete.red}
				width="90%"
				outline
			/>
			<Flex>
				<Button
					text="Back"
					background={colorPallete.gray}
					onPress={() => setViewNumber(viewNumber - 1)}
					width="44%"
				/>
				<Button
					text="Next"
					onPress={() => onNextButtonClick(viewNumber + 1)}
					background={colorPallete.darkGreen}
					width="44%"
				/>
			</Flex>
			<AlcoholListWrapper>{drinkMap}</AlcoholListWrapper>
		</>
	);

	const alcoholGlassList = selectedAlcohol.map((element, index) => {
		const percentage = (element.ml / glassCapacity) * 100 + "%";
		const drink = drinkColors.filter(
			(drink) => drink.name === element.alcoholName,
		)?.[0];
		return (
			<GlassAlcohol
				height={percentage}
				index={index}
				background={drink ? drink.color : "gray"}
			>
				<Text>{element.alcoholName}</Text>
			</GlassAlcohol>
		);
	});
	const ChooseMililitersView = (
		<StartDrinkWrapper>
			<Button
				text="Back"
				background={colorPallete.gray}
				onPress={() => setViewNumber(viewNumber - 1)}
				width="44%"
			/>
			<Glass>{alcoholGlassList}</Glass>
			<Flex>
				<Button
					text="Add to favorite"
					background={favoriteOption ? colorPallete.green : colorPallete.gray}
					onPress={addToFavorite}
					width="44%"
				/>
				<Button
					text="Start"
					background={colorPallete.green}
					onPress={startDrink}
					width="44%"
				/>
			</Flex>
		</StartDrinkWrapper>
	);

	const views = [StartDrinkView, SelectDrinksView, ChooseMililitersView];

	return (
		// <CreateDrinkViewWrapper
		// 	contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
		// >
		<ViewWrapper>{views[viewNumber]}</ViewWrapper>
		// </CreateDrinkViewWrapper>
	);
};

export const CreateDrinkView = withLayout(CreateDrinkViewContainer);
