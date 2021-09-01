import { createApp, h } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import App from "./App.vue";

import Home from "./pages/Home.vue";
import About from "./pages/About.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

createApp(App).use(router).mount("#app");
