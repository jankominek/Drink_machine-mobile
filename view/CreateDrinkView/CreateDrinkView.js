import { Text } from "react-native";
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

export const CreateDrinkViewContainer = (props) => {
	const [drinkName, setDrinkName] = useState("");
	const [viewNumber, setViewNumber] = useState(0);
	const [alcoholList, setAlcoholList] = useState([]);
	const [selectedAlcohol, setSelectedAlcohol] = useState([]);
	const [glassCapacity, setGlassCapacity] = useState(200);
	const [currentGlassCapacity, setCurrentGlassCapacity] = useState(0);

	useEffect(() => {
		axios.get("http://192.168.1.16:8080/getAllAlcohols").then((response) => {
			const preparedData = setAlcoholList(response.data);
		});
	}, []);

	const onInputChange = (value, name) => {
		setDrinkName(value);
	};

	const onAlcoholClick = (alcohol) => {
		console.log(currentGlassCapacity);
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
		setViewNumber(viewNumber + 1);
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

	const drinkMap = alcoholList.map((alcohol) => (
		<AlcoholElementBox
			id={alcohol.alcoholID}
			onPress={() => onAlcoholClick(alcohol)}
			background={() => checkIfIsSelected(alcohol)}
		>
			<Text>{displayAmountOfAlcohol(alcohol)}</Text>
			<AlcoholText>{alcohol.name}</AlcoholText>
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
			<Flex>
				<Button
					text="Back"
					margin={10}
					background={colorPallete.yellow}
					onPress={() => setViewNumber(viewNumber - 1)}
				/>
				<Button
					text="Next"
					margin={10}
					onPress={() => setViewNumber(viewNumber + 1)}
					background={colorPallete.darkGreen}
				/>
			</Flex>
			<AlcoholListWrapper>{drinkMap}</AlcoholListWrapper>
			<Button
				text="Clear"
				margin={20}
				onPress={() => {
					setSelectedAlcohol([]);
					setCurrentGlassCapacity(0);
				}}
				background={colorPallete.yellow}
			/>
		</>
	);

	const alcoholGlassList = selectedAlcohol.map((element, index) => {
		const percentage = (element.ml / glassCapacity) * 100 + "%";
		console.log(percentage);
		return (
			<GlassAlcohol height={percentage} index={index}>
				<Text>{element.name}</Text>
			</GlassAlcohol>
		);
	});
	const ChooseMililitersView = (
		<StartDrinkWrapper>
			<Glass>{alcoholGlassList}</Glass>
		</StartDrinkWrapper>
	);

	const a = [StartDrinkView, SelectDrinksView, ChooseMililitersView];

	return (
		<CreateDrinkViewWrapper
			contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
		>
			{a[viewNumber]}
		</CreateDrinkViewWrapper>
	);
};

export const CreateDrinkView = withLayout(CreateDrinkViewContainer);
