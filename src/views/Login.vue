<template>
    <div class="grid grid-cols-4">
        <div class="col-span-1">
            <AppButtonPrimary name="Einloggen" is-active="true">
            </AppButtonPrimary>
        </div>
        <div class="col-span-auto">
            TEST
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import AppButtonPrimary from "../components/AppButtonPrimary.vue";

export default defineComponent({
    name: "Login",
    components: {
        AppButtonPrimary
    },
    setup() {

    },
    data() {
        return {

        };
    },
    methods: {

    }
}); 
</script>