import { createSlice } from "@reduxjs/toolkit";

export const userState = createSlice({
	name: "userState",
	initialState: {
		email: "",
	},
	reducers: {
		initUser: (state, action) => {
			state.email = action.payload.email;
		},
	},
});

export const { initUser } = userState.actions;

export default userState.reducer;
