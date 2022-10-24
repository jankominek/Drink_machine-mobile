import { Text } from "react-native";
import { Input } from "../../components/Input/Input";
import { withLayout } from "../../layout/pageLayout/PageLayout";
import { CreateDrinkFlex, CreateDrinkMlText, CreateDrinkViewWrapper, Flex, PickerWrapper } from "./CreateDrinkView.styled";
// import DropDownPicker from "react-native-dropdown-picker";
import {Picker} from '@react-native-picker/picker';
import { colorPallete } from "../../utils/colorPallete";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../../components/Button/Button";

export const CreateDrinkViewContainer = (props) => {

	const [alcoholList, setAlcoholList] = useState([]);
	const [drinkConfig, setDrinkConfig] = useState([]);
	const [selected, setSelected] = useState();

	useEffect( () => {
		axios.get('http://192.168.1.11:8080/getAllAlcohols')
			.then( (response) => {
				setAlcoholList(response.data);
			})
	}, [])


	const drinkMap = drinkConfig.map( (drink, index) => (
		<CreateDrinkFlex id={index}>
				<PickerWrapper>
				<Picker
					style={{paddingVertical: 8,
						backgroundColor: '#fff',
						borderWidth: 1,
						borderRadius: 20}}
					selectedValue={drink.name}
					onValueChange={(value, index, name) => {
						console.log(value, index)
						setSelected(value);
					}}>
						{alcoholList.map( (alcohol) => (
						<Picker.Item label={alcohol.name} value={alcohol.alcoholID} />
						))}
					<Picker.Item label="Java" value="java" />
					<Picker.Item label="JavaScript" value="js" />
				</Picker>
				</PickerWrapper>
				<Flex>
					<Input placeholder="" height="100%" width={30}/>
					<CreateDrinkMlText>x50 ml</CreateDrinkMlText>
				</Flex>
				
			</CreateDrinkFlex>
	))

	const onAddPosition = () => {
		setDrinkConfig([...drinkConfig, {
			name: "",
			alcoholID: "",
			amount: 0
		}])
	}
	return (
		<CreateDrinkViewWrapper>
			{drinkMap}
			<Button text="Add" outline onPress={onAddPosition}/>
		</CreateDrinkViewWrapper>
	);
};

export const CreateDrinkView = withLayout(CreateDrinkViewContainer);
