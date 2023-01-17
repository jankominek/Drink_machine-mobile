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
	Flex,
	MachineViewWrapper,
	SectionDrinkPosition,
	SectionDrinkPositionText,
} from "./MachineView.styled";

export const MachineViewContainer = () => {
	const [choosed, setChoosed] = useState([]);
	const [alcohols, setAlcohols] = useState([]);
	const onSelect = (id, name) => {};

	useEffect(() => {
		axios.get("/getAllAlcohols").then((response) => {
			prepareAlcohols(response.data);
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
	const drinkFieldList =
		alcohols &&
		fields.map((field) => (
			<SectionDrinkPosition>
				<SectionDrinkPositionText>{field}</SectionDrinkPositionText>
				<SelectComponent
					data={[...alcohols]}
					name="nameee"
					onSelect={onSelect}
				/>
			</SectionDrinkPosition>
		));

	console.log(alcohols);
	return (
		<ViewWrapper>
			<MachineViewWrapper>
				<Flex>
					<Button text="Start machine" background={colorPallete.greenSea} />
					<Button text="Stop machine" background={colorPallete.red} />
				</Flex>
				{drinkFieldList}
			</MachineViewWrapper>
		</ViewWrapper>
	);
};

export const MachineView = withLayout(MachineViewContainer);
