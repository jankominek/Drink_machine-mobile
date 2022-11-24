import styled from "styled-components/native";
import { Dimensions, StatusBar } from "react-native";
import { colorPallete } from "../../utils/colorPallete";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const PageLayoutWrapper = styled.SafeAreaView`
	flex: 1;
	background: ${colorPallete.darkBlue};
	box-sizing: border-box;
`;
export const ScrollViewWrapper = styled.ScrollView`
	flex: 1;
`;
export const ViewWrapper = styled.SafeAreaView`
	width: ${windowWidth}px;
	height: ${windowHeight - StatusBar.currentHeight}px;
	box-sizing: border-box;
	${({ center }) =>
		center &&
		`
		justify-content: center;
		align-items: center;
	`}

	${({ centerTop }) =>
		centerTop &&
		`
	align-items: center;
	`}
`;
