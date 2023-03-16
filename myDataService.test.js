import axios from "axios"
import fetchList from "./myDataService.mjs"

jest.mock("axios")

describe("myDataService", () => {
  it("returns an empty list on error", async () => {
    // arrange
    axios.get.mockRejectedValueOnce(new Error("oh no!"))
    // act
    const result = await fetchList()
    // assert
    expect(axios.get).toHaveBeenCalled()
    expect(result).toEqual([])
  })
})
