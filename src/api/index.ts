const BASEURL: string = "http://api.openweathermap.org/data/2.5/weather";
import { WeatherInterface } from "./weather.model";
const APIKEY: string = "1379d4d42e7acbf67dce7fb0258ccfaa";

export default {
  getWeatherFrom: (city: string): Promise<WeatherInterface> => {
    const params = {
      q: city,
      APPID: APIKEY,
    };
    const queryString = new URLSearchParams(params).toString();
    return fetch(`${BASEURL}?${queryString}`)
      .then((res) => res.json())
      .then((data: WeatherInterface) => {
        if (data.cod === "404") {
          throw new Error(data.message);
        }
        return data;
      });
  },
};
