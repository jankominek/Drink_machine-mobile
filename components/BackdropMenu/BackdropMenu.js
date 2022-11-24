import React, { useState } from "react";
import { View, Text } from "react-native";
import {
	Backdrop,
	BackdropSubheader,
	AppBar,
	IconButton,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { colorPallete } from "../../utils/colorPallete";
import { useSelector } from "react-redux";
import { MenuBox, MenuItem, MenuItemBox } from "./BackdropMenu.styled";
import { Entypo, Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const BackdropMenu = ({ children }) => {
	const [revealed, setRevealed] = useState(false);

	const selector = useSelector((state) => state.user);
	const navigation = useNavigation();


	const onPressProfile = () => {
		navigation.navigate("UserProfile");
	}
	return (
		<Backdrop
			revealed={revealed}
			header={
				<AppBar
					title={"Hello, " + selector.name}
					transparent
					leading={(props) => (
						<>
							<IconButton
								icon={(props) => (
									<Icon name={revealed ? "close" : "menu"} {...props} />
								)}
								onPress={() => setRevealed((prevState) => !prevState)}
								{...props}
							/>
						</>
					)}
					style={{ borderBottomColor: "green" }}
				/>
			}
			style={{ backgroundColor: colorPallete.darkBlue }}
			backLayer={
				<MenuBox>
					<MenuItemBox onPress={onPressProfile}>
						<AntDesign name="user" size={15} color="black" />
						<MenuItem>Profile</MenuItem>
					</MenuItemBox>
				</MenuBox>
			}
		>
			{children}
		</Backdrop>
	);
};
