import React from "react"
import { render, screen } from "@testing-library/react"
import LoadingSpinner from "./LoadingSpinner"

describe("LoadingSpinner", () => {
  it("render spinner built from two divs", () => {
    const { container } = render(<LoadingSpinner />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
