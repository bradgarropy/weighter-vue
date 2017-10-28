<template>
    <tr>

        <td class="text-center">
            {{date | formatDate}}
        </td>

        <td class="text-center">
            {{weight}}
        </td>

        <td class="text-center">
            <a href="#">
                <span class="glyphicon glyphicon-trash text-danger"></span>
            </a>
        </td>

        <td class="text-center">
            <a href="#">
                <span class="glyphicon glyphicon-edit text-info"></span>
            </a>
        </td>

    </tr>
</template>


<script>
    import moment from 'moment';

    export default {
        props: {
            date: {
                type: String,
                required: true,
            },
            weight: {
                type: Number,
                required: true,
            },
        },
        filters: {
            formatDate(date) {

                return moment(date).utc().format('MM/DD/YYYY');

            },
        },
    };
</script>


<style>
</style>
