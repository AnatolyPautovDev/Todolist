import { useState } from "react"

type Props = {
  title: string
  onChange: (value: string) => void
}

export const EditableSpan = ({ title, onChange }: Props) => {
  const [editMode, setEditMode] = useState(false)
  const [value, setValue] = useState(title)

  const onBlurHandler = () => {
    onChange(value)
    setEditMode(false)
  }

  return (
    <>
      {editMode ? (
        <input
          type="text"
          autoFocus
          value={value}
          onChange={(e) => {
            setValue(e.currentTarget.value)
          }}
          onBlur={onBlurHandler}
        />
      ) : (
        <span
          onDoubleClick={() => {
            setEditMode(true)
          }}
        >
          {title}
        </span>
      )}
    </>
  )
}
