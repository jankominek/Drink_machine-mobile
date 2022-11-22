import styled from "styled-components";
import { Dimensions, StatusBar } from "react-native";
import { colorPallete } from "../../utils/colorPallete";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const PageLayoutWrapper = styled.SafeAreaView`
	flex: 1;
	margin-top: ${StatusBar.currentHeight}px;
	background: ${colorPallete.darkBlue};
	box-sizing: border-box;
`;
export const ScrollViewWrapper = styled.ScrollView`
	flex: 1;
`;
export const ViewWrapper = styled.View`
	width: ${windowWidth}px;
	box-sizing: border-box;
	height: ${windowHeight - StatusBar.currentHeight}px;
	${({ center }) =>
		center &&
		`
		justify-content: center;
		align-items: center;
	`}
`;
