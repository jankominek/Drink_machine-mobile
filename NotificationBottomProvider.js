import { useState } from "react";
import { Children } from "react";
import { ModalNotificationBottom } from "./components/ModalNotificationBottom/ModalNotificationBottom";
import SockJsClient from "react-stomp";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { updateDrinkQueue } from "./store/userReducer";
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
import { Dimensions, StyleSheet, Text } from "react-native";
import { useEffect } from "react";
import { useRef } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { colorPallete } from "./utils/colorPallete";
import { Button } from "./components/Button/Button";

const SOCKET_URL = "http://192.168.1.16:8080/queue";

export const NotificationBottomProvider = ({ children }) => {
	const [showModal, setShowModal] = useState(true);
	const user = useSelector((state) => state.user);
	const [isDrinkQueueEmpty, setIsDrinkQueueEmpty] = useState(true);
	const childrenArray = Children.toArray(children);
	const childRender = Children.map(childrenArray, (child) => child);
	const navigation = useNavigation();
	const dispatch = useDispatch();

	const sheetRef = useRef(null);

	const snapPoints = ["7%", "50%", "90%"];

	useEffect(() => {
		if (navigation.getCurrentRoute().name == "Sign") {
			// setIsDrinkQueueEmpty(user.drinkQueue.length === 0);
			setIsDrinkQueueEmpty(true);
			setShowModal(false);
		}
	}, [user, navigation]);

	const onConnected = () => {
		console.log("connected!");
	};

	const onMessageReceived = (msg) => {
		console.log("message : ", msg);
		dispatch(updateDrinkQueue(msg.queue));
		setShowModal(true);
	};

	return (
		<>
			{childRender}
			<SockJsClient
				url={SOCKET_URL}
				topics={["/topic/638774313979c738669cfe5d"]}
				onConnect={onConnected}
				onDisconnect={console.log("Disconnected!")}
				onMessage={(msg) => onMessageReceived(msg)}
				debug={false}
			/>

			{showModal && (
				<BottomSheet
					snapPoints={snapPoints}
					ref={sheetRef}
					index={-1}
					handleStyle={{
						backgroundColor: colorPallete.greenSea,
						marginBottom: -1,
						borderTopLeftRadius: 20,
						borderTopRightRadius: 20,
					}}
				>
					<BottomSheetScrollView>
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
		const color =
			drink.whichOne > 0
				? colorPallete.lightGray
				: drink.whichOne == 0
				? colorPallete.lightYellow
				: colorPallete.lightGreen;

		const onCancel = () => {};

		const onCreate = () => {};

		const onEndDrink = () => {};

		const selectItem = (index) => {
			clickedId === index ? setClickedId("") : setClickedId(index);
		};
		return (
			<DrinkElementBox key={index}>
				<Flex background="transparent" onPress={() => selectItem(index)}>
					<MaterialIcons name="local-drink" size={24} color="white" />
					<DrinkElementTitle numberOfLines={1} ellipsizeMode="head">
						{drink.drinkDTO.name}
					</DrinkElementTitle>
					<DrinkQueueNumber>Queue: {drink.whichOne + 1}</DrinkQueueNumber>
				</Flex>
				{index === clickedId && (
					<DrinkDetails>
						<Button text="Cancel" onPress={onCancel} />
						<Button text="Start" onPress={onCancel} />
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
