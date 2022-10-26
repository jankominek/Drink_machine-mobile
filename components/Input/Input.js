import * as React from "react";
import { TextInput } from "react-native";
import { colorPallete } from "../../utils/colorPallete";
import { InputWrapper, TextInputComponent } from "./Input.styled";

export const Input = (props) => {
	const {
		onChange,
		width,
		height,
		margin,
		placeholder,
		name,
		password,
		value,
	} = props;
	const [borderColor, setBorderColor] = React.useState("");

	const [text, setText] = React.useState("");

	React.useEffect(() => {
		value && setText(value);
	}, [value]);

	const onChangeInput = (value) => {
		setText(value);
		onChange && onChange(value, name);
	};

	const onFocus = () => {
		setBorderColor(colorPallete.white);
	};

	const onBlur = () => {
		setBorderColor("");
	};

	return (
		<InputWrapper margin={margin} height={height}>
			<TextInputComponent
				onChangeText={onChangeInput}
				onFocus={onFocus}
				onBlur={onBlur}
				borderColor={borderColor}
				width={width}
				height={"100%"}
				name="asdasda"
				value={text}
				placeholder={placeholder}
				secureTextEntry={password}
			/>
		</InputWrapper>
	);
};
