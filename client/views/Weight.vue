<template>
    <div class="container">
        <h1>Weight</h1>
        <br>
        <WeightForm/>
        <br>
        <WeightTable/>
    </div>
</template>


<script>
    import WeightForm from '../components/WeightForm.vue';
    import WeightTable from '../components/WeightTable.vue';

    export default {
        components: {
            WeightForm,
            WeightTable,
        },
    };
</script>


<style>
</style>
