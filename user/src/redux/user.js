import { createSlice } from "@reduxjs/toolkit";
import { generalRequest } from "../requestAxios";

const user = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logOut: (state) => {
      state.currentUser = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logOut } = user.actions;
export default user.reducer;


export const login = async(dispatch, user) =>{
    dispatch(loginStart());
    try{
        const res = await generalRequest.post('/auth/login', user)
        dispatch(loginSuccess(res.data))
    } catch(e){
        dispatch(loginFailure())
    }
}

export const logout = async(dispatch, user) => {
  try{
    dispatch(logOut());
  } catch(e){
    console.log(e)
  }
}

