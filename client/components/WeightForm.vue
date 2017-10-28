<template>
    <form v-on:submit.prevent="add">

        <FormInput
            label="Date"
            type="date"
            v-model="date"
            v-bind:error="errors.date"
        />

        <FormInput
            label="Weight"
            type="number"
            v-model="weight"
            v-bind:error="errors.weight"
        />

        <button class="btn btn-default">Submit</button>

    </form>
</template>


<script>
    import moment from 'moment';
    import FormInput from './FormInput.vue';
    import { createWeight } from '../api/weight';

    export default {
        components: {
            FormInput,
        },
        data() {

            return {
                date: moment().format('YYYY-MM-DD'),
                weight: '',
                errors: {},
            };

        },
        methods: {
            add() {

                createWeight(this.$data)
                    .then((response) => {

                        console.log(response);
                        Object.assign(this.$data, this.$options.data());

                    })
                    .catch((response) => {

                        console.log(response);
                        const { errors } = response.body;
                        this.errors = errors;

                    });

            },
        },
    };
</script>


<style>

</style>
