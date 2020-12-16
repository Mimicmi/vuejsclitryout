import { createApp } from 'vue'
import App from './App.vue'
import Product from "./components/Product";
import router from "../src/router/index";


const app = createApp(App);

app.use(router);
app.component("Product", Product);
app.mount('#app');

