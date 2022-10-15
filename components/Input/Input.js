import * as React from "react";
import { TextInput } from "react-native";
import { colorPallete } from "../../utils/colorPallete";
import { InputWrapper, TextInputComponent } from "./Input.styled";

export const Input = (props) => {
	const { onChange, width, margin, placeholder } = props;
	const [borderColor, setBorderColor] = React.useState("");

	const [text, setText] = React.useState("");

	const onChangeInput = (value) => {
		setText(value);
		onChange && onChange(value);
	};

	const onFocus = () => {
		setBorderColor(colorPallete.white);
	};

	const onBlur = () => {
		setBorderColor("");
	};

	return (
		<InputWrapper margin={margin}>
			<TextInputComponent
				onChange={onChangeInput}
				onFocus={onFocus}
				onBlur={onBlur}
				borderColor={borderColor}
				width={width}
				placeholder={placeholder}
			/>
		</InputWrapper>
	);
};
