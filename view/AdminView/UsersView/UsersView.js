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

const users = [
	{ email: "email 1", blocked: false },
	{ email: "email 2", blocked: false },
	{ email: "email 3", blocked: true },
	{ email: "email 4", blocked: false },
];

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
				<Button text="Block" width="100%" />
			)}
		</UserFieldButtons>
	</UserField>
));
const UsersViewContainer = () => {
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
