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
            />

            <FormInput
                label="Password"
                type="password"
                placeholder="Password"
                v-model="password"
            />

            <button class="btn btn-default">Submit</button>

        </form>

    </div>

</template>


<script>
    import FormInput from './FormInput'

    export default {
        components: {
            'FormInput': FormInput,
        },
        data: function() {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            login: function() {
                console.log(this.$data);
            },
        },
    }
</script>


<style>
</style>
