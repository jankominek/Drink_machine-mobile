import { Text } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { CardContent, CardWrapper, DrinkImage } from "./Card.styled";

export const CardComponent = (props) => {
	const { backgroundColor, icon, description, onPress, item } = props;

	const chosedBgColor = backgroundColor ? backgroundColor : "white";

	const onPressCard = () => {
		console.log("item: ", item);
		onPress && onPress(item);
	};
	return (
		<CardWrapper onPress={onPressCard}>
			<Card
				style={{
					backgroundColor: chosedBgColor,
				}}
			>
				<Card.Content style={{ fontAlign: "center" }}>
					<CardContent>
						<Paragraph>{description}</Paragraph>
					</CardContent>
				</Card.Content>
			</Card>
		</CardWrapper>
	);
};
