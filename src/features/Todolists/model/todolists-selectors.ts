import type { RootState } from "@/app/store.ts"
import type { Todolist } from "@/features/Todolists/model/todolistsSlice.ts"

export const selectTodolists = (state: RootState): Todolist[] => state.todolists
