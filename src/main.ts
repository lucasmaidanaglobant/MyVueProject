import { createApp, h } from "vue";
import App from "./App.vue";
import About from "./About.vue";

const routes = {
  "/": App,
  "/about": About,
};

const SimpleRouter = {
  data: () => ({
    currentRoute: window.location.pathname,
  }),

  computed: {
    CurrentComponent() {
      return routes[this.currentRoute] || NotFoundComponent;
    },
  },

  render() {
    return h(this.CurrentComponent);
  },
};

createApp(SimpleRouter).mount("#app");
