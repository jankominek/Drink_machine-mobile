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

export const BackdropMenu = ({ children }) => {
	const [revealed, setRevealed] = useState(false);

	const selector = useSelector((state) => state.user);

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
					<MenuItemBox>
						<Feather name="settings" size={15} color="black" />
						<MenuItem>Settings</MenuItem>
					</MenuItemBox>
					<MenuItemBox>
						<Entypo name="drink" size={15} color="black" />
						<MenuItem>Drinks</MenuItem>
					</MenuItemBox>
				</MenuBox>
			}
		>
			{children}
		</Backdrop>
	);
};
