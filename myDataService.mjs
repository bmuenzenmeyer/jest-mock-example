import axios from "axios"

const fetchList = async () => {
  try {
    const { data } = await axios.get("https://example.com/api/fetchList")
    return data
  } catch (err) {
    // console.error(err)
    return []
  }
}

export default fetchList
