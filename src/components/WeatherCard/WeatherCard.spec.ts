import { shallowMount } from "@vue/test-utils";
import WeatherCard from "./WeatherCard.vue";
describe("Weather Card", () => {
  it("should render", () => {
    const mockedResult = {
      coord: { lon: -0.1257, lat: 51.5085 },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      base: "stations",
      main: {
        temp: 291.91,
        feels_like: 291.54,
        temp_min: 290.64,
        temp_max: 293.36,
        pressure: 1028,
        humidity: 65,
      },
      visibility: 10000,
      wind: { speed: 4.12, deg: 40 },
      clouds: { all: 75 },
      dt: 1630591217,
      sys: {
        type: 2,
        id: 2006068,
        country: "GB",
        sunrise: 1630559700,
        sunset: 1630608346,
      },
      timezone: 3600,
      id: 2643743,
      name: "London",
      cod: 200,
    };
    const component = shallowMount(WeatherCard, {
      propsData: {
        data: mockedResult,
      },
    });
    expect(component).toBeTruthy();
    expect(component.find("h2").text()).toEqual("London"); // City
    expect(component.find("p").text()).toEqual("broken clouds"); // Description
    expect(component.findAll("dd")[0].text()).toEqual("291.91"); // Temperature
    expect(component.findAll("dd")[1].text()).toEqual("65"); // Humidity
    expect(component.findAll("dd")[2].text()).toEqual("4.12"); // Wind
  });
});
