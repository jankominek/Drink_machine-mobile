import * as React from "react";
import { Text } from "react-native";
import { colorPallete } from "../../utils/colorPallete";
import {
	ButtonComponentWrapper,
	ButtonContainer,
	ButtonContent,
} from "./Button.styled";

export const Button = (props) => {
	const { outline, text, margin, onPress, background } = props;

	return (
		<ButtonComponentWrapper
			outline={outline}
			margin={margin}
			onPress={onPress}
			background={background}
		>
			<ButtonContent outline={outline}>{text}</ButtonContent>
		</ButtonComponentWrapper>
	);
};
