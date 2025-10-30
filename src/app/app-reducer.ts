import { createAction, createReducer } from "@reduxjs/toolkit"

export type AppState = {
  theme: "light" | "dark"
}

const initialState: AppState = {
  theme: (localStorage.getItem("theme") as "light" | "dark") || "light",
}

export const changeAppThemeAC = createAction<{ theme: "light" | "dark" }>("app/changeTheme")

export const AppReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeAppThemeAC, (state, action) => {
    state.theme = action.payload.theme
  })
})
