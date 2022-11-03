import styled from "styled-components";
import { colorPallete } from "../../utils/colorPallete";

export const VerifyViewWrapper = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const VerifyBoxBorder = styled.View`
	width: 90%;
	background: ${colorPallete.orange};
	border-radius: 5px;
`;
export const VerifyBox = styled.View`
	padding: 50px 0px;
	margin: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border-radius: 5px;
	border: 1px solid ${colorPallete.white};
`;

export const VerifyTitle = styled.Text`
	font-size: 20px;
	margin-bottom: 10px;
	color: ${colorPallete.darkBlue};
`;
