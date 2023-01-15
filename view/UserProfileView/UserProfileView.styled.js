import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { colorPallete } from "../../utils/colorPallete";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const UserProfileWrapper = styled.View`
	display: flex;
	flex-direction: column;
	flex: 1;
	align-items: center;
`;

export const UserBox = styled.View`
	width: 100%;
	margin-top: 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const UserIconNameBox = styled.View`
	width: ${windowWidth / 3}px;
	height: ${windowWidth / 3}px;
	display: flex;
    margin-left: 10px;
	justify-content: center;
	background: ${colorPallete.textColorBackground}
	align-items: center;
	border-radius: ${windowWidth / 3 / 2}px;
`;

export const UserNameText = styled.Text`
	font-size: 25px;
	color: ${colorPallete.white};
`;

export const Flex = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;
export const UserInfoBox = styled.View`
	justify-content: center;
	align-items: center;
`;

export const UserProfileName = styled.Text`
	font-size: 22px;
	margin: 0 15px;
	color: ${colorPallete.textColorBackground};
`;

export const UserProfileEmail = styled(UserProfileName)`
	font-size: 15px;
	color: ${colorPallete.textColorBackground};
`;

export const SettingsBox = styled.View`
	width: 95%;
	flex: 1;
	display: flex;
	align-items: center;

	margin: 10px 0px;
	border-radius: 5px;
`;
export const SettingsTextTitle = styled.Text`
	width: 100%;
	color: ${colorPallete.textColorBackground};
`;
export const SettingsElement = styled.TouchableOpacity`
	width: 100%;
	border-radius: 5px;
	margin: 10px 0;
	padding: 5px 5px;
	background: ${colorPallete.white};
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
`;

export const SettingElementText = styled.Text`
	font-size: 15px;
	padding: 8px 10px;
	flex-grow: 1;
	color: ${colorPallete.textColorBackground};
`;

export const SettingsBoxWrapper = styled.View`
	width: 100%;
	padding: 10px;
	display: flex;
	align-items: center;
	background: ${colorPallete.backgroundDarkGray};
	border-radius: 10px;
`;

export const StatisticBox = styled.View`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const StatisticElementBox = styled.View`
	width: 100%;
	heght: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 3px;
	margin: 2px 0px;
	border-radius: 5px;
	background: ${colorPallete.darkLightGray};
`;
export const StatisticElement = styled.Text`
	font-size: 16px;
	font-weight: 500;
`;

export const StatCount = styled.Text`
	font-size: 16px;
	font-weight: 400;
`;

export const BottomBox = styled.View`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LogOutButtonBox = styled.TouchableOpacity`
	background: ${colorPallete.red};
	border-radius: 5px;
`;
export const LogOutBtn = styled.Text`
	font-size: 15px;
	color: ${colorPallete.textColorBackground};
	padding: 8px 25px;
`;
