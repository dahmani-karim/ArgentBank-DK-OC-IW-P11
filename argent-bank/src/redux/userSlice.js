import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userProfil: null,
  userToken: null
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userToken = action.payload
    },
    profil: (state, action) => {
      state.userProfil = action.payload
    },
    logout: (state) => {
      state.userToken = null
    },
  },
})

export const { login, logout, profil } = userSlice.actions

export default userSlice.reducer