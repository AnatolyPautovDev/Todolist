import { useAppSelector } from "@/common/hooks/useAppSelector.ts"
import type { Todolist } from "@/features/Todolists/model/todolistsSlice.ts"
import { TaskItem } from "@/features/Todolists/ui/Todolists/TodolistItem/Tasks/TaskItem/TaskItem.tsx"
import { selectTasksByTodolist } from "@/features/Todolists/model/tasksSlice.ts"

type Props = {
  todolist: Todolist
}

export const Tasks = ({ todolist }: Props) => {
  const { id, filter } = todolist
  let tasks = useAppSelector((s) => selectTasksByTodolist(s, id))
  if (filter === "active") {
    tasks = tasks.filter((t) => !t.isDone)
  }
  if (filter === "completed") {
    tasks = tasks.filter((t) => t.isDone)
  }
  return (
    <>
      {tasks.length ? (
        <ul>
          {tasks.map((task) => (
            <TaskItem task={task} key={task.id} todolistId={id} />
          ))}
        </ul>
      ) : (
        <span>Тасок нет</span>
      )}
    </>
  )
}
