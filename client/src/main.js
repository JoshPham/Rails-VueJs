import { createApp } from 'vue';
import './style.css'
import App from './App.vue';
import router from '../router';
import store from "./store";

let localAuthToken = localStorage.auth_token;
let cookieExists = localAuthToken !== "undefined" && localAuthToken !== null;
if (cookieExists) {
  const auth_token = localStorage.getItem("auth_token");
  const authTokenExists = auth_token !== "undefined" && auth_token !== null;
  if (authTokenExists) {
    store.dispatch("loginUserWithToken", { auth_token });
  }
}

const app = createApp(App);
app.use(router);
app.use(store);

app.mount('#app');