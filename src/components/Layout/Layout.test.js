import React from "react"
import { render,screen} from "@testing-library/react"
import Layout from "./Layout"

describe("Layout", () => {
  it("render with the child component", () => {
    const childText = "test text"
    render(
      <Layout>
        <p>{childText}</p>
      </Layout>
    )

    expect(screen.getByText(childText)).toBeInTheDocument()
  })
})
