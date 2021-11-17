import { useContext } from "react"
import ThemeContext from "../../store/theme-context"

const Theme = (props) => {
  const themeCtx = useContext(ThemeContext)

  return <div className={themeCtx.name}>{props.children}</div>
}

export default Theme
