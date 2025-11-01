import { Todolists } from "@/features/Todolists/ui/Todolists/Todolists.tsx"
// import { useAppDispatch } from "@/common/hooks/useAppDispatch.ts"
// import { createTodolistAC } from "@/features/Todolists/model/todolists-reducer.ts"
import { AddButton } from "@/common/components/AddButton/AddButton.tsx"
import styles from "./Main.module.css"
import { useState } from "react"

export const Main = () => {
  const [modalIsOpen, setmodalIsOpen] = useState(false)

  // const dispatch = useAppDispatch()
  /*const createTodolist = (title: string) => {
    dispatch(createTodolistAC(title))
  }*/
  return (
    <div>
      {modalIsOpen ? <div>open</div> : null}
      <AddButton
        addItemHandler={() => {
          setmodalIsOpen(true)
        }}
        className={styles.button}
      />
      <Todolists />
    </div>
  )
}
