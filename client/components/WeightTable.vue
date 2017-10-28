<template>
    <table class="table table-bordered table-striped table-hover">
        <tbody>

            <tr>
                <th class="text-center">Date</th>
                <th class="text-center">Weight</th>
                <th class="text-center">Delete</th>
                <th class="text-center">Edit</th>
            </tr>

            <WeightTableEntry/>

        </tbody>
    </table>
</template>


<script>
    import WeightTableEntry from './WeightTableEntry.vue';
    import { getWeights } from '../api/weight';

    export default {
        components: {
            WeightTableEntry,
        },
        created() {

            getWeights()
                .then((response) => {

                    console.log(response);

                });

        },
    };
</script>


<style>
</style>
