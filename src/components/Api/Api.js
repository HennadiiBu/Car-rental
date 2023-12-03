import axios from "axios";

const BASE_URL = "https://64f079088a8b66ecf779bb2a.mockapi.io/adverts";

export async function fetchAdvert() {
  try {
    const { data } = await axios.get(`${BASE_URL}`);
    console.log(data)
    return data;
  } catch (error) {
    return error.message;
  }
}
