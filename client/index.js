// vue
import Vue from 'vue';
import VueRouter from 'vue-router';

// components
import App from './App.vue';

// routes
import routes from './routes';

// plugins
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history',
});

const app = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
});
