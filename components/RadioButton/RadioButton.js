import { FilledCircle, RadioButtonWrapper } from "./RadioButton.styled";

export const RadioButton = (props) => {
	const { isSelected, onSelectItem } = props;

	const onSelect = () => {
		onSelectItem();
	};
	return (
		<RadioButtonWrapper onPress={onSelect}>
			{isSelected && <FilledCircle />}
		</RadioButtonWrapper>
	);
};
