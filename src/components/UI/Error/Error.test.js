import React from "react"
import { render, screen, cleanup } from "@testing-library/react"
import Error from "./Error"

afterEach(cleanup)
describe("Error", () => {
  let consoleOutput = []

  const originalWarn = console.error
  afterEach(() => (console.error = originalWarn))

  const mockedWarn = (output) => consoleOutput.push(output)
  beforeEach(() => (console.error = mockedWarn))

  it("show in console warning messages", () => {
    const { container } = render(<Error message="errorMessage" />)

    expect(consoleOutput).toEqual(["errorMessage"])
  })

  it("render message text", () => {
    const expectedValue = "message text"
    render(<Error message={expectedValue} />)

    const errorElement = screen.getByText(expectedValue)

    expect(errorElement).toBeInTheDocument()
  })

  it("render defauilt message text", () => {
    render(<Error />)

    const errorElement = screen.getByText(/Some error occurred/i)

    expect(errorElement).toBeInTheDocument()
  })
})