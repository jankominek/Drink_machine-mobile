import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { Button } from "../../../components/Button/Button";
import { Section } from "../../../components/Section/Section";
import { SelectComponent } from "../../../components/SelectComponent/SelectComponent";
import { withLayout } from "../../../layout/pageLayout/PageLayout";
import { ViewWrapper } from "../../../layout/pageLayout/PageLayout.styled";
import { colorPallete } from "../../../utils/colorPallete";
import {
	ButtonField,
	Flex,
	MachineViewWrapper,
	SectionDrinkPosition,
	SectionDrinkPositionText,
} from "./MachineView.styled";

export const MachineViewContainer = () => {
	const [choosed, setChoosed] = useState([]);
	const [alcohols, setAlcohols] = useState([]);
	const navigation = useNavigation();

	const onSelect = (id, position) => {
		const exists = choosed.filter((e) => e.position == position);
		if (exists.length) {
			const newChoosed = choosed.map((e) => {
				if (e.position == position) {
					e.alcoholID = id;
					return e;
				}
				return e;
			});

			setChoosed([...newChoosed]);
		} else {
			setChoosed([...choosed, { alcoholID: id, position: Number(position) }]);
		}
	};

	console.log("choosed: ", choosed);

	useEffect(() => {
		axios.get("/getAllAlcohols").then((response) => {
			prepareAlcohols(response.data);
		});

		axios.get("/getAlcoholsOnMachine").then((response) => {
			const getChoosed = response.data.map((e) => {
				return { alcoholID: e.alcohol.alcoholID, position: e.position };
			});

			setChoosed(getChoosed);
		});
	}, []);

	const prepareAlcohols = (data) => {
		const prepared = data?.map((e) => {
			return { id: e.alcoholID, name: e.alcoholName };
		});

		setAlcohols(prepared);
	};
	const fields = [
		"1 Position",
		"2 Position",
		"3 Position",
		"4 Position",
		"5 Position",
		"6 Position",
		"7 Position",
		"8 Position",
	];
	const acceptAlcohols = () => {
		console.log(choosed);
		axios.post("/setAlcohols", choosed).then((e) => {
			navigation.navigate("Admin");
		});
	};

	const selectValue = (position) => {
		const exists = choosed.filter((e) => e.position == position);
		return exists.length
			? alcohols.filter((e) => e.id == exists[0].alcoholID)?.[0]?.name
			: "";
	};

	const drinkFieldList =
		alcohols &&
		fields.map((field) => (
			<SectionDrinkPosition>
				<SectionDrinkPositionText>{field}</SectionDrinkPositionText>
				<SelectComponent
					data={[...alcohols]}
					value={selectValue(field.charAt(0))}
					name={field.charAt(0)}
					onSelect={onSelect}
				/>
			</SectionDrinkPosition>
		));

	const unblockMachine = () => {
		axios.post("/unblockMachine");
	};

	const blockMachine = () => {
		axios.post("/blockMachine");
	};
	return (
		<ViewWrapper>
			<MachineViewWrapper>
				<Flex>
					<Button
						text="Start machine"
						background={colorPallete.greenSea}
						onPress={unblockMachine}
					/>
					<Button
						text="Stop machine"
						background={colorPallete.red}
						onPress={blockMachine}
					/>
				</Flex>
				{drinkFieldList}
				<ButtonField>
					<Button
						text="Accept"
						background={colorPallete.greenSea}
						onPress={acceptAlcohols}
					/>
				</ButtonField>
			</MachineViewWrapper>
		</ViewWrapper>
	);
};

export const MachineView = withLayout(MachineViewContainer);
