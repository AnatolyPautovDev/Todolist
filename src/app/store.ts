import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { TodolistReducer } from "@/features/Todolists/model/todolists-reducer.ts"
import { TasksReducer } from "@/features/Todolists/model/tasks-reducer.ts"

// объединение reducer'ов с помощью combineReducers
const rootReducer = combineReducers({
  todolists: TodolistReducer,
  tasks: TasksReducer,
})

// создание store
export const store = configureStore({
  reducer: rootReducer,
})

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch

// для возможности обращения к store в консоли браузера
// @ts-ignore
window.store = store
