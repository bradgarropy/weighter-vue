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
            />

            <FormInput
                label="Last Name"
                type="text"
                placeholder="Last Name"
                v-model="last_name"
            />

            <FormInput
                label="Email"
                type="email"
                placeholder="Email"
                v-model="email"
            />

            <FormInput
                label="Password"
                type="password"
                placeholder="Password"
                v-model="password"
            />

            <FormInput
                label="Confirm Password"
                type="password"
                placeholder="Confirm Password"
                v-model="confirmation"
            />

            <button class="btn btn-default">Submit</button>

        </form>

    </div>

</template>


<script>
    import FormInput from './FormInput'
    import createUser from '../api/register'

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
            }
        },
        methods: {
            register: function() {
                console.log(this.$data)
                createUser(this.$data)
            }
        },
    }
</script>


<style>
</style>
