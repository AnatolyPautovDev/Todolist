import s from "./FilterButtons.module.css"
import { useAppDispatch } from "@/common/hooks/useAppDispatch.ts"
import { changeTodolistFilterAC } from "@/features/Todolists/model/todolistsSlice.ts"

type Props = {
  todolistId: string
}

export const FilterButtons = ({ todolistId }: Props) => {
  const dispatch = useAppDispatch()
  const setAllHandler = () => {
    dispatch(changeTodolistFilterAC({ todolistId, filter: "all" }))
  }
  const setActiveHandler = () => {
    dispatch(changeTodolistFilterAC({ todolistId, filter: "active" }))
  }
  const setCompletedHandler = () => {
    dispatch(changeTodolistFilterAC({ todolistId, filter: "completed" }))
  }
  return (
    <div className={s.wrapper}>
      <button type="button" onClick={setAllHandler}>
        All
      </button>
      <button type="button" onClick={setActiveHandler}>
        Active
      </button>
      <button type="button" onClick={setCompletedHandler}>
        Completed
      </button>
    </div>
  )
}
