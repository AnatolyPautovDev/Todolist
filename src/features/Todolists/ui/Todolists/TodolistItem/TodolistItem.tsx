import s from "./TodolistItem.module.css"
import { FilterButtons } from "./FilterButtons/FilterButtons.tsx"
import { Tasks } from "@/features/Todolists/ui/Todolists/TodolistItem/Tasks/Tasks.tsx"
import { type Todolist } from "@/features/Todolists/model/todolistsSlice.ts"
import { TodolistTitle } from "@/features/Todolists/ui/Todolists/TodolistItem/TodolistTitle.tsx"
import { AddItemForm } from "@/common/components/AddItemForm/AddItemForm.tsx"
import { useAppDispatch } from "@/common/hooks/useAppDispatch.ts"
import { createTaskAC } from "@/features/Todolists/model/tasksSlice.ts"

type Props = {
  todolist: Todolist
}

export const TodolistItem = ({ todolist }: Props) => {
  const dispatch = useAppDispatch()
  const createTask = (title: string) => {
    dispatch(createTaskAC({ todolistId: todolist.id, title }))
  }

  return (
    <div className={s.todolist}>
      <TodolistTitle todolist={todolist} />
      <AddItemForm onCreateItem={createTask} />
      <Tasks todolist={todolist} />
      <FilterButtons todolistId={todolist.id} />
    </div>
  )
}
