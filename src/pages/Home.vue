<script lang="ts">
import api from "../api";
import WeatherCard from "../components/WeatherCard.vue";

export default {
  components: { WeatherCard },
  data() {
    return {
      search: "London",
      data: {},
      state: "LOADING",
    };
  },
  methods: {
    handleSearch() {
      this.state = "LOADING";
      api
        .getWeatherFrom(this.search)
        .then((data) => {
          if (data.cod === "404") {
            this.state = "ERROR";
          } else {
            this.data = data;
            this.state = "RESOLVED";
          }
        })
        .catch(() => {
          this.state = "ERROR";
        });
    },
  },
  mounted() {
    this.handleSearch();
  },
};
</script>

<template>
  <h1>Home</h1>

  <input
    placeholder="Search a city"
    type="search"
    v-model="search"
    @change="handleSearch"
  />

  <p v-if="state === 'LOADING'">Loading...</p>

  <WeatherCard v-if="state === 'RESOLVED'" :data="data" />

  <p v-if="state === 'ERROR'">City not found.</p>
</template>

<style>
input {
  width: 100%;
  padding: 10px;
}
</style>
