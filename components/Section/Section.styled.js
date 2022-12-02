import styled from "styled-components";
import { colorPallete } from "../../utils/colorPallete";

export const SectionBox = styled.View`
	width: 95%;
	border-radius: 10px;
`;
export const SectionWrapper = styled.View`
	width: 100%;
	margin-bottom: 10px;
	padding: 5px;
	display: flex;
	background: ${colorPallete.background};
	flex-direction: column;
`;

export const SectionTitle = styled.Text`
	font-size: 15px;
	color: ${colorPallete.textColorBackground};
	margin: 0 10px;
`;

export const SectionContent = styled.ScrollView`
	display: flex;
	flex-direction: row;
`;
