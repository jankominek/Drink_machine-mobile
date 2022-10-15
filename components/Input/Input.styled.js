import styled from "styled-components";
import { colorPallete } from "../../utils/colorPallete";

export const InputWrapper = styled.View`
	${({ width }) => (width ? `width: ${width};` : `width: 60%;`)}
	${({ margin }) => margin && `margin: ${margin}px;`}
`;

export const TextInputComponent = styled.TextInput.attrs({
	placeholderTextColor: colorPallete.gray,
})`
	background: white;
	border-radius: 5px;
	height: 40px;
	padding: 0 10px;
	background: transparent;
	color: ${colorPallete.white};
	${({ borderColor }) =>
		borderColor.length
			? `
		border: 2px solid ${borderColor};
	`
			: `border: 1px solid white;`}
	&:focus {
		outline: none;
	}
`;
