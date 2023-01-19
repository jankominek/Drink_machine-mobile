import styled from "styled-components";
import { colorPallete } from "../../../utils/colorPallete";

export const UsersViewWrapperScrollView = styled.ScrollView``;
export const UsersBox = styled.View`
	width: 100%;
	display: flex;
	align-items: center;
`;

export const UsersViewTitle = styled.View`
	padding: 10px 0px;
	margin: 10px 0px;
	display: flex;
	justify-content: center;
	background: ${colorPallete.white};
	border-radius: 5px;
	align-items: center;
`;

export const UsersViewTitleText = styled.Text`
	font-size: 15px;
	color: ${colorPallete.darkBlue};
`;

export const UserField = styled.TouchableOpacity`
	width: 98%;
	min-height: 50px;
	display: flex;
	margin: 5px 0px;
	flex-direction: row;
	align-items: center;
	background: ${({ background }) => background};
	border-radius: 5px;
	padding: 5px;
`;

export const UserStatisticsBox = styled.View`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const UserFieldName = styled.Text`
	font-size: 15px;
	color: ${colorPallete.darkBlue};
`;
export const UserFieldNameBox = styled.View`
	width: 70%;
	overflow: hidden;
`;
export const UserFieldButtons = styled.View`
	display: flex;
	flex-grow: 1;
	padding: 3px;
	align-items: center;
	border-radius: 5px;
	// background: ${colorPallete.darkBlue};
`;
