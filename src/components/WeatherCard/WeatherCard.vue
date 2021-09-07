<script lang="ts">
import { WeatherInterface } from "../../api/weather.model";
import api from "../../api/api";

export default {
  props: {
    data: {
      type: Object as () => WeatherInterface,
    },
  },
  data() {
    return {
      mapUrl:
        "https://image.maps.ls.hereapi.com/mia/1.6/mapview?apiKey=IN2qhcSw6LNqSvvHVA2lA9NK9quv1C88U4sNeCkJ578&c=47.8,13.033",
    };
  },
};
</script>

<template>
  <article class="card">
    <h2>{{ data.name }}</h2>
    <p>{{ data.weather[0].description }}</p>
    <dl>
      <dt>Temperature</dt>
      <dd>{{ data.main.temp }}</dd>
    </dl>
    <dl>
      <dt>Humidity</dt>
      <dd>{{ data.main.humidity }}</dd>
    </dl>
    <dl>
      <dt>Wind</dt>
      <dd>{{ data.wind.speed }}</dd>
    </dl>
    <img :src="mapUrl" />
  </article>
</template>

<style>
article.card {
  border: 1px solid #ccc;
  padding: 1em 1.5em;
  margin: 0 0 2em 0;
  border-radius: 10px;
}
dl {
  display: flex;
}
dt {
  font-weight: bold;
}
</style>
