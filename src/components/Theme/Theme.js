import { useContext } from "react"
import ThemeContext from "../../store/theme-context"

const Theme = (props) => {
  const themeCtx = useContext(ThemeContext)

  return <main className={themeCtx.name}>{props.children}</main>
}

export default Theme
