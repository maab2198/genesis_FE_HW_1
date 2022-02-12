import React from "react"
import { render, screen } from "@testing-library/react"
import Avatar from "./Avatar"

describe("Avatar", () => {
  it("img alt value set from props", () => {
    render(<Avatar name="alt_value" />)
    const imgElement = screen.getByAltText(/alt/i)

    expect(imgElement).toBeInTheDocument()
  })

  it("link href set from props", () => {
    const testValue = "userId"

    render(<Avatar link={testValue} />)

    const linkElement = screen.getByRole("link")
    expect(linkElement).toHaveAttribute("href", "/user/" + testValue)
  })

  it("render correct src", async () => {
    const expectedSource = "src"

    render(<Avatar src={expectedSource} name="alt" />)

    const imgElement = screen.getByRole("img")

    expect(imgElement).toHaveAttribute("src", expectedSource)
  })

  it("render default image if src is empty", async () => {
    render(<Avatar src="" name="alt" />)

    const imgElement = screen.getByRole("img")

    expect(imgElement).toHaveAttribute("src", "avatar.jpg")
  })

  it("render image with width 60px ", () => {
    const expectedWidth = "60px"

    render(<Avatar size="sm" name="alt_value" />)

    const imgElement = screen.getByRole("img")

    expect(imgElement).toHaveAttribute("width", expectedWidth)
  })

  it("render image with width 120px ", () => {
    const expectedWidth = "120px"
    render(<Avatar size="md" name="alt_value" />)

    const imgElement = screen.getByRole("img")

    expect(imgElement).toHaveAttribute("width", expectedWidth)
  })
})
