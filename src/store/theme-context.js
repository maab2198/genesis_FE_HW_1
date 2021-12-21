import React from "react"

const defaultTheme = {
  name: "light-theme",
  toggleTheme: () => {},
}

const ThemeContext = React.createContext(defaultTheme)

export default ThemeContext
