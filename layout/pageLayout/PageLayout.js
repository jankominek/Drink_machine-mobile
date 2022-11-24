import { PageLayoutWrapper, ScrollViewWrapper } from "./PageLayout.styled";
import { Dimensions, StatusBar } from "react-native";

import { useHeaderHeight } from "@react-navigation/elements";
export const withLayout =
	(View) =>
	({ ...props }) => {
		// const headerHeight = useHeaderHeight();
		// const pageSize = Dimenstions.windowHeight - headerHeight;
		return (
			<PageLayoutWrapper>
				<ScrollViewWrapper>
					<View {...props} />
				</ScrollViewWrapper>
			</PageLayoutWrapper>
		);
	};
