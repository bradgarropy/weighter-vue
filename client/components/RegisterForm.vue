<template>

    <div class="container">

        <h1>Register</h1>

        <br>

        <form v-on:submit.prevent="register">

            <FormInput
                label="First Name"
                type="text"
                placeholder="First Name"
                v-model="first_name"
                v-bind:error="errors.first_name"
            />

            <FormInput
                label="Last Name"
                type="text"
                placeholder="Last Name"
                v-model="last_name"
                v-bind:error="errors.last_name"
            />

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

            <FormInput
                label="Confirm Password"
                type="password"
                placeholder="Confirm Password"
                v-model="confirmation"
                v-bind:error="errors.confirmation"
            />

            <button class="btn btn-default">Submit</button>

        </form>

    </div>

</template>


<script>
    import FormInput from './FormInput'
    import createUser from '../api/user'

    export default {
        components: {
            'FormInput': FormInput,
        },
        data: function() {
            return {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                confirmation: '',
                errors: {},
            }
        },
        methods: {
            register: function() {
                createUser(this.$data)
                    .then((response) => {

                        console.log(response)
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
