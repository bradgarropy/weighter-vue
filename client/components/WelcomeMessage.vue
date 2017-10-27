<template>

    <div id="welcome">
        <div class="container">

            <template v-if="!authenticated">
                <h1>Welcome.</h1>
                <h4>Please <router-link to="/register">register</router-link> or <router-link to="/login">login</router-link>.</h4>
            </template>

            <template v-if="authenticated">
                <h1>Welcome, {{name}}.</h1>
            </template>

        </div>
    </div>

</template>


<script>
    import { bus } from '../index';
    import { isAuthenticated, userFirstName } from '../utils/authentication';

    export default {
        data() {

            return {
                authenticated: isAuthenticated(),
                name: userFirstName(),
            };

        },
        created() {

            bus.$on('login', () => {

                this.authenticated = isAuthenticated();
                this.name = userFirstName();

            });

            bus.$on('logout', () => {

                this.authenticated = isAuthenticated();
                this.name = userFirstName();

            });

        },
    };
</script>


<style>
</style>
