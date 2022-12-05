<template>
    <div class="flex w-screen h-screen">
        <div class="bg-gray-50 w-1/4 h-screen">

            <div class="px-10 pt-10 pb-5">
                <img :src="logoImagePath" alt="MyCompanyLogo" class="h-10">
            </div>

            <div class="px-10 py-5">
                <AppInputTextField headline="Email" id="email-address" name="email-address" label="email-address"
                    autocomplete="email" type="text"></AppInputTextField>
            </div>

            <div class="px-10 py-0">
                <AppInputTextField headline="Passwort" id="password" name="password" label="password"
                    autocomplete="password" type="password"></AppInputTextField>
            </div>

            <div class="px-10 py-5">
                <AppButtonPrimary name="Einloggen" v-bind:is-active="true" @button-click="$router.push('/')">
                </AppButtonPrimary>
            </div>
        </div>

        <div class="flex w-3/4 h-screen">
            <img :src="welcomeImagePath" alt="WelcomeImage" class="object-cover">
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
            welcomeImagePath: "src/assets/Pictures/LoginPicture.jpg"
        }
    }
});
</script>