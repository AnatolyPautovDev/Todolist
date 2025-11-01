import { useAppSelector } from "@/common/hooks/useAppSelector.ts"
import { selectTodolists } from "@/features/Todolists/model/todolists-selectors.ts"
import { TodolistItem } from "@/features/Todolists/ui/Todolists/TodolistItem/TodolistItem.tsx"
import { useState } from "react"
import { SearchTodolist } from "@/features/Todolists/ui/Todolists/SearchTodolist/SearchTodolist.tsx"

export const Todolists = () => {
  const todolists = useAppSelector(selectTodolists)
  const [value, setValue] = useState("")
  const filteredTodolist = todolists.filter((tl) => tl.title.toLowerCase().startsWith(value.toLowerCase()))
  return (
    <>
      <SearchTodolist value={value} setValue={setValue} />
      <div>
        {filteredTodolist.length === 0 ? (
          <span>Not Found</span>
        ) : (
          filteredTodolist.map((todolist) => <TodolistItem todolist={todolist} key={todolist.id} />)
        )}
      </div>
    </>
  )
}
