import axios from "axios";
import { useEffect, useState } from "react";
import { withLayout } from "../../layout/pageLayout/PageLayout";
import { ViewWrapper } from "../../layout/pageLayout/PageLayout.styled";
import {
	QuestionBox,
	QuestionText,
	QuestionViewWrapper,
} from "./QuestionView.styled";
import { StyleSheet, Text, View } from "react-native";

export const QuestionViewContainer = () => {
	const [questions, setQuestions] = useState([]);
	const [selectedQuestionNumber, setSelectedQuestionNumber] = useState(0);

	useEffect(() => {
		getAllQuestions();
	}, []);

	const getAllQuestions = () => {
		axios.get("/expertSystem/getQuestions").then((response) => {
			setQuestions(response.data);
			console.log("qq: ", response.data);
		});
	};

	const additionalStyles = StyleSheet.create({
		shadow: {
			shadowColor: "#000",
			shadowOffset: {
				width: 0,
				height: 1,
			},
			shadowOpacity: 0.2,
			shadowRadius: 1.41,

			elevation: 2,
			backgroundColor: "white",
		},
	});

	const usedQuestion = (
		<QuestionBox style={[additionalStyles.shadow]}>
			{questions && selectedQuestionNumber && (
				<QuestionText>
					<Text>{questions[selectedQuestionNumber].questionContent}</Text>
				</QuestionText>
			)}
		</QuestionBox>
	);

	return (
		<ViewWrapper>
			<QuestionViewWrapper>{usedQuestion}</QuestionViewWrapper>
		</ViewWrapper>
	);
};

export const QuestionView = withLayout(QuestionViewContainer);
