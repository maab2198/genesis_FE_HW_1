import React, { useState } from "react"
import PropTypes from "prop-types"
import ThemeContext from "./theme-context"

const defaultTheme = {
  name: "light-theme",
}

const ThemeProvider = ({ children }) => {
  const [themeState, setTheme] = useState(defaultTheme)

  const toggleCartHandler = (newName) => {
    setTheme({ name: newName })
  }

  const themeContext = {
    name: themeState.name,
    toggleTheme: toggleCartHandler,
  }

  return (
    <ThemeContext.Provider value={React.useMemo(themeContext)}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThemeProvider
