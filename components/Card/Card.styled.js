import { Dimensions } from "react-native";
import styled from "styled-components";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const CardWrapper = styled.View`
	width: ${windowWidth / 3}px;
	margin: 2px 10px;
`;
