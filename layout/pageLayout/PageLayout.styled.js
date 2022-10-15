import styled from "styled-components";
import { Dimensions, StatusBar } from "react-native";
import { colorPallete } from "../../utils/colorPallete";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const PageLayoutWrapper = styled.View`
	width: ${windowWidth}px;
	height: ${windowHeight - StatusBar.currentHeight}px;
	margin-top: ${StatusBar.currentHeight}px;
	background: ${colorPallete.darkBlue};
`;

export const ViewWrapper = styled.View`
	flex: 1;
	display: flex;
	${({ center }) =>
		center &&
		`
		justify-content: center;
		align-items: center;
	`}
`;
