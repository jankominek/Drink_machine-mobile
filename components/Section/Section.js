import { Text } from "react-native";
import { CardComponent } from "../Card/Card";
import { SectionContent, SectionTitle, SectionWrapper } from "./Section.styled";

export const Section = (props) => {
	const { sectionTitle, content } = props;
	return (
		<SectionWrapper>
			<SectionTitle>{sectionTitle}</SectionTitle>
			<SectionContent horizontal={true}>{content}</SectionContent>
		</SectionWrapper>
	);
};
