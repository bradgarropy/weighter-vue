<template>

    <div class="form-group">

        <label class="control-label">
            {{label}}
        </label>

        <input
            class="form-control"
            v-bind:type="type"
            v-bind:placeholder="placeholder"
            v-bind:value="value"
            v-on:input="onInput($event.target.value)"
        />

        <span class="help-block" v-if="error">{{error.msg}}</span>

    </div>

</template>


<script>
    export default {
        props: {
            label: {
                type: String,
                required: true,
            },
            type: {
                type: String,
                required: true,
            },
            placeholder: {
                type: String,
                required: true,
            },
            value: {
                type: String,
                required: true,
            },
            error: {
                type: Object,
                required: false,
            }
        },
        methods: {
            onInput: function(value) {
                this.$emit('input', value)
            },
        },
    }
</script>


<style>
</style>
