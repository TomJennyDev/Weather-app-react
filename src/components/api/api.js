const BASE_URL = "https://api.openweathermap.org/data/2.5/";
const KEY_API = "bdb31a35da7018f956916c84c9781da9";

export default async function fetchAPI(pathUrl, queryParams) {
  try {
    const url = `${BASE_URL}${pathUrl}${queryParams}&appid=${KEY_API}`;
    const response = await fetch(url);
    const data = await response.json();
    if (response.ok) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
