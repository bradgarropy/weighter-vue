<template>
    <table class="table table-bordered table-striped table-hover">
        <tbody>

            <tr>
                <th class="text-center">Date</th>
                <th class="text-center">Weight</th>
                <th class="text-center">Delete</th>
                <th class="text-center">Edit</th>
            </tr>

            <template v-for="weight in weights">
                <WeightTableEntry
                    v-bind:key="weight._id"
                    v-bind:id="weight._id"
                    v-bind:date="weight.date"
                    v-bind:weight="weight.weight"
                    v-bind:trash="trash"/>
            </template>

        </tbody>
    </table>
</template>


<script>
    import WeightTableEntry from './WeightTableEntry.vue';
    import { getWeights, deleteWeight } from '../api/weight';
    import { bus } from '../index';

    export default {
        components: {
            WeightTableEntry,
        },
        created() {

            this.refresh();

            bus.$on('weightAdded', () => {

                this.refresh();

            });

        },
        data() {

            return {
                weights: [],
            };

        },
        methods: {
            refresh() {

                getWeights()
                    .then((response) => {

                        console.log(response);
                        const weights = response.body;
                        this.weights = weights;

                    });

            },
            trash(id) {

                deleteWeight(id)
                    .then((response) => {

                        this.refresh();

                    });

            },
        },
    };
</script>


<style>
</style>
