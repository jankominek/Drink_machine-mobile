import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { useState } from "react";
import { SelectComponent } from "../../components/SelectComponent/SelectComponent";
import { withLayout } from "../../layout/pageLayout/PageLayout";
import { ViewWrapper } from "../../layout/pageLayout/PageLayout.styled";
import { colorPallete } from "../../utils/colorPallete";
import { AdminViewWrapper, ChangePasswordWrapper } from "./AdminView.styled";
import axios from "axios";
import { useSelector } from "react-redux";

const AdminViewContainer = () => {
	const navigation = useNavigation();

	const onMachineClick = () => navigation.navigate("Machine");
	const user = useSelector((store) => store.user.userID);

	const [newPasswd, setNewPasswd] = useState("");

	const onUsersClick = () => navigation.navigate("Users");

	const [showSettingPasswd, setShowSettingPasswd] = useState(false);

	const onChangePassword = () => {
		console.log({ userId: user, newPassword: newPasswd });
		if (newPasswd.length) {
			axios
				.post("/changeAdminPassword", { userId: user, newPassword: newPasswd })
				.then(() => {
					setShowSettingPasswd(false);
				});
		}
	};

	const onChangeTextPasswd = (value) => {
		setNewPasswd(value);
	};

	return (
		<ViewWrapper>
			<AdminViewWrapper>
				<Button
					text="Machine"
					margin={10}
					width="80%"
					background={colorPallete.backgroundDarkGray}
					onPress={onMachineClick}
				/>
				<Button
					text="Users"
					margin={10}
					width="80%"
					onPress={onUsersClick}
					background={colorPallete.backgroundDarkGray}
				/>
				<Button
					text="Change password"
					margin={10}
					width="80%"
					onPress={() => setShowSettingPasswd(!showSettingPasswd)}
					background={colorPallete.backgroundDarkGray}
				/>
				{showSettingPasswd && (
					<ChangePasswordWrapper>
						<Input
							width="100%"
							placeholder="New password"
							onChange={onChangeTextPasswd}
							value={newPasswd}
							password
						/>
						<Button
							margin={10}
							text="Accept"
							onPress={onChangePassword}
							borderColor={colorPallete.darkBlue}
						/>
					</ChangePasswordWrapper>
				)}
			</AdminViewWrapper>
		</ViewWrapper>
	);
};

export const AdminView = withLayout(AdminViewContainer);
