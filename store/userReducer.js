import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
export const userState = createSlice({
	name: "userState",
	initialState: {
		userID: "",
		name: "",
		email: "",
		lastDrinks: [],
		favouriteDrinks: [],
		drinkQueue: [],
		showBottomSheet: true,
	},
	reducers: {
		initUser: (state, action) => {
			state.email = action.payload.email;
			state.userID = action.payload.userID;
			state.name = action.payload.name;
			state.lastDrinks = action.payload.lastDrinks;
			state.favouriteDrinks = action.payload.favouriteDrinks;
		},
		addDrinkToFavorite: (state, action) => {
			state.favouriteDrinks = [...state.favouriteDrinks, action.payload];
		},
		removeDrinkFromFavorite: (state, action) => {
			const filtered = state.favouriteDrinks.filter(
				(e) => e.name !== action.payload.name,
			);
			state.favouriteDrinks = [filtered];
		},
		addDrinkToQueue: (state, action) => {
			state.drinkQueue.push(action.payload.drink);
		},
		updateDrinkQueue: (state, action) => {
			if (!_.isEqual(state.drinkQueue, action.payload)) {
				state.drinkQueue = action.payload;
			}
		},
		removeDrinkFromQueue: (state, action) => {
			// const filteredArray = state.drinkQueue.filter(
			// 	(element) => element.name !== action.payload.drink.name,
			// );
			// state.drinkQueue = filteredArray;
		},
		clearDb: (state) => {
			state.email = "";
			state.userID = "";
			state.name = "";
			state.lastDrinks = [];
			state.favouriteDrinks = [];
			state.drinkQueue = [];
		},
		changeUserName: (state, action) => {
			state.name = action.payload;
		},
		toggleBottomSheet: (state, action) => {
			state.showBottomSheet = action.payload;
		},
	},
});

export const {
	initUser,
	addDrinkToQueue,
	removeDrinkFromQueue,
	addDrinkToFavorite,
	removeDrinkFromFavorite,
	clearDb,
	updateDrinkQueue,
	toggleBottomSheet,
	changeUserName,
} = userState.actions;

export default userState.reducer;
