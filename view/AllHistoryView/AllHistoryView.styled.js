import styled from "styled-components/native";
import { colorPallete } from "../../utils/colorPallete";

export const AllHistoryViewWrapper = styled.View`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
`;

export const HistoryElementBox = styled.View`
	width: 95%;
	display: flex;
	padding: 10px 10px;
	flex-direction: row;
	margin: 5px 0px;
	border-radius: 10px;
	align-items: center;
	background: ${colorPallete.backgroundDarkGray};
`;

export const HistoryElementTitle = styled.Text`
	font-size: 15px;
	color: black;
	width: 60%;
`;
