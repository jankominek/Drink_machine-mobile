import { Text } from "react-native";
import { CardComponent } from "../Card/Card";
import {
	SectionBox,
	SectionContent,
	SectionTitle,
	SectionWrapper,
} from "./Section.styled";

export const Section = (props) => {
	const { sectionTitle, content } = props;
	return (
		<SectionBox>
			<SectionTitle>{sectionTitle}</SectionTitle>
			<SectionWrapper>
				<SectionContent horizontal={true}>{content}</SectionContent>
			</SectionWrapper>
		</SectionBox>
	);
};
