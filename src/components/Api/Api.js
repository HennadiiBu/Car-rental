import axios from "axios";

const BASE_URL = "https://656b9056dac3630cf7283941.mockapi.io/advert";

export async function fetchAdvert() {
  try {
    const { data } = await axios.get(`${BASE_URL}`);
    return data;
  } catch (error) {
    return error.message;
  }
}
