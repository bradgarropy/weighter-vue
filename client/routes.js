// components
import Welcome from './views/Welcome.vue';
import Register from './views/Register.vue';
import Weight from './views/Weight.vue';
import WeightEdit from './views/WeightEdit.vue';
import Login from './views/Login.vue';
import Profile from './views/Profile.vue';
import Password from './views/Password.vue';
import Forgot from './views/Forgot.vue';


export default [
    {
        path: '/',
        component: Welcome,
    },
    {
        path: '/forgot',
        component: Forgot,
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
        path: '/password',
        component: Password,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/weight',
        component: Weight,
    },
    {
        path: '/edit/:id',
        component: WeightEdit,
    },
];
