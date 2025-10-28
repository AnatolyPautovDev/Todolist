import { createAction, createReducer, nanoid } from "@reduxjs/toolkit"
import { createTodolistAC, deleteTodolistAC } from "@/features/Todolists/model/todolists-reducer.ts"

export type Tasks = Record<string, Task[]>

export type Task = {
  id: string
  title: string
  isDone: boolean
}

export const deleteTaskAC = createAction<{ todolistId: string; taskId: string }>("tasks/deleteTask")
export const createTaskAC = createAction<{ todolistId: string; title: string }>("tasks/createTask")
export const changeTaskStatusAC = createAction<{ todolistId: string; taskId: string; isDone: boolean }>(
  "tasks/changeTaskStatus",
)
export const changeTaskTitleAC = createAction<{ todolistId: string; taskId: string; title: string }>(
  "tasks/changeTaskTitle",
)

const initialState: Tasks = {
  "1": [
    { id: "1", title: "HTML", isDone: false },
    { id: "2", title: "CSS", isDone: true },
  ],
}

export const TasksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(deleteTaskAC, (state, action) => {
      const index = state[action.payload.todolistId].findIndex((task) => task.id === action.payload.taskId)
      if (index !== -1) state[action.payload.todolistId].splice(index, 1)
    })
    .addCase(createTaskAC, (state, action) => {
      const newTask: Task = { id: nanoid(), title: action.payload.title, isDone: false }
      state[action.payload.todolistId].push(newTask)
    })
    .addCase(changeTaskStatusAC, (state, action) => {
      const task = state[action.payload.todolistId].find((task) => task.id === action.payload.taskId)
      if (task) task.isDone = action.payload.isDone
    })
    .addCase(changeTaskTitleAC, (state, action) => {
      const task = state[action.payload.todolistId].find((task) => task.id === action.payload.taskId)
      if (task) task.title = action.payload.title
    })
    .addCase(createTodolistAC, (state, action) => {
      state[action.payload.id] = []
    })
    .addCase(deleteTodolistAC, (state, action) => {
      delete state[action.payload.todolistId]
    })
})
