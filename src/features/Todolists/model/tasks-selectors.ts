import type { RootState } from "@/app/store.ts"
import type { Tasks } from "@/features/Todolists/model/tasks-reducer.ts"

export const selectTasks = (state: RootState): Tasks => state.tasks
