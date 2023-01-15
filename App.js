import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SigningView } from "./view/SigningView/SigningView";
import { HomeView } from "./view/HomeView/HomeView";
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
import { NotificationBottomProvider } from "./NotificationBottomProvider";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QuestionView } from "./view/QuestionView/QuestionView";

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
		<GestureHandlerRootView style={{ flex: 1 }}>
			<NotifierWrapper>
				<Provider store={store}>
					<NavigationContainer>
						<NotificationBottomProvider>
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
								<Stack.Screen name="QuestionView" component={QuestionView} />
							</Stack.Navigator>
						</NotificationBottomProvider>
					</NavigationContainer>
				</Provider>
			</NotifierWrapper>
		</GestureHandlerRootView>
	);
}
