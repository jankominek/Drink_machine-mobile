import { Dimensions } from "react-native";
import styled from "styled-components";
import { colorPallete } from "../../utils/colorPallete";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const CreateDrinkViewWrapper = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const CreateDrinkFlex = styled.View`
    display: flex;
    margin: 10px 0px;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
    border-radius: 10px;
`

export const Flex = styled.View`
    width: ${windowWidth*0.3}
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const CreateDrinkMlText = styled.Text`
    font-size: 15px;
    margin-left: 0px;
    color: ${colorPallete.white};
`

export const PickerWrapper = styled.View`
    overflow: hidden;
    border-radius: 5px;
    width: ${windowWidth*0.5}px;
`