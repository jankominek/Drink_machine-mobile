import { PageLayoutWrapper, ViewWrapper } from "./PageLayout.styled";

export const withLayout =
	(View) =>
	({ ...props }) => {
		return (
			<PageLayoutWrapper>
				<View {...props} />
			</PageLayoutWrapper>
		);
	};
