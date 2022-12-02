import styled from "styled-components/native";
import { colorPallete } from "../../utils/colorPallete";

export const MenuBox = styled.View`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: transparent;
`;

export const MenuItem = styled.Text`
	font-size: 15px;
	padding: 10px;
	color: ${colorPallete.textColorBackground};
`;
export const MenuItemBox = styled.TouchableOpacity`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;
