import { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import {
	SelectButton,
	SelectItemBox,
	SelectText,
	SelectWrapper,
	SelectItemField,
	SelectItem,
} from "./SelectComponent.styled";

export const SelectComponent = (props) => {
	const { data, onSelect, name, value } = props;

	const [dropDown, setDropDown] = useState(false);
	const [selected, setSelected] = useState("Select");

	useEffect(() => {
		setSelected(value);
	}, [value]);

	console.log("Select com: ", data);
	const onSelectClick = () => {
		setDropDown(!dropDown);
	};

	const dropDownList = data?.map((data, index) => (
		<SelectItemField key={index}>
			<TouchableOpacity onPress={() => onSelectItemList(data)}>
				<SelectItem>{data.name}</SelectItem>
			</TouchableOpacity>
		</SelectItemField>
	));

	const onSelectItemList = (item) => {
		setSelected(item.name);
		setDropDown(false);
		onSelect(item.id, name);
	};

	return (
		<SelectWrapper>
			<SelectButton onPress={onSelectClick}>
				<SelectText>{selected}</SelectText>
			</SelectButton>
			{dropDown && <SelectItemBox>{dropDownList}</SelectItemBox>}
		</SelectWrapper>
	);
};
