import { createSlice } from "@reduxjs/toolkit";

//el estadio inicial son los datos vacios
const initialState = {
    email:"",
    fullName:"",
    token:"",
}

export const userSlice = createSlice({
  name: "user",
  initialState: initialState, //se setea el estado inicial
  reducers: {
    //al hacer login
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.fullName = action.payload.fullName;
      state.token = action.payload.token;
    },
    //al hacer logout
    unsetUser: (state, action) => {
      state.email = "";
      state.fullName = "";
      state.token = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;
