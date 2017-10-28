// components
import Welcome from './views/Welcome.vue';
import Register from './views/Register.vue';
import Weight from './views/Weight.vue';
import Login from './views/Login.vue';


export default [
    {
        path: '/',
        component: Welcome,
    },
    {
        path: '/register',
        component: Register,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/weight',
        component: Weight,
    },
];
