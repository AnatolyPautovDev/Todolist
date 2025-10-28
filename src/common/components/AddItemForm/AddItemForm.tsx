import { type ChangeEvent, useState } from "react"

type Props = {
  onCreateItem: (title: string) => void
}

export const AddItemForm = ({ onCreateItem }: Props) => {
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
    <div>
      <input type="text" value={value} onChange={onChangeHandler} />
      <button type="button" onClick={addItemHandler}>
        +
      </button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  )
}
