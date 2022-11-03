import { withLayout } from "../../layout/pageLayout/PageLayout";
import { ViewWrapper } from "../../layout/pageLayout/PageLayout.styled";
import { FavoriteViewWrapper } from "./FavoriteView.styled";

export const FavoriteViewContainer = () => {
	return (
		<ViewWrapper>
			<FavoriteViewWrapper></FavoriteViewWrapper>
		</ViewWrapper>
	);
};

export const FavoriteView = withLayout(FavoriteViewContainer);
