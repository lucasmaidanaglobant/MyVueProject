<script lang="ts">
export default {};
</script>

<template>
  <article class="card">
    <h2 class="line"></h2>
    <p class="line"></p>
    <dl>
      <dt>Temperature</dt>
      <dd class="line"></dd>
    </dl>
    <dl>
      <dt>Humidity</dt>
      <dd class="line"></dd>
    </dl>
    <dl>
      <dt>Wind</dt>
      <dd class="line"></dd>
    </dl>
  </article>
</template>

<style>
article.card {
  border: 1px solid #ccc;
  padding: 1em 1.5em;
  border-radius: 10px;
}
dl {
  display: flex;
}
dt {
  font-weight: bold;
}
.line {
  background-color: rgb(219, 235, 219);
  animation: pulse 0.7s infinite, rainbow 1.5s infinite;
}
.line:before {
  content: "-------------------";
  color: transparent;
}
@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}
@keyframes rainbow {
  to {
    filter: hue-rotate(360deg);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.page-fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
