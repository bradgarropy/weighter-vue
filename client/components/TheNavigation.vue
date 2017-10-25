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
                                    <a role="button" tabIndex="0" onClick={this.handleLogout}>Logout</a>
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
    import { isAuthenticated, userFirstName } from '../utils/authentication'

    export default {
        data: function() {
            return {
                authenticated: isAuthenticated(),
                name: userFirstName(),
            }
        },
    }
</script>


<style scoped>
    .navbar-right {
        margin-right: 0px;
    }
</style>
