import { useEffect, useState } from "react";
import { Text } from "react-native";
import { Button } from "../../../components/Button/Button";
import { withLayout } from "../../../layout/pageLayout/PageLayout";
import { ViewWrapper } from "../../../layout/pageLayout/PageLayout.styled";
import { colorPallete } from "../../../utils/colorPallete";
import {
	UserField,
	UserFieldButtons,
	UserFieldName,
	UserFieldNameBox,
	UsersBox,
	UserStatisticsBox,
	UsersViewTitle,
	UsersViewTitleText,
	UsersViewWrapper,
	UsersViewWrapperScrollView,
} from "./UsersView.styled";
import {
	StatCount,
	StatisticBox,
	StatisticElement,
	StatisticElementBox,
} from "../../UserProfileView/UserProfileView.styled";
import axios from "axios";

const UsersViewContainer = () => {
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState("");

	useEffect(() => {
		axios.get("/getAllUsers").then((response) => {
			setUsers(response.data);
		});
	}, []);

	const blockUser = (userID) => {
		axios.post(`/blockUser/${userID}`).catch((err) => {
			console.log(err);
		});
		const updatedArray = users.filter((e) => {
			if (e.userID === userID) {
				e.blocked = true;
			}
			return e;
		});
		setUsers([...updatedArray]);
	};

	const unblockUser = (userID) => {
		axios.post(`/unblockUser/${userID}`).catch((err) => {
			console.log(err);
		});
		const updatedArray = users.filter((e) => {
			if (e.userID === userID) {
				e.blocked = false;
			}
			return e;
		});
		setUsers([...updatedArray]);
	};

	const setUser = (id) => {
		if (selectedUser !== id) {
			setSelectedUser(id);
		} else {
			setSelectedUser("");
		}
	};

	console.log("USERS: ", users);
	const userList = users.map((user) => (
		<>
			<UserField
				background={
					user.blocked ? colorPallete.blockedRed : colorPallete.greenSea
				}
				onPress={() => setUser(user.userID)}
			>
				<UserFieldNameBox>
					<UserFieldName numberOfLines={1}>{user.email}</UserFieldName>
				</UserFieldNameBox>
				<UserFieldButtons>
					{user.blocked ? (
						<Button
							text="Unlock"
							width="100%"
							onPress={() => unblockUser(user.userID)}
						/>
					) : (
						<Button
							text="Block"
							width="100%"
							onPress={() => blockUser(user.userID)}
						/>
					)}
				</UserFieldButtons>
			</UserField>
			<UserStatisticsBox></UserStatisticsBox>
		</>
	));

	return (
		<ViewWrapper>
			<UsersViewWrapperScrollView>
				<UsersViewTitle>
					<UsersViewTitleText>Users</UsersViewTitleText>
				</UsersViewTitle>
				<UsersBox>{userList}</UsersBox>
			</UsersViewWrapperScrollView>
		</ViewWrapper>
	);
};

export const UsersView = withLayout(UsersViewContainer);
