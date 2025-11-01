import "./App.css"
import "./index.css"
import { Main } from "@/app/Main.tsx"
import styles from "./App.module.css"
import { useEffect } from "react"
import { useAppSelector } from "@/common/hooks/useAppSelector.ts"
import { selectTheme } from "@/app/app-selectors.ts"

export const App = () => {
  const theme = useAppSelector(selectTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Todo lists</h1>
      <Main />
    </div>
  )
}
