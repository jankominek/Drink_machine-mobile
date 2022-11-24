import { useDispatch, useSelector } from "react-redux";
import { withLayout } from "../../layout/pageLayout/PageLayout";
import { ViewWrapper } from "../../layout/pageLayout/PageLayout.styled";
import {
	BottomBox,
	Flex,
	LogOutBtn,
	LogOutButtonBox,
	SettingElementText,
	SettingsBox,
	SettingsElement,
	SettingsTextTitle,
	UserBox,
	UserIconNameBox,
	UserInfoBox,
	UserNameText,
	UserProfileEmail,
	UserProfileName,
	UserProfileWrapper,
} from "./UserProfileView.styled";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Text, TouchableOpacity } from "react-native";
import { clearDb } from "../../store/userReducer";

export const UserProfileViewContainer = ({ navigation }) => {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	console.log(user);

	const logOut = () => {
		dispatch(clearDb());
		navigation.navigate("Sign");
	};
	return (
		<ViewWrapper>
			<UserProfileWrapper>
				<UserBox>
					<UserIconNameBox>
						<UserNameText>
							{String(user?.name).toUpperCase().slice(0, 1)}
						</UserNameText>
					</UserIconNameBox>
					<UserInfoBox>
						<Flex>
							<UserProfileName>{user?.name}</UserProfileName>
							<TouchableOpacity>
								<MaterialCommunityIcons
									name="pencil-outline"
									size={22}
									color="white"
								/>
							</TouchableOpacity>
						</Flex>
						<UserProfileEmail>{user?.email}</UserProfileEmail>
					</UserInfoBox>
				</UserBox>
				<SettingsBox>
					<SettingsTextTitle>Settings</SettingsTextTitle>
					<SettingsElement>
						<SettingElementText>User preferences</SettingElementText>
						<MaterialIcons name="arrow-forward-ios" size={15} color="black" />
					</SettingsElement>
					<SettingsElement>
						<SettingElementText>Statistics</SettingElementText>
						<MaterialIcons name="arrow-forward-ios" size={15} color="black" />
					</SettingsElement>
					<SettingsElement>
						<SettingElementText>Change password</SettingElementText>
						<MaterialIcons name="arrow-forward-ios" size={15} color="black" />
					</SettingsElement>
				</SettingsBox>
				<BottomBox>
					<LogOutButtonBox onPress={logOut}>
						<LogOutBtn>Log out</LogOutBtn>
					</LogOutButtonBox>
				</BottomBox>
			</UserProfileWrapper>
		</ViewWrapper>
	);
};

export const UserProfileView = withLayout(UserProfileViewContainer);
