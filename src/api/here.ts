const BASEURL: string = "https://image.maps.ls.hereapi.com/mia/1.6/mapview";
//import { WeatherInterface } from "./weather.model";
const APIKEY: string = "IN2qhcSw6LNqSvvHVA2lA9NK9quv1C88U4sNeCkJ578";

export default {
  getMap: (lat: string, long: string): string => {
    const params = {
      c: `${lat},${long}`,
      apiKey: APIKEY,
    };
    const queryString = new URLSearchParams(params).toString();
    return `${BASEURL}?${queryString}`;
    /* return fetch(`${BASEURL}?${queryString}`)
      .then((res) => res.json())
      .then((data: any) => {
        if (data.cod === "404") {
          throw new Error(data.message);
        }
        return data;
      }); */
  },
};
