import ThemeProvider from "../../store/ThemeProvider"
import Theme from "../Theme/Theme"

const Layout = (props) => {
  return (
    <ThemeProvider>
      <Theme>{props.children}</Theme>
    </ThemeProvider>
  )
}

export default Layout
