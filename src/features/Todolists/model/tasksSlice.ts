import { createSlice, nanoid } from "@reduxjs/toolkit"
import { createTodolistAC, deleteTodolistAC } from "@/features/Todolists/model/todolistsSlice.ts"

export type Tasks = Record<string, Task[]>

export type Task = {
  id: string
  title: string
  isDone: boolean
}

const initialState: Tasks = {
  "1": [
    { id: "1", title: "HTML", isDone: false },
    { id: "2", title: "CSS", isDone: true },
  ],
}

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: (create) => ({
    deleteTaskAC: create.reducer<{ todolistId: string; taskId: string }>((state, action) => {
      const index = state[action.payload.todolistId].findIndex((task) => task.id === action.payload.taskId)
      if (index !== -1) state[action.payload.todolistId].splice(index, 1)
    }),
    createTaskAC: create.preparedReducer(
      (payload: { todolistId: string; title: string }) => ({
        payload: { ...payload, taskId: nanoid() },
      }),
      (state, action) => {
        const newTask: Task = { id: action.payload.taskId, title: action.payload.title, isDone: false }
        state[action.payload.todolistId].push(newTask)
      },
    ),
    changeTaskStatusAC: create.reducer<{ todolistId: string; taskId: string; isDone: boolean }>((state, action) => {
      const task = state[action.payload.todolistId].find((task) => task.id === action.payload.taskId)
      if (task) task.isDone = action.payload.isDone
    }),
    changeTaskTitleAC: create.reducer<{ todolistId: string; taskId: string; title: string }>((state, action) => {
      const task = state[action.payload.todolistId].find((task) => task.id === action.payload.taskId)
      if (task) task.title = action.payload.title
    }),
  }),
  extraReducers: (builder) => {
    builder
      .addCase(createTodolistAC, (state, action) => {
        state[action.payload.id] = []
      })
      .addCase(deleteTodolistAC, (state, action) => {
        delete state[action.payload.todolistId]
      })
  },
  selectors: {
    selectTasks: (state) => state,
    selectTasksByTodolist: (state, todolistId: string) => state[todolistId] ?? [],
  },
})

export const TasksSlice = tasksSlice.reducer
export const { deleteTaskAC, createTaskAC, changeTaskStatusAC, changeTaskTitleAC } = tasksSlice.actions
export const { selectTasks, selectTasksByTodolist } = tasksSlice.selectors
