<template>

    <div id="navigation">

        <nav class="navbar navbar-default">
            <div class="container-fluid">

                <ul class="nav navbar-nav">
                    <li>
                        <router-link to="/">
                            <span class="glyphicon glyphicon-home"></span>
                        </router-link>
                    </li>
                    <li v-if="authenticated">
                        <router-link to="/weight">
                            <span class="glyphicon glyphicon-scale"></span>
                        </router-link>
                    </li>
                </ul>

                <ul class="nav navbar-nav navbar-right">

                    <template v-if="!authenticated">
                        <li>
                            <router-link to="/register">Register</router-link>
                        </li>
                        <li>
                            <router-link to="/login">Login</router-link>
                        </li>
                    </template>

                    <template v-if="authenticated">
                        <li class="dropdown">
                            <a role="button" class="dropdown-toggle" data-toggle="dropdown">
                                {{name}} <span class="glyphicon glyphicon-user" />
                                <span class="caret" />
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <router-link to="/profile">Profile</router-link>
                                </li>
                                <li>
                                    <a role="button" tabIndex="0" v-on:click="logout">Logout</a>
                                </li>
                            </ul>
                        </li>
                    </template>

                </ul>

            </div>
        </nav>

    </div>

</template>


<script>
    import Vue from 'vue';
    import { bus } from '../index';
    import { isAuthenticated, userFirstName } from '../utils/authentication';

    export default {
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
        data() {

            return {
                authenticated: isAuthenticated(),
                name: userFirstName(),
            };

        },
        methods: {
            logout() {

                localStorage.removeItem('token');
                delete Vue.http.headers.common.Authorization;
                bus.$emit('logout');
                this.$router.push('/');

            },
        },
    };
</script>


<style scoped>
    .navbar-right {
        margin-right: 0px;
    }
</style>
