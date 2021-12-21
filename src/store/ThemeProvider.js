import React from "react"
import { useState } from "react"
import ThemeContext from "./theme-context"

const defaultTheme = {
  name: "light-theme",
}

const ThemeProvider = (props) => {
  const [themeState, setTheme] = useState(defaultTheme)

  const toggleCartHandler = (newName) => {
    setTheme({ name: newName })
  }

  const themeContext = {
    name: themeState.name,
    toggleTheme: toggleCartHandler,
  }

  return (
    <ThemeContext.Provider value={themeContext}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
