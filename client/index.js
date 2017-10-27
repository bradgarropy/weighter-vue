// vue
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

// components
import App from './App.vue';

// routes
import routes from './routes';

// plugins
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
    routes,
    mode: 'history',
});

// event bus
export const bus = new Vue();

// application
export const app = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
});
