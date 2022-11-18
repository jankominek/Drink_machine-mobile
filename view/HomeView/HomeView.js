import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import { Image, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { BackdropMenu } from "../../components/BackdropMenu/BackdropMenu";
import { Button } from "../../components/Button/Button";
import { CardComponent } from "../../components/Card/Card";
import { CardButton } from "../../components/CardButton/CardButton";
import { Input } from "../../components/Input/Input";
import { ModalNotificationBottom } from "../../components/ModalNotificationBottom/ModalNotificationBottom";
import { Section } from "../../components/Section/Section";
import { withLayout } from "../../layout/pageLayout/PageLayout";
import { ViewWrapper } from "../../layout/pageLayout/PageLayout.styled";
import { initUser, userState } from "../../store/userReducer";
import { colorPallete } from "../../utils/colorPallete";
import {
	BannerContent,
	BannerLogo,
	BannerText,
	BannerWrapper,
	Flex,
	HomeViewContentContainer,
} from "./HomeView.styled";

import { useFocusEffect } from "@react-navigation/native";

const HomeViewContainer = ({ navigation }) => {
	const dispatch = useDispatch();
	const selector = useSelector((state) => state.user);
	const [showModal, setShowModal] = useState(false);

	// useEffect(() => {
	// 	if (selector?.drinkQueue.length !== 0) {
	// 		setShowModal(true);
	// 	} else {
	// 		setShowModal(false);
	// 	}
	// }, [selector]);

	useFocusEffect(
		React.useCallback(() => {
			if (selector?.drinkQueue.length !== 0) {
				setShowModal(true);
			} else {
				setShowModal(false);
			}
		}, [selector]),
	);

	const RecommendedDrinksContent = (
		<>
			<CardComponent icon="jameson" description="Jameson" />
			<CardComponent icon="jameson" description="Jameson" />
			<CardComponent icon="jameson" description="Jameson" />
			<CardComponent icon="jameson" description="Jameson" />
		</>
	);

	const RecentlySelectedContent = (
		<>
			<CardComponent
				backgroundColor={colorPallete.yellow}
				icon="jameson"
				description="Jameson"
			/>
			<CardComponent
				backgroundColor={colorPallete.yellow}
				icon="jameson"
				description="Jameson"
			/>
			<CardComponent
				backgroundColor={colorPallete.yellow}
				icon="jameson"
				description="Jameson"
			/>
			<CardComponent
				backgroundColor={colorPallete.yellow}
				icon="jameson"
				description="Jameson"
			/>
		</>
	);

	const createDrink = () => {
		navigation.navigate("CreateDrink");
	};

	const openFavorite = () => {
		navigation.navigate("Favorites");
	};
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
					<Flex>
						<CardButton onClick={createDrink} text="Create" />
						<CardButton onClick={openFavorite} text="Favorite" />
					</Flex>
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
			{showModal && (
				<ModalNotificationBottom
					isVisible={showModal}
					text="You're 2 in queue"
				/>
			)}
		</ViewWrapper>
	);
};

export const HomeView = withLayout(HomeViewContainer);
