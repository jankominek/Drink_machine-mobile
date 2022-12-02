import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BackdropMenu } from "../../components/BackdropMenu/BackdropMenu";
import { CardComponent, MemoizedCard } from "../../components/Card/Card";
import { CardButton } from "../../components/CardButton/CardButton";
import { Section } from "../../components/Section/Section";
import { withLayout } from "../../layout/pageLayout/PageLayout";
import { ViewWrapper } from "../../layout/pageLayout/PageLayout.styled";
import { initUser } from "../../store/userReducer";
import { colorPallete } from "../../utils/colorPallete";
import BottomSheet, {
	BottomSheetScrollView,
	BottomSheetView,
} from "@gorhom/bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";
import {
	BannerContent,
	BannerLogo,
	BannerText,
	BannerWrapper,
	Flex,
	HomeViewContentContainer,
} from "./HomeView.styled";

import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { DrinkModal } from "../../components/DrinkModal/DrinkModal";

const HomeViewContainer = ({ navigation }) => {
	const dispatch = useDispatch();
	const selector = useSelector((state) => state.user);
	const [showModal, setShowModal] = useState(false);
	const [drinkModalData, setDrinkModalData] = useState();
	const [showDrinkModal, setShowDrinkModal] = useState(false);

	const sheetRef = useRef(null);

	const snapPoints = ["50%"];

	useFocusEffect(
		React.useCallback(() => {
			!(selector?.name !== "" && selector?.email !== "") &&
				navigation.navigate("Sign");
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
					backgroundColor={colorPallete.cardBackground}
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

	const onPanClose = () => {
		setShowDrinkModal(false);
	};
	return (
		<>
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
						{/* <Section sectionTitle="Drinks" content={ReadyDrinks} /> */}
						<Section
							sectionTitle="Recently selected"
							content={RecentlySelectedContent}
						/>
					</HomeViewContentContainer>
				</BackdropMenu>
			</ViewWrapper>
		</>
	);
};

export const HomeView = withLayout(HomeViewContainer);
