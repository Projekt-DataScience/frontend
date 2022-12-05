<template>
    <div class="grid grid-cols-5">
        <div class="col-span-1 bg-slate-50 h-screen">
            <div class="px-5 py-5">
                <img :src="logoImagePath" alt="MyCompanyLogo" class="h-10">
            </div>

            <div class="p-5">
                <AppInputTextField headline="Email" id="email-address" name="email-address" label="email-address" autocomplete="email" type="text"></AppInputTextField>
                
            </div>

            <div class="p-5">
                <AppInputTextField headline="Passwort" id="password" name="password" label="password" autocomplete="password" type="password"></AppInputTextField>
            </div>

            <div class="px-5 py-5">
                <AppButtonPrimary name="Einloggen" v-bind:is-active="true">
                </AppButtonPrimary>
            </div>
        </div>
        <div class="col-span-auto">
            <img :src="welcomeImagePath" alt="WelcomeImage" class="w-100 h-screen">
        </div>
    </div>
</template>


<script lang="ts">
import { ref, defineComponent } from "vue";
import AppButtonPrimary from "../components/AppButtonPrimary.vue";
import AppInputTextField from "../components/AppInputTextField.vue";


export default defineComponent({
    name: "Login",
    components: {
        AppButtonPrimary,
        AppInputTextField
    },
    data() {
        return {
            logoImagePath: "src/assets/Icons/AppMyCompanyIcon.svg",
            welcomeImagePath: "src/assets/vue.svg"
        }
    }
});
</script>