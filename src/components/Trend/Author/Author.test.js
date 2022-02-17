import React from "react"
import ReactDOM from "react-dom"

import { render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import Author from "./Author"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import { act } from "react-dom/test-utils"

const author = {
  name: "kikakiim",
  nickName: "nickname",
  avatar: "avatar",
}

jest.mock("../../UI/Avatar/Avatar", () => () => <div>Avatar</div>)



describe("Author", () => {
  it("render the component with inner content ", () => {
    const { container } = render(
      <MemoryRouter>
        <Author author={author} />
      </MemoryRouter>
    )

    expect(container.innerHTML).toBeTruthy()
  })

  it("render Avatar Component", () => {
    render(
      <MemoryRouter>
        <Author author={author} />
      </MemoryRouter>
    )
    expect(screen.queryByText(/Avatar/i)).toBeInTheDocument()
  })

  /// TODO: fix strange redirect

  it("render Avatar Component", async () => {
    render(
      <MemoryRouter initialEntries={["/trend"]}>
        <Routes>
          <Route path="/trend" element={<h1>Home</h1>} />
          <Route path="/user/:userId" element={<h1>UserPage</h1>} />
        </Routes>
        <Author author={author} />
      </MemoryRouter>
    )

    const link = screen.getByRole("link")

    userEvent.click(link)

    expect(screen.queryByText(/UserPage/i)).toBeInTheDocument()
  })
})
