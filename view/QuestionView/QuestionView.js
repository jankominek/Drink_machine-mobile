import axios from "axios";
import { useEffect, useState } from "react";
import { withLayout } from "../../layout/pageLayout/PageLayout";
import { ViewWrapper } from "../../layout/pageLayout/PageLayout.styled";
import {
	AnswerBox,
	AnswerField,
	AnswerLabel,
	ButtonsField,
	QuestionBox,
	QuestionText,
	QuestionViewWrapper,
} from "./QuestionView.styled";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../../components/Button/Button";
import { RadioButton } from "../../components/RadioButton/RadioButton";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export const QuestionViewContainer = () => {
	const [questions, setQuestions] = useState([]);
	const [selectedQuestionNumber, setSelectedQuestionNumber] = useState(0);
	const [questionResult, setQuestionResult] = useState();
	const [quiz, setQuiz] = useState([]);
	const navigation = useNavigation();
	const user = useSelector((state) => state.user.userID);

	console.log("user: ", user);

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

	const numbers = [1, 2, 3, 4, 5];

	const onSelectRadio = (id, num) => {
		const exists = quiz?.filter((e) => e.questionId === id);
		if (exists.length) {
			const newQuiz = quiz.map((e) => {
				if (e.questionId === id) {
					e.value = num;
					return e;
				}

				return e;
			});
			setQuiz([...newQuiz]);
		} else {
			setQuiz([...quiz, { questionId: id, value: num }]);
		}
	};

	console.log("quiz: ", quiz);
	const onNextButton = () => {
		setSelectedQuestionNumber(selectedQuestionNumber + 1);
	};

	const yesNoTable = [0, 1];

	const onFinish = () => {
		axios.post("/expertSystem/answerQuestions", {
			userId: user,
			answers: quiz,
		});
		navigation.navigate("Home");
	};
	const questionList = questions?.map((element) => (
		<QuestionBox style={[additionalStyles.shadow]}>
			<QuestionText>{element.questionContent}</QuestionText>
			<AnswerBox>
				{element.firstQuestion
					? yesNoTable.map((num) => (
							<AnswerField>
								<AnswerLabel>{num == 0 ? "No" : "Yes"}</AnswerLabel>
								<RadioButton
									isSelected={
										quiz?.filter(
											(e) => e.questionId == element.id && e.value == num,
										).length
											? true
											: false
									}
									onSelectItem={() => onSelectRadio(element.id, num)}
								/>
							</AnswerField>
					  ))
					: numbers.map((num) => (
							<AnswerField>
								<AnswerLabel>{num}</AnswerLabel>
								<RadioButton
									isSelected={
										quiz?.filter(
											(e) => e.questionId == element.id && e.value == num,
										).length
											? true
											: false
									}
									onSelectItem={() => onSelectRadio(element.id, num)}
								/>
							</AnswerField>
					  ))}
			</AnswerBox>
			<ButtonsField>
				{selectedQuestionNumber > 0 && (
					<Button
						text="Back"
						onPress={() =>
							setSelectedQuestionNumber(selectedQuestionNumber - 1)
						}
					/>
				)}
				{selectedQuestionNumber !== questions.length - 1 ? (
					<>
						{quiz.length === selectedQuestionNumber + 1 && (
							<Button text="Next" onPress={onNextButton} />
						)}
					</>
				) : (
					<Button text="Finish" onPress={onFinish} />
				)}
			</ButtonsField>
		</QuestionBox>
	));

	return (
		<ViewWrapper>
			{selectedQuestionNumber < questionList.length && (
				<QuestionViewWrapper>
					{questionList[selectedQuestionNumber]}
				</QuestionViewWrapper>
			)}
		</ViewWrapper>
	);
};

export const QuestionView = withLayout(QuestionViewContainer);
