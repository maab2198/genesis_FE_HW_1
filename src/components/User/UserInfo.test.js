import { render, screen } from "@testing-library/react"

import UserInfo from "./UserInfo"
import * as userData from "../../assets/json/mockData/user-info.json" 
import useHttp from "../../hooks/use-http"

jest.mock("../UI/LoadingSpinner/LoadingSpinner", () => () => (
  <div>LoadingSpinner</div>
))
jest.mock("../UI/Avatar/Avatar", () => () => <div>Avatar</div>)
jest.mock("../../hooks/use-http", () => jest.fn())



describe("UserInfo", () => {
  it("render loading spinner", () => {
    useHttp.mockImplementationOnce(() => ({
      sendRequest: () => {},
      error: null,
      status: "pending",
      data: userData,
    }))
    render(<UserInfo userId = "id"/>)

    expect(screen.getByText(/LoadingSpinner/i)).toBeTruthy()
  })

  it("render list of items", async () => {
    useHttp.mockImplementationOnce(() => ({
      sendRequest: () => {},
      error: null,
      status: "completed",
      data:  userData,
    }))
    render(<UserInfo userId = "id"/>)

    expect(await screen.findByText(/Avatar/)).toBeTruthy()
  })

  it("render erorr", async () => {
    useHttp.mockImplementationOnce(() => ({
      sendRequest: () => {},
      error: { message: "error text" },
      status: "complited",
      data: userData,
    }))
    render(<UserInfo userId = "id"/>)

    expect(await screen.findByText(/error text/)).toBeTruthy()
  })
})
