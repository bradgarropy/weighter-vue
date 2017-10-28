<template>
    <tr>

        <td class="text-center">
            {{date}}
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
    export default {
        data() {

            return {
                date: '',
                weight: '',
            };

        },
    };
</script>


<style>
</style>
