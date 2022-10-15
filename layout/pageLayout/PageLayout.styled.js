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
	border: 1px dotted red;
`;

export const ViewWrapper = styled.View`
	flex: 1;
	display: flex;
	border: 1px solid green;
	${({ center }) =>
		center &&
		`
		justify-content: center;
		align-items: center;
	`}
`;
