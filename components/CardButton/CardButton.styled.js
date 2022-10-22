import { Dimensions } from "react-native";
import styled from "styled-components";
import { colorPallete } from "../../utils/colorPallete";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const CardButtonWrapper = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
	flex: 1;
	margin: 0px 2.5%;
	background: ${colorPallete.orange};
	border-radius: 5px;
	height: 40px;
`;

export const CardButtonText = styled.Text`
	font-size: 15px;
	color: ${colorPallete.darkBlue};
`;
