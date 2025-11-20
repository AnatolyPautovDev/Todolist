import { createSlice, nanoid } from "@reduxjs/toolkit"

export type Todolist = {
  id: string
  title: string
  filter: FilterValues
}

export type FilterValues = "all" | "active" | "completed"

const initialState: Todolist[] = [{ title: "First", id: "1", filter: "all" }]

const todolistsSlice = createSlice({
  name: "todolists",
  initialState,
  reducers: (create) => ({
    changeTodolistFilterAC: create.reducer<{ todolistId: string; filter: FilterValues }>((state, action) => {
      const todo = state.find((tl) => tl.id === action.payload.todolistId)
      if (todo) todo.filter = action.payload.filter
    }),
    changeTodolistTitleAC: create.reducer<{ todolistId: string; title: string }>((state, action) => {
      const todo = state.find((tl) => tl.id === action.payload.todolistId)
      if (todo) todo.title = action.payload.title
    }),
    createTodolistAC: create.preparedReducer(
      (title: string) => ({ payload: { title, id: nanoid() } }),
      (state, action) => {
        const newTodolist = { id: action.payload.id, title: action.payload.title, filter: "all" as FilterValues }
        state.unshift(newTodolist)
      },
    ),
    deleteTodolistAC: create.reducer<{ todolistId: string }>((state, action) => {
      const index = state.findIndex((tl) => tl.id === action.payload.todolistId)
      if (index !== -1) {
        state.splice(index)
      }
    }),
  }),
})

export const TodolistReducer = todolistsSlice.reducer
export const { changeTodolistFilterAC, changeTodolistTitleAC, createTodolistAC, deleteTodolistAC } =
  todolistsSlice.actions
