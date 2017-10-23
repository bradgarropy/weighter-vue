// components
import WelcomeMessage from './components/WelcomeMessage.vue';
import RegisterForm from './components/RegisterForm.vue';
import LoginForm from './components/LoginForm.vue';


export default [
    {
        path: '/',
        component: WelcomeMessage,
    },
    {
        path: '/register',
        component: RegisterForm,
    },
    {
        path: '/login',
        component: LoginForm,
    },
];
