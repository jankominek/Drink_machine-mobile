import styled from "styled-components";
import { colorPallete } from "../../../utils/colorPallete";

export const MachineViewWrapper = styled.ScrollView``;

export const SectionDrinkPosition = styled.View`
	width: 100%;
	margin: 20px 0px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const SectionDrinkPositionText = styled.Text`
	font-size: 15px;
	color: ${colorPallete.gray};
	letter-spacing: 1px;
`;

export const Flex = styled.View`
	margin-top: 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`;
