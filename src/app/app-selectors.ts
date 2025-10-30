import type { RootState } from "@/app/store.ts"

export const selectTheme = (state: RootState): "light" | "dark" => state.app.theme