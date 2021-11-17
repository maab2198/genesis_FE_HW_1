import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"
import ThemeProvider from "./store/ThemeProvider"

ReactDOM.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
)

reportWebVitals()
