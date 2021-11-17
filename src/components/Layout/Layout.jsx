import ThemeProvider from "../../store/ThemeProvider"
import Theme from "../Theme/Theme"
import styles from "./Layout.module.css"

const Layout = (props) => {
  return (
    <ThemeProvider>
      <Theme>
        <main className={styles.wrapper}>{props.children}</main>
      </Theme>
    </ThemeProvider>
  )
}

export default Layout
