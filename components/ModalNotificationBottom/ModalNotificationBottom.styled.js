import styled from "styled-components";
import { colorPallete } from "../../utils/colorPallete";

export const ModalNotificationBottomWrapper = styled.TouchableOpacity`
	position: absolute;
	width: 95%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background: ${colorPallete.white};
	margin-left: 2.5%;
	margin-bottom: 10px;
	border-radius: 5px;
	padding: 10px;
	bottom: 0;
`;

export const ModalTitle = styled.Text`
	flex: 1;
`;

export const ButtonWrapper = styled.View`
	flex-grow: 2;
	border: 1px solid red;
`;
