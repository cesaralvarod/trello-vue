import { createApp } from "vue";
import App from "./App.vue";

// Vuex Store
import store from "./store/store";

// Router
import router from "./router";

// Tailwind CSS
import "@/assets/css/tailwind.css";

// Creating app

const app = createApp(App);

app.use(store);

app.use(router);

app.mount("#app");
