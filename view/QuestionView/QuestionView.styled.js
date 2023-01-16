import styled from "styled-components/native";

export const QuestionViewWrapper = styled.View`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

export const QuestionBox = styled.View`
	width: 90%;
	height: 80%;
	border-radius: 30px;
	padding: 10px 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 10%;
`;

export const QuestionText = styled.Text`
	font-size: 20px;
`;

export const AnswerBox = styled.View`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	margin-top: 10%;
`;

export const AnswerField = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 5%;
`;

export const AnswerLabel = styled.Text``;

export const ButtonsField = styled.View`
	position: absolute;
	width: 100%;
	display: flex;
	bottom: 10px;
	flex-direction: row;
	justify-content: space-evenly;
`;
