import React from "react"
import { render} from "@testing-library/react"
import Layout from "./Layout"

describe("Layout", () => {
  it("render with the child component", () => {
    const childText = "test text"
    const { getByText } = render(
      <Layout>
        <p>{childText}</p>
      </Layout>
    )

    expect(getByText(childText)).toBeInTheDocument()
  })
})
