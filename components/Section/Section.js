import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import { CardComponent } from "../Card/Card";
import {
	SectionBox,
	SectionContent,
	SectionTitle,
	SectionTitleBox,
	SectionWrapper,
} from "./Section.styled";

export const Section = (props) => {
	const { sectionTitle, content } = props;
	const navigation = useNavigation();
	const onViewAll = () => {
		navigation.navigate("AllRecent");
	};

	return (
		<SectionBox>
			<SectionTitleBox>
				<SectionTitle>{sectionTitle}</SectionTitle>
				<TouchableOpacity onPress={onViewAll}>
					{sectionTitle === "Recently selected" && (
						<SectionTitle>View all</SectionTitle>
					)}
				</TouchableOpacity>
			</SectionTitleBox>
			<SectionWrapper>
				<SectionContent horizontal={true}>{content}</SectionContent>
			</SectionWrapper>
		</SectionBox>
	);
};
