<template>
    <form v-on:submit.prevent="edit">

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
    import { getWeight, updateWeight } from '../api/weight';

    export default {
        components: {
            FormInput,
        },
        data() {

            return {
                date: '',
                weight: '',
                errors: {},
            };

        },
        props: {
            id: {
                type: String,
                required: true,
            },
        },
        created() {

            getWeight(this.id)
                .then((response) => {

                    const weight = response.data;

                    this.date = moment(weight.date).utc().format('YYYY-MM-DD');
                    this.weight = JSON.stringify(weight.weight);

                });

        },
        methods: {
            edit() {

                updateWeight(this.id, this.$data)
                    .then((response) => {

                        console.log(response);
                        this.$router.push('/weight');

                    });

            },
        },
    };
</script>


<style>
</style>
