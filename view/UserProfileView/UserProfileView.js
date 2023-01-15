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
	SettingsBoxWrapper,
	SettingsElement,
	SettingsTextTitle,
	StatCount,
	StatisticBox,
	StatisticElement,
	StatisticElementBox,
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

import { ScrollView, Text, TouchableOpacity } from "react-native";
import { changeUserName, clearDb } from "../../store/userReducer";
import { colorPallete } from "../../utils/colorPallete";
import { useEffect, useState } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Input } from "../../components/Input/Input";
import axios from "axios";
import { Button } from "../../components/Button/Button";
import { showNotification } from "../../utils/showNotification";

export const UserProfileViewContainer = ({ navigation }) => {
	const user = useSelector((state) => state.user);
	const [userName, setUserName] = useState(user?.name);
	const [isEditingName, setIsEditingName] = useState(false);
	const [isUserPref, setIsUSerPref] = useState(false);
	const [isStatistics, setIsStatistics] = useState(false);
	const [isChangePassword, setIsChangePassword] = useState(false);
	const [passwordState, setPasswordState] = useState({});
	const [userStats, setUserStats] = useState();

	const dispatch = useDispatch();

	useEffect(() => {
		if (user?.userID) {
			getUserStatistics();
		}
	}, [user?.userID]);

	const logOut = () => {
		dispatch(clearDb());
		navigation.navigate("Sign");
	};

	const onPencilPress = () => {
		setIsEditingName(!isEditingName);
		if (isEditingName) {
			axios
				.post("/changeName", { userId: user.userID, newName: userName })
				.catch((error) => {
					console.log(error);
				});
			dispatch(changeUserName(userName));
		}
	};

	const getUserStatistics = () => {
		axios.get(`/getStatsForUser/${user.userID}`).then((response) => {
			const resp = response.data;
			console.log("RESP: ", resp.amountOfDrinkPerDay);
			const userStatObject = {
				amountOfDrinkPerHour: {
					value: resp.amountOfDrinkPerHour,
					accessor: "Drinks per hour",
				},
				amountOfDrinkPerDay: {
					value: resp.amountOfDrinkPerDay,
					accessor: "Drinks per day",
				},
				amountOfDrinkPerWeek: {
					value: resp.amountOfDrinkPerWeek,
					accessor: "Drinks per week",
				},
				amountOfDrinkPerMonth: {
					value: resp.amountOfDrinkPerMonth,
					accessor: "Drinks per month",
				},
				amountOfDrinks: { value: resp.amountOfDrinks, accessor: "All drinks" },
			};

			setUserStats(userStatObject);
		});
	};

	console.log(userStats);
	const onChangeName = (value) => {
		setUserName(value);
	};

	const changePassword = () => {
		setIsChangePassword(!isChangePassword);
	};

	const onChangePasswordInput = (value, name) => {
		setPasswordState({
			...passwordState,
			[name]: value,
		});
	};

	const onSubmitPassword = () => {
		axios
			.post("/changePassword", {
				userId: user.userID,
				newPassword: passwordState.new,
			})
			.then(() => {
				showNotification(
					`Password changed`,
					`Your password has been changed correctly`,
				);
			});
	};
	const changePasswordView = (
		<SettingsBoxWrapper>
			<Input
				placeholder="New password"
				name="new"
				height="35px"
				margin={5}
				onChange={onChangePasswordInput}
			/>
			<Button
				text="Accept"
				onPress={onSubmitPassword}
				background={colorPallete.backgroundLightGray}
			/>
		</SettingsBoxWrapper>
	);

	const userPreferencesView = (
		<SettingsBoxWrapper>
			<Text>User preferences</Text>
		</SettingsBoxWrapper>
	);

	const userStatisticList =
		userStats &&
		Object.entries(userStats)?.map(([key, value]) => (
			<StatisticBox>
				<StatisticElementBox>
					<StatisticElement>{value.accessor}</StatisticElement>
				</StatisticElementBox>
				<StatisticElementBox>
					<StatCount>{value.value}</StatCount>
				</StatisticElementBox>
			</StatisticBox>
		));

	const statisticsView = (
		<SettingsBoxWrapper>{userStatisticList}</SettingsBoxWrapper>
	);

	return (
		<ScrollView>
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
								{isEditingName ? (
									<Input onChange={onChangeName} value={userName} />
								) : (
									<UserProfileName>{user?.name}</UserProfileName>
								)}
								<TouchableOpacity onPress={onPencilPress}>
									<MaterialCommunityIcons
										name="pencil-outline"
										size={22}
										color={colorPallete.textColorBackground}
									/>
								</TouchableOpacity>
							</Flex>
							<UserProfileEmail>{user?.email}</UserProfileEmail>
						</UserInfoBox>
					</UserBox>
					<SettingsBox>
						<SettingsTextTitle>Settings</SettingsTextTitle>
						<SettingsElement onPress={() => setIsUSerPref(!isUserPref)}>
							<SettingElementText>User preferences</SettingElementText>
							<SimpleLineIcons name="arrow-left" size={20} color="black" />
						</SettingsElement>
						{isUserPref && userPreferencesView}
						<SettingsElement onPress={() => setIsStatistics(!isStatistics)}>
							<SettingElementText>Statistics</SettingElementText>
							<SimpleLineIcons name="arrow-left" size={20} color="black" />
						</SettingsElement>
						{isStatistics && statisticsView}
						<SettingsElement onPress={changePassword}>
							<SettingElementText>Change password</SettingElementText>
							<SimpleLineIcons name="arrow-left" size={20} color="black" />
						</SettingsElement>
						{isChangePassword && changePasswordView}
					</SettingsBox>
					<BottomBox>
						<LogOutButtonBox onPress={logOut}>
							<LogOutBtn>Log out</LogOutBtn>
						</LogOutButtonBox>
					</BottomBox>
				</UserProfileWrapper>
			</ViewWrapper>
		</ScrollView>
	);
};

export const UserProfileView = withLayout(UserProfileViewContainer);
