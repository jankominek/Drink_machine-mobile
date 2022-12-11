import { useState } from "react";
import { Children } from "react";
import { ModalNotificationBottom } from "./components/ModalNotificationBottom/ModalNotificationBottom";
import SockJsClient from "react-stomp";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { toggleBottomSheet, updateDrinkQueue } from "./store/userReducer";
import { MaterialIcons } from "@expo/vector-icons";
import {
	DrinkDetails,
	DrinkElementBox,
	DrinkElementTitle,
	DrinkModalWrapper,
	DrinkQueueNumber,
	Flex,
	ModalTitle,
} from "./NotificationBottomProvider.styled";
import axios from "axios";
import { Dimensions, StyleSheet, Text } from "react-native";
import { useEffect } from "react";
import { useRef } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { colorPallete } from "./utils/colorPallete";
import { Button } from "./components/Button/Button";
import React from "react";
import { getAxiosConfig } from "./utils/axiosConfig";
import { showNotification } from "./utils/showNotification";

export const NotificationBottomProvider = ({ children }) => {
	const user = useSelector((state) => state.user);
	const [isSocket, setIsSocket] = useState(false);
	const childrenArray = Children.toArray(children);
	const childRender = Children.map(childrenArray, (child) =>
		React.cloneElement(child, { data: "testDATA" }),
	);
	const navigation = useNavigation();
	const dispatch = useDispatch();

	const defaultURL = getAxiosConfig() ? getAxiosConfig() : "";
	const SOCKET_URL = `${defaultURL}/queue`;

	const sheetRef = useRef(null);

	const snapPoints = ["7%", "50%", "90%"];

	useEffect(() => {
		isSocket && axios.post(`/getQueue/${user?.userID}`);
	}, [isSocket]);

	useEffect(() => {
		if (navigation.getCurrentRoute().name == "Sign") {
			dispatch(toggleBottomSheet(false));
		}

		console.log("reloooooad");
	}, [navigation]);

	const onConnected = () => {
		console.log("connected!");
		setTimeout(() => {
			console.log("WOOORKING");
			setIsSocket(true);
		}, 3000);
	};

	const checkFirstInQueue = (queue) => {
		const firstInQueue = queue.find((element) => element.whichOne == 0);
		if (firstInQueue) {
			showNotification(
				`Drink ready to start`,
				`Your drink ${firstInQueue.drinkDTO.name} is ready to prepare`,
			);
		}
	};

	const onMessageReceived = (msg) => {
		console.log("message : \n\n\n", msg);
		dispatch(updateDrinkQueue(msg.queue));
		dispatch(toggleBottomSheet(true));
		checkFirstInQueue(msg.queue);
	};

	console.log("XXXX: ", user.showBottomSheet);

	console.log("isSocket", isSocket);
	return (
		<>
			{childRender}
			{user.userID && defaultURL && (
				<SockJsClient
					url={SOCKET_URL}
					topics={[`/topic/${user.userID}`]}
					onConnect={onConnected}
					onDisconnect={console.log("Disconnected!")}
					onMessage={(msg) => onMessageReceived(msg)}
					debug={false}
				/>
			)}

			{user?.showBottomSheet && user?.drinkQueue.length !== 0 && (
				<BottomSheet
					snapPoints={snapPoints}
					ref={sheetRef}
					handleStyle={{
						backgroundColor: colorPallete.greenSea,
						marginBottom: -1,
						borderTopLeftRadius: 20,
						borderTopRightRadius: 20,
					}}
				>
					<BottomSheetScrollView backgroundColor={colorPallete.greenSea}>
						<DrinkQueueModal data={user.drinkQueue} />
					</BottomSheetScrollView>
				</BottomSheet>
			)}
		</>
	);
};

const DrinkQueueModal = ({ data, onModalClose }) => {
	console.log("data: ", data);

	const [clickedId, setClickedId] = useState("");

	const drinkList = data.map((drink, index) => {
		const colorIcon =
			drink.whichOne === -1
				? colorPallete.darkBlue
				: drink.whichOne === 0
				? colorPallete.darkBlue
				: colorPallete.white;

		const onCancel = () => {
			axios.post(`/removeFromQueue/${drink.queueId}`).then(() => {
				showNotification(
					`Remove drink`,
					`Your drink ${drink.drinkDTO.name} has been removed from queue.`,
				);
			});
		};

		const onCreate = () => {
			console.log("drink: ", drink.queueId);
			axios.post(`/makeDrink/${drink.queueId}`).then(() => {
				showNotification(
					`Making drink`,
					`Your drink ${drink.drinkDTO.name} is being made.`,
				);
			});
		};

		const onEndDrink = () => {
			axios.post(`/receiveDrink/${drink.queueId}`).then(() => {
				showNotification(`Drink confirmation`, `Drink received successfully`);
			});
		};

		const selectItem = (index) => {
			clickedId === index ? setClickedId("") : setClickedId(index);
		};

		return (
			<DrinkElementBox key={index}>
				<Flex
					background="transparent"
					onPress={() => selectItem(index)}
					status={drink.whichOne}
				>
					<MaterialIcons name="local-drink" size={24} color={colorIcon} />
					<DrinkElementTitle
						numberOfLines={1}
						ellipsizeMode="head"
						status={drink.whichOne}
					>
						{drink.drinkDTO.name}
					</DrinkElementTitle>
					{drink.whichOne >= 0 && (
						<DrinkQueueNumber status={drink.whichOne}>
							Queue: {drink.whichOne + 1}
						</DrinkQueueNumber>
					)}
				</Flex>
				{index === clickedId && drink.whichOne === 0 && (
					<DrinkDetails>
						<Button text="Cancel" onPress={onCancel} />
						<Button text="Start" onPress={onCreate} />
					</DrinkDetails>
				)}
				{index === clickedId && drink.whichOne > 0 && (
					<DrinkDetails>
						<Button text="Cancel" onPress={onCancel} />
					</DrinkDetails>
				)}
				{index === clickedId && drink.whichOne === -1 && (
					<DrinkDetails>
						<Button text="Pick up drink" onPress={onEndDrink} />
					</DrinkDetails>
				)}
			</DrinkElementBox>
		);
	});
	return (
		<DrinkModalWrapper>
			<ModalTitle>Drink Queue</ModalTitle>
			{drinkList}
		</DrinkModalWrapper>
	);
};
