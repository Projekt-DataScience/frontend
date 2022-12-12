<template>
    <label class="block text-base text-gray-500">{{headline}}</label>
    <textarea :name="name" cols="40" rows="5" class="mt-1 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-primary-blue focus:ring-primary-blue sm:text-sm"></textarea>
</template>



<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
    name: "AppInputBigTextField",
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
    }
});
</script>