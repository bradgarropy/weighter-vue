<template>

    <div class="container">

        <h1>Login</h1>

        <br>

        <form v-on:submit.prevent="login">

            <FormInput
                label="Email"
                type="email"
                placeholder="Email"
                v-model="email"
                v-bind:error="errors.email"
            />

            <FormInput
                label="Password"
                type="password"
                placeholder="Password"
                v-model="password"
                v-bind:error="errors.password"
            />

            <button class="btn btn-default">Submit</button>

        </form>

    </div>

</template>


<script>
    import FormInput from './FormInput'
    import login from '../api/login'
    import Vue from 'vue'

    export default {
        components: {
            'FormInput': FormInput,
        },
        data: function() {
            return {
                email: '',
                password: '',
                errors: {},
            }
        },
        methods: {
            login: function() {
                login(this.$data)
                    .then((response) => {

                        console.log(response)
                        const token = response.data.token;

                        localStorage.setItem('token', token);
                        Vue.http.headers.common.Authorization = `Bearer ${token}`;
                        this.$router.push('/')

                    })
                    .catch((response) => {

                        const errors = response.body.errors
                        this.errors = errors

                    });
            },
        },
    }
</script>


<style>
</style>
