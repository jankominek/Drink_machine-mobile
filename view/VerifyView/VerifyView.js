import { useState } from "react";
import { Text } from "react-native";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { withLayout } from "../../layout/pageLayout/PageLayout";
import {
	VerifyBox,
	VerifyBoxBorder,
	VerifyTitle,
	VerifyViewWrapper,
} from "./VerifyView.styled";

export const VerifyViewContainer = () => {
	const [code, setCode] = useState("");

	const onCodeChange = (value, name) => {
		console.log(value);
	};

	return (
		<VerifyViewWrapper>
			<VerifyBoxBorder>
				<VerifyBox>
					<VerifyTitle>Verify account</VerifyTitle>
					<Input
						onChange={onCodeChange}
						placeholder="Code"
						name="asd"
						margin={10}
					/>
					<Button text="Verify" margin={10} />
				</VerifyBox>
			</VerifyBoxBorder>
		</VerifyViewWrapper>
	);
};

export const VerifyView = withLayout(VerifyViewContainer);
