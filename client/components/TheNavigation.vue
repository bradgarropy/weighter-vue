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
                </ul>

                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <router-link to="/register">Register</router-link>
                    </li>
                    <li>
                        <router-link to="/login">Login</router-link>
                    </li>
                </ul>

            </div>
        </nav>

    </div>

</template>


<script>
</script>


<style scoped>
    .navbar-right {
        margin-right: 0px;
    }
</style>
