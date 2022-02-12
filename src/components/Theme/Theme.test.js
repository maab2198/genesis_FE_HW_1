import React from "react"
import { render, screen, fireEvent,cleanup } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Theme from "./Theme"
import ThemeProvider from "../../store/ThemeProvider"

afterEach(cleanup)

describe("Theme", () => {
  it("rended with light-theme className", () => {
    const expectedClassName = "light-theme"

    const { container } = render(
      <Theme>
        <p>child</p>
      </Theme>
    )
    const wrapperElement = container.firstChild

    expect(wrapperElement.className).toContain(expectedClassName)
  })

  it("button is available after click", () => {
    const { getByRole } = render(
      <ThemeProvider>
        <Theme>
          <p>child</p>
        </Theme>
      </ThemeProvider>
    )

    const button = getByRole("button")

    userEvent.click(button)

    expect(button).not.toBeDisabled()
  })

  it("toggle theme className after btn click", () => {
    const { container, getByRole } = render(
      <ThemeProvider>
        <Theme>
          <p>child</p>
        </Theme>
      </ThemeProvider>
    )

    const button = getByRole("button")

  
    expect(container.firstChild.className).toContain("light-theme")
    userEvent.click(button)
    expect(container.firstChild.className).toContain("dark-theme")
    userEvent.click(button)
    expect(container.firstChild.className).toContain("light-theme")
    
  })
})
