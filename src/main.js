import { createApp } from "vue";
import App from "./App.vue";
import { makeServer } from "./server";

import "./assets/main.css";

new makeServer();

createApp(App).mount("#app");
