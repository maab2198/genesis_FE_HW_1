
import Theme from "../Theme/Theme"
import styles from "./Layout.module.css"

const Layout = (props) => {
  return (

      <Theme>
        <main className={styles.wrapper}>{props.children}</main>
      </Theme>

  )
}

export default Layout
