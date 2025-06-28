import { createSlice } from "@reduxjs/toolkit";

const initialState = { account: null };

const AccountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    setAccountDetails: (state, action) => {
      state.account = action.payload;
    },
    logoutAccount: (state) => {
      state.account = null;
    },
  },
});
export const { setAccountDetails, logoutAccount } = AccountSlice.actions;
export default AccountSlice.reducer;
