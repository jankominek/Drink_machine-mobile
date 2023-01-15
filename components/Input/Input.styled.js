import styled from "styled-components";
import { colorPallete } from "../../utils/colorPallete";

export const InputWrapper = styled.View`
	${({ width }) => (width ? `width: ${width};` : `width: 60%;`)}
	${({ height }) => (height ? `height: ${height};` : "height: 40px;")}
	${({ margin }) => margin && `margin: ${margin}px;`}
`;

export const TextInputComponent = styled.TextInput.attrs({
	placeholderTextColor: colorPallete.gray,
})`
	background: white;
	border-radius: 5px;
	width: 100%;
	flex: 1;
	padding: 0 10px;
	background: transparent;
	color: ${colorPallete.darkBlue};
	${({ borderColor }) =>
		borderColor
			? `
		border: 2px solid ${borderColor};
	`
			: `border: 1px solid ${colorPallete.gray};`}
	&:focus {
		outline: none;
		border: 1px solid ${colorPallete.gray};
	}
`;
