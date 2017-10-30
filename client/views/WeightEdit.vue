<template>
    <div class="container">
        <h1>Edit Weight</h1>
        <br>
        <WeightFormEdit v-bind:id="id"/>
    </div>
</template>


<script>
    import WeightFormEdit from '../components/WeightFormEdit.vue';

    export default {
        components: {
            WeightFormEdit,
        },
        data() {

            return {
                id: this.$route.params.id,
            };

        },
    };
</script>


<style>
</style>
