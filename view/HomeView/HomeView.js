import { Image, Text } from "react-native";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { withLayout } from "../../layout/pageLayout/PageLayout";
import { ViewWrapper } from "../../layout/pageLayout/PageLayout.styled";

const HomeViewContainer = () => {
	return (
		<ViewWrapper>
			<Text>Home Page View</Text>
			<Input />
			<Button outline text="asdas" />
		</ViewWrapper>
	);
};

export const HomeView = withLayout(HomeViewContainer);
