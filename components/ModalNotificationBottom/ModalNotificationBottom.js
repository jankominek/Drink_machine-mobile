import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { colorPallete } from "../../utils/colorPallete";
import { Button } from "../Button/Button";
import {
	ButtonWrapper,
	ModalNotificationBottomWrapper,
	ModalTitle,
} from "./ModalNotificationBottom.styled";

export const ModalNotificationBottom = ({ isVisible, text }) => {
	const navigation = useNavigation();

	return (
		isVisible && (
			<ModalNotificationBottomWrapper>
				<ModalTitle numberOfLines={1}>{text}</ModalTitle>
				<Button
					text="Show"
					background={colorPallete.lightOrange}
					onPress={() => navigation.navigate("DrinkOrder")}
				/>
			</ModalNotificationBottomWrapper>
		)
	);
};
