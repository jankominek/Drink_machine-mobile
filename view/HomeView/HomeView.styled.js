import styled from "styled-components/native";
import { colorPallete } from "../../utils/colorPallete";

export const HomeViewContentContainer = styled.View`
	flex: 1;
	background: ${colorPallete.backgroundGray};
	align-items: center;
`;

export const BannerWrapper = styled.View`
	width: 95%;
	height: 130px;
    background: ${colorPallete.background}
	border-radius: 10px;
	margin: 20px 0px;
`;

export const Flex = styled.View`
	width: 100%;
	display: flex;
	flex-direction: row;
	margin-bottom: 10px;
`;
export const BannerContent = styled.View`
	display: flex;
	flex-direction: column;
	height: 100%;
	wifth: 100%;
`;

export const BannerText = styled.Text`
	${({ fontSize }) => `font-size: ${fontSize}px;`}
	font-weight: bold;
	color: ${colorPallete.textColorBackground};
	margin: 1px 20px;
`;

export const BannerLogo = styled.Image`
	position: absolute;
	bottom: 10%;
	right: 10%;
	width: 115px;
	height: 100px;
	// aspectratio: 1;
	resizemode: contain;
`;
