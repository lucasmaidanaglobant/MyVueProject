<script lang="ts">
import api from "../api";
import { WeatherInterface } from "../api/weather.model";
import WeatherCard from "../components/WeatherCard/WeatherCard.vue";
import WeatherCardSkeleton from "../components/WeatherCard/WeatherCardSkeleton.vue";
import NotFound from "../components/NotFound/NotFound.vue";

export default {
  components: { WeatherCard, WeatherCardSkeleton, NotFound },
  data() {
    return {
      search: "London" as string,
      data: {} as WeatherInterface,
      state: "LOADING" as "LOADING" | "RESOLVED" | "ERROR",
    };
  },
  methods: {
    handleSearch() {
      if (this.search.length > 0) {
        this.state = "LOADING";
        api
          .getWeatherFrom(this.search)
          .then((data) => {
            this.data = data;
            this.state = "RESOLVED";
          })
          .catch(() => {
            this.state = "ERROR";
          });
      }
    },
  },
  mounted() {
    this.handleSearch();
  },
};
</script>

<template>
  <div>
    <h1>Home</h1>

    <input
      placeholder="Search a city"
      type="search"
      v-model="search"
      @change="handleSearch"
    />

    <div class="result">
      <transition name="fade">
        <WeatherCardSkeleton
          class="skeleton"
          v-if="state === 'LOADING'"
          key="loading"
        />
      </transition>

      <WeatherCard v-if="state === 'RESOLVED'" :data="data" key="resolved" />

      <NotFound v-if="state === 'ERROR'" key="error" />
    </div>
  </div>
</template>

<style>
input {
  width: 100%;
  padding: 15px;
  border: 1px solid rgb(139, 141, 139);
  border-radius: 6px;
  box-shadow: 0px 3px 5px rgb(232, 233, 232);
  font-size: 1.2em;
}
.result {
  position: relative;
  padding-top: 2em;
}
.skeleton {
  position: absolute;
  top: 2em;
  box-sizing: border-box;
  width: 100%;
}
</style>
