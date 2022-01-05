import React, { useContext } from "react"
import PropTypes from "prop-types"

import ThemeContext from "../../store/theme-context"

const Theme = ({ children }) => {
  const themeCtx = useContext(ThemeContext)

  const changeThemeHandler = () => {
    if (themeCtx.name === "light-theme") {
      themeCtx.toggleTheme("dark-theme")
    } else {
      themeCtx.toggleTheme("light-theme")
    }
  }

  return (
    <div className={themeCtx.name}>
      {children}
      <button
        onClick={changeThemeHandler}
        className="changeTheme"
        type="button"
        aria-label="change theme"
      />
    </div>
  )
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Theme
