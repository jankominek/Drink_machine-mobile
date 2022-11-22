import { createSlice } from "@reduxjs/toolkit";

export const userState = createSlice({
	name: "userState",
	initialState: {
		userID: "",
		name: "",
		email: "",
		lastDrinks: [],
		favouriteDrinks: [],
		drinkQueue: [],
	},
	reducers: {
		initUser: (state, action) => {
			state.email = action.payload.email;
			state.userID = action.payload.userID;
			state.name = action.payload.name;
			state.lastDrinks = action.payload.lastDrinks;
			state.favouriteDrinks = action.payload.favouriteDrinks;
		},
		addDrinkToQueue: (state, action) => {
			state.drinkQueue.push(action.payload.drink);
		},
		removeDrinkFromQueue: (state, action) => {
			const filteredArray = state.drinkQueue.filter(
				(element) => element.name !== action.payload.drink.name,
			);
			state.drinkQueue = filteredArray;
		},
	},
});

export const { initUser, addDrinkToQueue, removeDrinkFromQueue } =
	userState.actions;

export default userState.reducer;
