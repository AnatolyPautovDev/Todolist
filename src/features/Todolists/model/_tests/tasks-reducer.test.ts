import {
  changeTaskStatusAC,
  changeTaskTitleAC,
  createTaskAC,
  deleteTaskAC,
  type Tasks,
  TasksSlice,
} from "@/features/Todolists/model/tasksSlice.ts"
import { beforeEach, expect, test } from "vitest"

let startState: Tasks = {}

beforeEach(() => {
  startState = {
    todolistID: [
      { id: "1", title: "HTML", isDone: true },
      { id: "2", title: "CSS", isDone: false },
      { id: "3", title: "JS", isDone: false },
    ],
    todolistID2: [
      { id: "1", title: "CS", isDone: true },
      { id: "2", title: "Dota", isDone: false },
      { id: "3", title: "PUBG", isDone: false },
    ],
  }
})

test("correct task should be deleted", () => {
  const endState = TasksSlice(startState, deleteTaskAC({ todolistId: "todolistID", taskId: "2" }))
  expect(endState).toEqual({
    todolistID: [
      { id: "1", title: "HTML", isDone: true },
      { id: "3", title: "JS", isDone: false },
    ],
    todolistID2: [
      { id: "1", title: "CS", isDone: true },
      { id: "2", title: "Dota", isDone: false },
      { id: "3", title: "PUBG", isDone: false },
    ],
  })
})

test("correct task should be created", () => {
  const endState = TasksSlice(startState, createTaskAC({ todolistId: "todolistID2", title: "Cult" }))
  expect(endState.todolistID.length).toBe(3)
  expect(endState.todolistID2.length).toBe(4)
  expect(endState.todolistID2[3].id).toBeDefined()
  expect(endState.todolistID2[3].title).toBe("Cult")
  expect(endState.todolistID2[3].isDone).toBe(false)
})

test("correct task should change her status", () => {
  const endState = TasksSlice(startState, changeTaskStatusAC({ todolistId: "todolistID", taskId: "1", isDone: false }))
  expect(endState.todolistID[0].isDone).toBe(false)
  expect(endState.todolistID2[0].isDone).toBe(true)
})

test("correct task should change her title", () => {
  const endState = TasksSlice(
    startState,
    changeTaskTitleAC({ todolistId: "todolistID", taskId: "1", title: "New Title" }),
  )
  expect(endState.todolistID[0].title).toBe("New Title")
  expect(endState.todolistID2[0].title).toBe("CS")
})
