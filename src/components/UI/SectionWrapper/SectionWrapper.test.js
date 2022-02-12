import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import SectionWrapper from "./SectionWrapper"

describe("SectionWrapper", () => {
  it("section wrapper show the children", () => {
    const testText = "test text"
    const { getByText } = render(
      <SectionWrapper>
        <p>{testText}</p>
      </SectionWrapper>
    )

    expect(getByText(testText)).toBeInTheDocument()
  })
})
