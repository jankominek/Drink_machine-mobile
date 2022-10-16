import { Card, Title, Paragraph } from "react-native-paper";
import { CardWrapper } from "./Card.styled";

export const CardComponent = (props) => {
	const { backgroundColor } = props;

	const chosedBgColor = backgroundColor ? backgroundColor : "white";
	return (
		<CardWrapper>
			<Card style={{ backgroundColor: chosedBgColor }}>
				<Card.Content>
					<Title>Card ee</Title>
					<Paragraph>Card content</Paragraph>
				</Card.Content>
			</Card>
		</CardWrapper>
	);
};
