import styles from "./changeThemeButton.module.css"
import Moon from "@/assets/img/moon.svg"
import Sun from "@/assets/img/sun.svg"

type Props = {
  theme: "dark" | "light"
  setTheme: (theme: "dark" | "light") => void
}

export const ChangeThemeButton = ({ theme, setTheme }: Props) => {
  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <button type="button" onClick={changeThemeHandler} className={styles.changeThemeButton}>
      <img src={theme === "light" ? Moon : Sun} alt="" width="" height="" loading="lazy" />
    </button>
  )
}
