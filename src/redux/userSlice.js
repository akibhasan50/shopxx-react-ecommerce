import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentuser:null,
  isFatching:false,
  error:false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state)=>{
        state.isFatching = true;
    },
    loginSuccess: (state,action)=>{
        state.isFatching = false;
        state.currentuser= action.payload
    },
    loginFailed: (state)=>{
        state.isFatching = false;
        state.error = true;
    },
 
   
  },
})

// Action creators are generated for each case reducer function
export const {loginStart,loginSuccess,loginFailed } = userSlice.actions

export default userSlice.reducer