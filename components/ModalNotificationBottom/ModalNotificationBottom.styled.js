import styled from "styled-components";
import { colorPallete } from "../../utils/colorPallete";

export const ModalNotificationBottomWrapper = styled.View`
	position: absolute;
	width: 95%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background: ${colorPallete.white};
	margin-left: 2.5%;
	border-top-left-radius: 50px;
	border-top-right-radius: 50px;
	bottom: 0;
`;

export const Line = styled.View`
	position: absolute;
	top: 5px;
	width: 20%;
	height: 5px;
	background: gray;
	border-radius: 50px;
`;
export const ModalTitle = styled.Text`
	flex: 1;
`;

export const ButtonWrapper = styled.View`
	flex-grow: 2;
	border: 1px solid red;
`;
