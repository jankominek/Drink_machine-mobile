import { useCallback, useState } from "react";
import { useEffect } from "react";
import React from "react";
import { Image, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { BackdropMenu } from "../../components/BackdropMenu/BackdropMenu";
import { Button } from "../../components/Button/Button";
import { CardComponent, MemoizedCard } from "../../components/Card/Card";
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

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import axios from "axios";
import { DrinkModal } from "../../components/DrinkModal/DrinkModal";
import { useMemo } from "react";
import { isUserLogged } from "../../utils/isUserLogged";

const HomeViewContainer = ({ navigation }) => {
	const dispatch = useDispatch();
	const selector = useSelector((state) => state.user);
	const [showModal, setShowModal] = useState(false);
	const [drinkModalData, setDrinkModalData] = useState();
	const [showDrinkModal, setShowDrinkModal] = useState(false);

	useFocusEffect(
		React.useCallback(() => {
			!(selector?.name !== "" && selector?.email !== "") &&
				navigation.navigate("Sign");
			if (selector?.drinkQueue.length !== 0) {
				setShowModal(true);
			} else {
				setShowModal(false);
			}
		}, [selector]),
	);

	useFocusEffect(
		React.useCallback(() => {
			axios.get(`/getUserData/${selector.userID}`).then((response) => {
				dispatch(initUser(response.data));
			});
		}, []),
	);

	const RecommendedDrinksContent = (
		<>
			<CardComponent icon="jameson" description="Jameson" />
			<CardComponent icon="jameson" description="Jameson" />
			<CardComponent icon="jameson" description="Jameson" />
			<CardComponent icon="jameson" description="Jameson" />
		</>
	);

	const onPressCard = (element) => {
		setDrinkModalData(element);
		setShowDrinkModal(true);
	};

	const RecentlySelectedContent = (
		<>
			{selector?.lastDrinks?.map((element, index) => (
				<MemoizedCard
					backgroundColor={colorPallete.yellow}
					description={element.name}
					item={element}
					onPress={onPressCard}
					index={index}
				/>
			))}
		</>
	);

	const ReadyDrinks = (
		<>
			{/* <CardComponent icon="jameson" description="Jameson" />
			<CardComponent icon="jameson" description="Jameson" />
			<CardComponent icon="jameson" description="Jameson" />
			<CardComponent icon="jameson" description="Jameson" /> */}
		</>
	);

	const createDrink = () => {
		navigation.navigate("CreateDrink");
	};

	const openFavorite = () => {
		navigation.navigate("Favorites");
	};

	const createDrinkModal = () => {};

	const closeDrinkModal = () => {
		setShowDrinkModal(false);
		setDrinkModalData();
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
					{/* <Section
						sectionTitle="Recommended drinks"
						content={RecommendedDrinksContent}
					/> */}
					<Section sectionTitle="Drinks" content={ReadyDrinks} />
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
			{showDrinkModal && drinkModalData && (
				<DrinkModal data={drinkModalData} onClose={closeDrinkModal} />
			)}
		</ViewWrapper>
	);
};

export const HomeView = withLayout(HomeViewContainer);
