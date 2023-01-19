import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "../../components/Button/Button";
import { withLayout } from "../../layout/pageLayout/PageLayout";
import { ViewWrapper } from "../../layout/pageLayout/PageLayout.styled";
import { colorPallete } from "../../utils/colorPallete";
import {
	AllHistoryViewWrapper,
	HistoryElementBox,
	HistoryElementTitle,
} from "./AllHistoryView.styled";

export const AllHistoryViewContainer = () => {
	const user = useSelector((store) => store.user.userID);
	const [allHistory, setAllHistory] = useState([]);
	const navigation = useNavigation();

	useEffect(() => {
		if (user) {
			getAllHistory();
		}
	}, []);

	const getAllHistory = () => {
		axios.get(`/getHistory/${user}`).then((response) => {
			setAllHistory(response.data);
		});
	};

	console.log("allhIs: ", allHistory);

	const onCreate = (drink) => {
		axios.post("/addToQueue", { userId: user, drinkId: drink.drinkID });
		navigation.navigate("Home");
	};

	const historyList = allHistory?.map((e) => (
		<HistoryElementBox>
			<HistoryElementTitle numberOfLines={1}>{e.name}</HistoryElementTitle>
			<Button
				text="Create"
				onPress={() => onCreate(e)}
				background={colorPallete.greenSea}
			/>
		</HistoryElementBox>
	));
	return (
		<ViewWrapper>
			<AllHistoryViewWrapper>{historyList}</AllHistoryViewWrapper>
		</ViewWrapper>
	);
};

export const AllHistoryView = withLayout(AllHistoryViewContainer);
