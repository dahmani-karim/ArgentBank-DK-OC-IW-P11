import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userProfil: null,
  userToken: null
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Store user token
    getUserToken: (state, action) => {
      state.userToken = action.payload
    },
    // Store user information
    getUserInfo: (state, action) => {
      state.userProfil = action.payload
    },
    // Clean the store
    cleanStore: (state, action) => {
      state.userToken = action.payload,
      state.userProfil.email = action.payload
      state.userProfil.firstName = action.payload
      state.userProfil.lastName = action.payload
      state.userProfil.userName = action.payload
    },
  },
})

export const { getUserToken, getUserInfo, cleanStore } = userSlice.actions

export default userSlice.reducer