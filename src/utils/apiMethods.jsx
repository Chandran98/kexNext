import axios from "axios";
export async function getApi(url) {
  const data = await axios.get(url);

  return data.data;
}
