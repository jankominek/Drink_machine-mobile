import * as React from "react";
import { Text } from "react-native";
import { colorPallete } from "../../utils/colorPallete";
import {
	ButtonComponentWrapper,
	ButtonContainer,
	ButtonContent,
} from "./Button.styled";

export const Button = (props) => {
	const { outline, text, margin, onChange } = props;

	return (
		<ButtonComponentWrapper outline={outline} margin={margin}>
			<ButtonContent outline={outline}>{text}</ButtonContent>
		</ButtonComponentWrapper>
	);
};
