import type { ChangeEvent } from "react"
import { ChangeThemeButton } from "@/common/components/ChangeThemeButton/ChangeThemeButton.tsx"
import styles from "./SearchTodolist.module.css"

type Props = {
  value: string
  setValue: (value: string) => void
}

export const SearchTodolist = ({ value, setValue }: Props) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  return (
    <div className={styles.wrapper}>
      <input onChange={onChangeHandler} value={value} placeholder={"Search todolist..."} className={styles.search} />
      <ChangeThemeButton />
    </div>
  )
}
