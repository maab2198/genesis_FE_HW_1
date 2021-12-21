import React, { useContext } from "react"
import ThemeContext from "../../store/theme-context"

const Theme = (props) => {
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
      {props.children}
      <button
        onClick={changeThemeHandler}
        className="changeTheme"
        type="button"
      />
    </div>
  )
}

export default Theme
