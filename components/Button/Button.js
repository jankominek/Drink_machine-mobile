import * as React from "react";
import { Text } from "react-native";
import { colorPallete } from "../../utils/colorPallete";
import {
	ButtonComponentWrapper,
	ButtonContainer,
	ButtonContent,
} from "./Button.styled";
import { LinearGradient } from "expo-linear-gradient";

export const Button = (props) => {
	const { outline, text, margin, onPress, background, width } = props;

	return (
		<ButtonComponentWrapper
			outline={outline}
			margin={margin}
			onPress={onPress}
			background={background}
			width={width}
		>
			<ButtonContent outline={outline}>{text}</ButtonContent>
		</ButtonComponentWrapper>
	);
};
