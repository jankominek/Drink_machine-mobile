import { Text } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { CardContent, CardWrapper, DrinkImage } from "./Card.styled";

export const CardComponent = (props) => {
	const { backgroundColor, icon, description } = props;

	const chosedBgColor = backgroundColor ? backgroundColor : "white";
	// const iconImage = icon ? require(`../../assets/${icon}`) : null;
	return (
		<CardWrapper>
			<Card
				style={{
					backgroundColor: chosedBgColor,
				}}
			>
				<Card.Content style={{ fontAlign: "center" }}>
					<CardContent>
						<DrinkImage source={require(`../../assets/jameson.png`)} />
						<Paragraph>{description}</Paragraph>
					</CardContent>
				</Card.Content>
			</Card>
		</CardWrapper>
	);
};
