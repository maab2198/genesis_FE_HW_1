import React from "react"

const defaultTheme = {
  name: "default",
  toggleTheme: (newTheme) => {},
}

const ThemeContext = React.createContext(defaultTheme)

export default ThemeContext
