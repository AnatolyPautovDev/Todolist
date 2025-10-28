import { changeTodolistTitleAC, deleteTodolistAC, type Todolist } from "@/features/Todolists/model/todolists-reducer.ts"
import { EditableSpan } from "@/common/components/EditableSpan/EditableSpan.tsx"
import { useAppDispatch } from "@/common/hooks/useAppDispatch.ts"

type Props = {
  todolist: Todolist
}

export const TodolistTitle = ({ todolist }: Props) => {
  const dispatch = useAppDispatch()
  const changeTodolistTitle = (title: string) => {
    dispatch(changeTodolistTitleAC({ todolistId: todolist.id, title }))
  }
  const deleteTodolist = () => {
    dispatch(deleteTodolistAC({ todolistId: todolist.id }))
  }
  return (
    <>
      <h3 style={{ display: "inline" }}>
        <EditableSpan title={todolist.title} onChange={changeTodolistTitle} />
        <button style={{ display: "inline" }} type="button" onClick={deleteTodolist}>
          х
        </button>
      </h3>
    </>
  )
}
