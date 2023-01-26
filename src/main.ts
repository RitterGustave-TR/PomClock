import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";

import "./assets/main.css";
import "primevue/resources/themes/tailwind-light/theme.css";

const application = createApp(App);
application.use(PrimeVue);

application.mount("#app");
