import styled from "styled-components";
import { colorPallete } from "../../utils/colorPallete";

export const ButtonComponentWrapper = styled.TouchableOpacity`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 8px 10px;
	border-radius: 5px;
	background: ${colorPallete.white};
	${({ outline }) =>
		outline &&
		`
    border: 1px solid ${colorPallete.white};
    background: transparent;
    `}
	${({ margin }) => margin && `margin: ${margin}px;`}
	${({ width }) => (width ? `width: ${width};` : `width: 40%;`)};
`;

export const ButtonContent = styled.Text`
	${({ outline }) =>
		outline ? `color: ${colorPallete.white}` : `${colorPallete.darkBlue}`}
`;
