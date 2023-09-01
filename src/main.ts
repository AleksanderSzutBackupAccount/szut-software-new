import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { GlobalMixin } from "./mixins/GlobalMixin";
import i18n from "./i18n";

createApp(App)
    .use(router)
    .use(i18n)
    .mixin(GlobalMixin)
    .use(createPinia())
    .mount("#app");
