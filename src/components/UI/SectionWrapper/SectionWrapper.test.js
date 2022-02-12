import React from "react"
import { render, screen } from "@testing-library/react"
import SectionWrapper from "./SectionWrapper"

describe("SectionWrapper", () => {
  it("section wrapper show the children", () => {
    const testText = "test text"
    render(
      <SectionWrapper>
        <p>{testText}</p>
      </SectionWrapper>
    )

    expect(screen.getByText(testText)).toBeInTheDocument()
  })
})
