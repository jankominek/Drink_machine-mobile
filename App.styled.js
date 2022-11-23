import styled from "styled-components";
import { StatusBar } from "react-native";
export const AppWrapper = styled.View`
	width: ${windowWidth}px;
	flex: 1;
	margintop: ${calculatePageContentWithStatusBar()}px;
`;

export const calculatePageContentWithStatusBar = () => {
	const statusBarHeight =
		Platform.OS == "android" ? StatusBar.currentHeight : 0;
	return statusBarHeight;
};
