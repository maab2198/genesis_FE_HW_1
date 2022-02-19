import { render, screen } from "@testing-library/react"

import React from "react"

import { BrowserRouter as Router } from "react-router-dom"

import "@testing-library/jest-dom"

import App from "./App"
const userID = "someuser"
jest.mock("./pages/TrendPage", () => () => <div>TrendPage</div>)
jest.mock("./pages/UserPage", () => () => <div>{userID}</div>)

const mockRender = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route)

  return render(ui, { wrapper: Router })
}

describe("App", () => {
  it("start page rendirect to trend", () => {
    mockRender(<App />)

    expect(screen.getByText(/TrendPage/i)).toBeInTheDocument()
    expect(window.location.pathname).toEqual("/trend")
  })

  it("redirect to user page", () => {
    mockRender(<App />, { route: `/user/${userID}` })

    expect(screen.getByText(userID)).toBeInTheDocument()
    expect(window.location.pathname).toEqual(`/user/${userID}`)
  })

  it("render trend page for bad route value", () => {
    mockRender(<App />, { route: "/something-that-does-not-match" })
    expect(screen.getByText(/TrendPage/i)).toBeInTheDocument()
    expect(window.location.pathname).toEqual("/trend")
  })
})
