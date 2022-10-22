import { Text } from "react-native";
import { withLayout } from "../../layout/pageLayout/PageLayout";

export const CreateDrinkViewContainer = (props) => {
	return (
		<>
			<Text>create drink</Text>
		</>
	);
};

export const CreateDrinkView = withLayout(CreateDrinkViewContainer);
