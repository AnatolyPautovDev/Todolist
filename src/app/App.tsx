import "./App.css"
import "./index.css"
import { Main } from "@/app/Main.tsx"
import styles from "./App.module.css"
import { useEffect, useState } from "react"
import { ChangeThemeButton } from "@/common/components/ChangeThemeButton/ChangeThemeButton.tsx"

export const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">((localStorage.getItem("theme") as "light" | "dark") || "light")

  useEffect(() => {
    if (!localStorage.length) {
      localStorage.setItem("theme", theme)
    }
  }, [])

  useEffect(() => {
    document.documentElement.className = theme // добавляет класс на <html>
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Todo lists</h1>
      <ChangeThemeButton theme={theme} setTheme={setTheme} />
      <Main />
    </div>
  )
}
