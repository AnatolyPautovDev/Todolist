import { createAction, createReducer, nanoid } from "@reduxjs/toolkit"

export type Todolist = {
  id: string
  title: string
  filter: FilterValues
}

export type FilterValues = "all" | "active" | "completed"

export const deleteTodolistAC = createAction<{ todolistId: string }>("todolists/deleteTodolistAC")
export const createTodolistAC = createAction("todolists/createTodolistAC", (title: string) => {
  return { payload: { title, id: nanoid() } }
})
export const changeTodolistTitleAC = createAction<{ todolistId: string; title: string }>(
  "todolists/changeTodolistTitle",
)
export const changeTodolistFilterAC = createAction<{ todolistId: string; filter: FilterValues }>(
  "todolists/changeTodolistFilter",
)

const initialState: Todolist[] = [{ title: "First", id: "1", filter: "all" }]

export const TodolistReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeTodolistFilterAC, (state, action) => {
      const todo = state.find((tl) => tl.id === action.payload.todolistId)
      if (todo) todo.filter = action.payload.filter
    })
    .addCase(changeTodolistTitleAC, (state, action) => {
      const todo = state.find((tl) => tl.id === action.payload.todolistId)
      if (todo) todo.title = action.payload.title
    })
    .addCase(createTodolistAC, (state, action) => {
      const newTodolist = { id: action.payload.id, title: action.payload.title, filter: "all" as FilterValues }
      state.unshift(newTodolist)
    })
    .addCase(deleteTodolistAC, (state, action) => {
      const index = state.findIndex((tl) => tl.id === action.payload.todolistId)
      if (index !== -1) {
        state.splice(index)
      }
    })
})
