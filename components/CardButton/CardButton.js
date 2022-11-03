import { CardButtonText, CardButtonWrapper } from "./CardButton.styled";

export const CardButton = (props) => {
	const { onClick, text } = props;

	return (
		<CardButtonWrapper onPress={onClick}>
			<CardButtonText>{text}</CardButtonText>
		</CardButtonWrapper>
	);
};
