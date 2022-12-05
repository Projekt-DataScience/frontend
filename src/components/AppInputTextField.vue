<template>
    <label :for="label" class="block text-base text-gray-500">{{headline}}</label>
    <input :type="type" :name="name" :id="id" :autocomplete="autocomplete"
        class="mt-1 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-primary-blue focus:ring-primary-blue sm:text-sm" />
</template>



<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
    name: "AppInputTextField",
    components: {},
    props: {
        headline: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        }, 
        type: {
            type: String,
            required: true
        },
        autocomplete: {
            type: String,
            required: true
        }
        
    }
});
</script>