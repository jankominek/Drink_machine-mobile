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
	const onSelect = (id, name) => {
		console.log(id, name);
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
	const drinkFieldList = fields.map((field) => (
		<SectionDrinkPosition>
			<SectionDrinkPositionText>{field}</SectionDrinkPositionText>
			<SelectComponent
				data={[{ id: "id", name: "name" }]}
				name="nameee"
				onSelect={onSelect}
			/>
		</SectionDrinkPosition>
	));
	return (
		<ViewWrapper>
			<MachineViewWrapper>
				<Flex>
					<Button text="Start machine" background={colorPallete.darkGreen} />
					<Button text="Stop machine" background={colorPallete.red} />
				</Flex>
				{drinkFieldList}
			</MachineViewWrapper>
		</ViewWrapper>
	);
};

export const MachineView = withLayout(MachineViewContainer);
