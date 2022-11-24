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
import { CreateDrinkView } from "./view/CreateDrinkView/CreateDrinkView";
import { Provider } from "react-redux";
import store from "./store/store";
import { AdminView } from "./view/AdminView/AdminView";
import { MachineView } from "./view/AdminView/MachineView/MachineView";
import { UsersView } from "./view/AdminView/UsersView/UsersView";
import { FavoriteView } from "./view/FavoriteView/FavoriteView";
import { useEffect } from "react";
import { initAxiosConfig } from "./utils/axiosConfig";
import { NotifierWrapper } from "react-native-notifier";
import { DrinkOrderView } from "./view/DrinkOrderView/DrinkOrderView";
import { UserProfileView } from "./view/UserProfileView/UserProfileView";

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
	useEffect(() => {
		initAxiosConfig();
	}, []);
	return (
		<NotifierWrapper>
			<Provider store={store}>
				<NavigationContainer>
					<Stack.Navigator {...navigationOptions}>
						<Stack.Screen name="Sign" component={SigningView} />
						<Stack.Screen name="Home" component={HomeView} />
						<Stack.Screen name="CreateDrink" component={CreateDrinkView} />
						<Stack.Screen name="Admin" component={AdminView} />
						<Stack.Screen name="Machine" component={MachineView} />
						<Stack.Screen name="Users" component={UsersView} />
						<Stack.Screen name="Favorites" component={FavoriteView} />
						<Stack.Screen name="DrinkOrder" component={DrinkOrderView} />
						<Stack.Screen name="UserProfile" component={UserProfileView} />
					</Stack.Navigator>
				</NavigationContainer>
			</Provider>
		</NotifierWrapper>
	);
}
