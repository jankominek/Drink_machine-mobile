import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { useDispatch } from "react-redux";
import { colorPallete } from "../../utils/colorPallete";
import { Button } from "../Button/Button";
import {
	ButtonWrapper,
	Line,
	ModalNotificationBottomWrapper,
	ModalTitle,
} from "./ModalNotificationBottom.styled";

export const ModalNotificationBottom = ({
	isVisible,
	text,
	onShowButtonClick,
	yPosition,
	styles,
}) => {
	const navigation = useNavigation();
	const dispatch = useDispatch();

	return (
		isVisible && (
			<ModalNotificationBottomWrapper>
				<Line />
				<ModalTitle numberOfLines={1}>{text}</ModalTitle>
				{/* <Button
					text="Show"
					background={colorPallete.lightOrange}
					onPress={() => onShowButtonClick()}
				/> */}
			</ModalNotificationBottomWrapper>
		)
	);
};
