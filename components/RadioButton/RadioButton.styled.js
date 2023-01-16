import styled from "styled-components/native";
import { colorPallete } from "../../utils/colorPallete";

export const RadioButtonWrapper = styled.TouchableOpacity`
	width: 20px;
	height: 20px;
	border: 2px solid ${colorPallete.darkBlue};
	border-radius: 50px;
	dislpay: flex;
	justify-content: center;
	align-items: center;
`;

export const FilledCircle = styled.View`
	width: 13px;
	height: 13px;
	margin-top: -0.5px;
	margin-left: -0.5px;
	border-radius: 50px;
	background: ${colorPallete.darkBlue};
`;
