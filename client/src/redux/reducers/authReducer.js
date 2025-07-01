import { createSlice } from "@reduxjs/toolkit";
import { localDataNames } from "../../constants/appInfos";

const initialState = {
  token: "",
  id: "",
  hoTen: "",
  email: "",
  role: "",
  tenQuyen: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: initialState,
  },
  reducers: {
    addAuth: (state, action) => {
      state.data = {
        token: action.payload?.ACCESS_TOKEN,
        id: action.payload?.USER?.id,
        hoTen: action.payload?.USER?.hoTen,
        email: action.payload?.USER?.email,
        role: action.payload?.USER?.role,
        tenQuyen: action.payload?.USER?.tenQuyen,
      };
      syncLocal(action.payload);
    },
    removeAuth: (state, action) => {
      (state.data = initialState), syncLocal({});
    },
  },
});

export const authReducer = authSlice.reducer;
export const { addAuth, removeAuth } = authSlice.actions;

export const authSelector = (state) => state.authReducer.data;

const syncLocal = (data) => {
  localStorage.setItem(localDataNames.authData, JSON.stringify(data));
};
