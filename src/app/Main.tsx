import { containerSx } from "@/common/styles/container.styles.ts"
import { Todolists } from "@/features/Todolists/ui/Todolists/Todolists.tsx"
import { AddItemForm } from "@/common/components/AddItemForm/AddItemForm.tsx"
import { useAppDispatch } from "@/common/hooks/useAppDispatch.ts"
import { createTodolistAC } from "@/features/Todolists/model/todolists-reducer.ts"

export const Main = () => {
  const dispatch = useAppDispatch()
  const createTodolist = (title: string) => {
    dispatch(createTodolistAC(title))
  }
  return (
    <div style={containerSx}>
      <AddItemForm onCreateItem={createTodolist} />
      <Todolists />
    </div>
  )
}
