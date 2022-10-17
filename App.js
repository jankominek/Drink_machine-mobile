import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ButtonComponent } from "./components/Button/Button";
import { PageLayout } from "./layout/pageLayout/PageLayout";
import { colorPallete } from "./utils/colorPallete";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SigningView } from "./view/SigningView/SigningView";
import { HomeView } from "./view/HomeView/HomeView";
import { VerifyView } from "./view/VerifyView/VerifyView";

const Stack = createNativeStackNavigator();

const navigationOptions = {
	initialRouteName: "Sign",
	screenOptions: {
		...{
			headerShown: false,
		},
	},
};

export default function App() {
	return (
		<>
			<StatusBar backgroundColor={colorPallete.darkBlue} style="light" />
			{/* <NavigationContainer>
				<Stack.Navigator {...navigationOptions}>
					<Stack.Screen name="Sign" component={SigningView} />
					<Stack.Screen name="Home" component={HomeView} />
				</Stack.Navigator>
			</NavigationContainer> */}
			<HomeView />
			{/* <VerifyView /> */}
		</>
	);
}
