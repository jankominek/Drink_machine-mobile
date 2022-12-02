import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button/Button";
import { SelectComponent } from "../../components/SelectComponent/SelectComponent";
import { withLayout } from "../../layout/pageLayout/PageLayout";
import { ViewWrapper } from "../../layout/pageLayout/PageLayout.styled";
import { colorPallete } from "../../utils/colorPallete";
import { AdminViewWrapper } from "./AdminView.styled";

const AdminViewContainer = () => {
	const navigation = useNavigation();

	const onMachineClick = () => navigation.navigate("Machine");

	const onUsersClick = () => navigation.navigate("Users");

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
			</AdminViewWrapper>
		</ViewWrapper>
	);
};

export const AdminView = withLayout(AdminViewContainer);
