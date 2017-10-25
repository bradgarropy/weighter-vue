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
    import { isAuthenticated, userFirstName } from '../utils/authentication'

    export default {
        data: function() {
            return {
                authenticated: isAuthenticated(),
                name: userFirstName(),
            }
        }
    }
</script>


<style>
</style>
