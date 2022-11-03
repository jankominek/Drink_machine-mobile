import { Dimensions } from "react-native";
import { Colors } from "react-native-paper";
import styled from "styled-components";
import { colorPallete } from "../../utils/colorPallete";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SELECT_HEIGHT = 40;
const SELECT_WIDTH = windowWidth * 0.7;

export const SelectWrapper = styled.View`
	min-height: ${SELECT_HEIGHT}px;
	width: ${windowWidth * 0.7}px;
`;

export const SelectButton = styled.TouchableOpacity`
	width: ${SELECT_WIDTH}px;
	height: ${SELECT_HEIGHT}px;
	border-radius: 5px;
	background: ${colorPallete.orange};
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SelectItemField = styled.View`
	width: ${SELECT_WIDTH}px;
	padding: 5px 0px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SelectText = styled.Text`
	font-size: 15;
	color: ${colorPallete.white};
`;

export const SelectItem = styled(SelectText)``;

export const SelectItemBox = styled.View`
	min-height: 10px;
	width: ${SELECT_WIDTH}px;
	background: ${colorPallete.lightOrange};
	border-radius: 5px;
`;
