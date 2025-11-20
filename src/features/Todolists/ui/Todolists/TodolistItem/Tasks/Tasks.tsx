import { useAppSelector } from "@/common/hooks/useAppSelector.ts"
import { selectTasks } from "@/features/Todolists/model/tasks-selectors.ts"
import type { Todolist } from "@/features/Todolists/model/todolistsSlice.ts"
import { TaskItem } from "@/features/Todolists/ui/Todolists/TodolistItem/Tasks/TaskItem/TaskItem.tsx"

type Props = {
  todolist: Todolist
}

export const Tasks = ({ todolist }: Props) => {
  const { id, filter } = todolist
  const tasks = useAppSelector(selectTasks)
  let tasksForTodolist = tasks[id]
  if (filter === "active") {
    tasksForTodolist = tasksForTodolist.filter((t) => !t.isDone)
  }
  if (filter === "completed") {
    tasksForTodolist = tasksForTodolist.filter((t) => t.isDone)
  }
  return (
    <>
      {tasksForTodolist.length ? (
        <ul>
          {tasksForTodolist.map((task) => (
            <TaskItem task={task} key={task.id} todolistId={id} />
          ))}
        </ul>
      ) : (
        <span>Тасок нет</span>
      )}
    </>
  )
}
