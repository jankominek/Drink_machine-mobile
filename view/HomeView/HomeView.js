import { Image, Text } from "react-native";
import { BackdropMenu } from "../../components/BackdropMenu/BackdropMenu";
import { Button } from "../../components/Button/Button";
import { CardComponent } from "../../components/Card/Card";
import { Input } from "../../components/Input/Input";
import { Section } from "../../components/Section/Section";
import { withLayout } from "../../layout/pageLayout/PageLayout";
import { ViewWrapper } from "../../layout/pageLayout/PageLayout.styled";
import { colorPallete } from "../../utils/colorPallete";
import {
	BannerContent,
	BannerLogo,
	BannerText,
	BannerWrapper,
	HomeViewContentContainer,
} from "./HomeView.styled";

const HomeViewContainer = () => {
	const RecommendedDrinksContent = (
		<>
			<CardComponent />
			<CardComponent />
			<CardComponent />
			<CardComponent />
		</>
	);

	const RecentlySelectedContent = (
		<>
			<CardComponent backgroundColor={colorPallete.yellow} />
			<CardComponent backgroundColor={colorPallete.yellow} />
			<CardComponent backgroundColor={colorPallete.yellow} />
			<CardComponent backgroundColor={colorPallete.yellow} />
		</>
	);
	return (
		<ViewWrapper>
			<BackdropMenu>
				<HomeViewContentContainer>
					<BannerWrapper>
						<BannerContent>
							<BannerText fontSize={30}>Make your</BannerText>
							<BannerText fontSize={20}>Favourite</BannerText>
							<BannerText fontSize={15}>Drinks.</BannerText>
							<BannerLogo source={require("../../assets/drinks2.png")} />
						</BannerContent>
					</BannerWrapper>
					<Section
						sectionTitle="Recommended drinks"
						content={RecommendedDrinksContent}
					/>
					<Section
						sectionTitle="Recently selected"
						content={RecentlySelectedContent}
					/>
				</HomeViewContentContainer>
			</BackdropMenu>
		</ViewWrapper>
	);
};

export const HomeView = withLayout(HomeViewContainer);
