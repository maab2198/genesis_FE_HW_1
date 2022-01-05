import {createContext} from "react"

const defaultTheme = {
  name: "light-theme",
  toggleTheme: () => {},
}

const ThemeContext = createContext(defaultTheme)

export default ThemeContext
