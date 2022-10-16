import styled from "styled-components";
import { colorPallete } from "../../utils/colorPallete";

export const SectionWrapper = styled.View`
	width: 100%;
	margin-bottom: 10px;
	display: flex;
	flex-direction: column;
`;

export const SectionTitle = styled.Text`
	font-size: 20px;
	color: ${colorPallete.white};
	margin: 0 10px;
`;

export const SectionContent = styled.ScrollView`
	display: flex;
	flex-direction: row;
`;
