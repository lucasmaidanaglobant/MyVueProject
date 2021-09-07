<script lang="ts">
export default {};
</script>

<template>
  <article class="error">
    <p class="flip">👀</p>
    <p><strong>City not found.</strong></p>
  </article>
</template>

<style>
article.error {
  border: 0;
  display: grid;
  place-content: center;
  text-align: center;
  min-height: 12.8em;
  background-color: rgb(239, 240, 239);
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

.flip {
  animation: flip 3s steps(1, end) infinite;
  font-size: 2em;
}
@keyframes flip {
  50%,
  100% {
    transform: rotateY(180deg);
  }
}
</style>
