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
	UsersViewTitle,
	UsersViewTitleText,
	UsersViewWrapper,
	UsersViewWrapperScrollView,
} from "./UsersView.styled";
import axios from "axios";

const UsersViewContainer = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios.get("/getAllUsers").then((response) => {
			setUsers(response.data);
		});
	}, []);

	const blockUser = (userID) => {
		console.log("userid: ", userID);
		axios.post(`/blockUser/${userID}`).catch((err) => {
			console.log(err);
		});
	};
	const userList = users.map((user) => (
		<UserField
			background={
				user.blocked ? colorPallete.blockedRed : colorPallete.nonBlockedGreen
			}
		>
			<UserFieldNameBox>
				<UserFieldName numberOfLines={1}>{user.email}</UserFieldName>
			</UserFieldNameBox>
			<UserFieldButtons>
				{user.blocked ? (
					<Button text="Unlock" width="100%" />
				) : (
					<Button
						text="Block"
						width="100%"
						onPress={() => blockUser(user.userID)}
					/>
				)}
			</UserFieldButtons>
		</UserField>
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
