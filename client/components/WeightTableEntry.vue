<template>
    <tr>

        <td class="text-center">
            {{date | formatDate}}
        </td>

        <td class="text-center">
            {{weight}}
        </td>

        <td class="text-center">
            <a href="#" v-on:click="trash(id)">
                <span class="glyphicon glyphicon-trash text-danger"></span>
            </a>
        </td>

        <td class="text-center">
            <router-link v-bind:to="`/edit/${id}`">
                <span class="glyphicon glyphicon-edit text-info"></span>
            </router-link>
        </td>

    </tr>
</template>


<script>
    import moment from 'moment';

    export default {
        props: {
            id: {
                type: String,
                required: true,
            },
            date: {
                type: String,
                required: true,
            },
            weight: {
                type: Number,
                required: true,
            },
            trash: {
                type: Function,
                required: true,
            },
        },
        filters: {
            formatDate(date) {

                return moment(date).utc().format('MM/DD/YYYY');

            },
            editUrl(id) {

                return `/edit/${id}`;

            },
        },
    };
</script>


<style>
</style>
