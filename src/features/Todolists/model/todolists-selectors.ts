import type { RootState } from "@/app/store.ts"
import type { Todolist } from "@/features/Todolists/model/todolists-reducer.ts"

export const selectTodolists = (state: RootState): Todolist[] => state.todolists
