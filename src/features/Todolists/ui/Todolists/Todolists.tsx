import { useAppSelector } from "@/common/hooks/useAppSelector.ts"
import { selectTodolists } from "@/features/Todolists/model/todolists-selectors.ts"
import { TodolistItem } from "@/features/Todolists/ui/Todolists/TodolistItem/TodolistItem.tsx"

export const Todolists = () => {
  const todolists = useAppSelector(selectTodolists)
  return (
    <>
      {todolists.map((todolist) => (
        <TodolistItem todolist={todolist} key={todolist.id} />
      ))}
    </>
  )
}
