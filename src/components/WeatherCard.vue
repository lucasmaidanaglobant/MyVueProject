<script lang="ts">
export default {
  props: ["data"],
};
</script>

<template>
  <article>
    <h2>{{ data.name }}</h2>
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
  </article>
</template>

<style></style>
