import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BackdropMenu } from "../../components/BackdropMenu/BackdropMenu";
import { CardComponent, MemoizedCard } from "../../components/Card/Card";
import { CardButton } from "../../components/CardButton/CardButton";
import { Section } from "../../components/Section/Section";
import { withLayout } from "../../layout/pageLayout/PageLayout";
import { ViewWrapper } from "../../layout/pageLayout/PageLayout.styled";
import { initUser, toggleBottomSheet } from "../../store/userReducer";
import { colorPallete } from "../../utils/colorPallete";
import { showNotification } from "../../utils/showNotification";
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

const HomeViewContainer = (props) => {
	const { navigation, data } = props;
	const dispatch = useDispatch();
	const selector = useSelector((state) => state.user);
	const [showModal, setShowModal] = useState(false);
	const [drinkModalData, setDrinkModalData] = useState();
	const [showDrinkModal, setShowDrinkModal] = useState(false);
	const [homeContainerHeight, setHomeContainerHeight] = useState(0);

	const sheetRef = useRef(null);
	const viewRef = useRef(null);

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
				console.log(response.data);
				dispatch(initUser(response.data));
			});
		}, []),
	);
	const onPressCard = (element) => {
		setDrinkModalData(element);
		setShowDrinkModal(true);
		dispatch(toggleBottomSheet(false));
	};

	const RecommendedDrinksContent = (
		<>
			{selector?.recomendedDrinks?.map((element, index) => (
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
			{selector?.premadeDrinks?.map((element, index) => (
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

	const createDrink = () => {
		navigation.navigate("CreateDrink");
	};

	const openFavorite = () => {
		navigation.navigate("Favorites");
	};

	const closeDrinkModal = () => {
		setShowDrinkModal(false);
		setDrinkModalData();
	};

	const onPanClose = () => {
		setShowDrinkModal(false);
		dispatch(toggleBottomSheet(true));
	};

	const createDrinkModal = (data) => {
		setShowDrinkModal(false);
		dispatch(toggleBottomSheet(true));
		axios
			.post("/addToQueue", { userId: selector.userID, drinkId: data.drinkID })
			.catch((err) => {
				showNotification(
					"Something went wrong!",
					"Describe problem with administrator",
				);
			});
	};
	return (
		<>
			<ViewWrapper>
				<BackdropMenu>
					<HomeViewContentContainer
						onLayout={(event) => {
							var { x, y, width, height } = event.nativeEvent.layout;
							setHomeContainerHeight(height);
						}}
					>
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
						<Section sectionTitle="Premade drinks" content={ReadyDrinks} />
						<Section
							sectionTitle="Recommended drinks"
							content={RecommendedDrinksContent}
						/>
						<Section
							sectionTitle="Recently selected"
							content={RecentlySelectedContent}
						/>
						{drinkModalData && showDrinkModal && (
							<BottomSheet
								snapPoints={snapPoints}
								ref={sheetRef}
								handleStyle={{
									backgroundColor: colorPallete.backgroundDarkGray,
									marginBottom: -1,
									borderTopLeftRadius: 20,
									borderTopRightRadius: 20,
								}}
								enablePanDownToClose={true}
								onClose={onPanClose}
							>
								<BottomSheetScrollView
									backgroundColor={colorPallete.backgroundDarkGray}
								>
									<DrinkModal
										data={drinkModalData}
										onClose={closeDrinkModal}
										onCreate={createDrinkModal}
										parentHeight={homeContainerHeight}
									/>
								</BottomSheetScrollView>
							</BottomSheet>
						)}
					</HomeViewContentContainer>
				</BackdropMenu>
			</ViewWrapper>
		</>
	);
};

export const HomeView = withLayout(HomeViewContainer);
