import styles from "./changeThemeButton.module.css"
import Moon from "@/assets/img/moon.svg"
import Sun from "@/assets/img/sun.svg"
import { useAppSelector } from "@/common/hooks/useAppSelector.ts"
import { selectTheme } from "@/app/app-selectors.ts"
import { useAppDispatch } from "@/common/hooks/useAppDispatch.ts"
import { changeAppThemeAC } from "@/app/app-reducer.ts"

export const ChangeThemeButton = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(selectTheme)

  const changeThemeHandler = () => {
    dispatch(changeAppThemeAC({ theme: theme === "light" ? "dark" : "light" }))
  }

  return (
    <button type="button" onClick={changeThemeHandler} className={styles.changeThemeButton}>
      <img src={theme === "light" ? Moon : Sun} alt="" width="" height="" loading="lazy" />
    </button>
  )
}
