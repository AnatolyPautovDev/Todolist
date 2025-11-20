import {
  changeTaskStatusAC,
  changeTaskTitleAC,
  deleteTaskAC,
  type Task,
} from "@/features/Todolists/model/tasksSlice.ts"
import { useAppDispatch } from "@/common/hooks/useAppDispatch.ts"
import type { ChangeEvent } from "react"
import { EditableSpan } from "@/common/components/EditableSpan/EditableSpan.tsx"

type Props = {
  task: Task
  todolistId: string
}

export const TaskItem = ({ task, todolistId }: Props) => {
  const { id, title, isDone } = task
  const dispatch = useAppDispatch()
  const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeTaskStatusAC({ todolistId, taskId: id, isDone: e.currentTarget.checked }))
  }
  const deleteTask = () => {
    dispatch(deleteTaskAC({ todolistId, taskId: id }))
  }
  const changeTaskTitle = (title: string) => {
    dispatch(changeTaskTitleAC({ todolistId, taskId: id, title }))
  }
  return (
    <li>
      <input type={"checkbox"} checked={isDone} onChange={changeTaskStatus} />
      <EditableSpan title={title} onChange={changeTaskTitle} />
      <button type="button" onClick={deleteTask}>
        x
      </button>
    </li>
  )
}
