<template>

    <div id="app">
        <TheNavigation/>
        <router-view/>
    </div>

</template>


<script>
    import TheNavigation from './components/TheNavigation'
    import WelcomeMessage from './components/WelcomeMessage'
    import RegisterForm from "./components/RegisterForm";
    import LoginForm from "./components/LoginForm";

    export default {
        components: {
            'TheNavigation': TheNavigation,
        }
    }
</script>


<style>
</style>
