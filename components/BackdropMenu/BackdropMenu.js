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
export const BackdropMenu = ({ children }) => {
	const [revealed, setRevealed] = useState(false);
	return (
		<Backdrop
			revealed={revealed}
			header={
				<AppBar
					title="Hello, User"
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
				<View style={{ height: 200, backgroundColor: "transparent" }} />
			}
		>
			{children}
		</Backdrop>
	);
};
