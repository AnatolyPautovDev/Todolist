import { type ChangeEvent, useState } from "react"
import styles from "./AddItemForm.module.css"

type Props = {
  onCreateItem: (title: string) => void
  placeholder?: string
}

export const AddItemForm = ({ onCreateItem, placeholder }: Props) => {
  const [value, setValue] = useState("")
  const [error, setError] = useState<null | string>(null)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
    setError(null)
  }
  const addItemHandler = () => {
    const trimmedValue = value.trim()
    if (trimmedValue) {
      onCreateItem(trimmedValue)
      setValue("")
    } else {
      setError("Invalid value")
    }
  }
  return (
    <div className={styles.addForm}>
      <input type="text" value={value} onChange={onChangeHandler} className={styles.input} placeholder={placeholder} />
      <button type="button" onClick={addItemHandler} className={styles.button}>
        +
      </button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  )
}
