<template>
    <div class="grid grid-cols-7">
        <div class="col-span-2 bg-slate-100 row-auto">
            <div class="px-5 py-5">
                <img :src="logoImagePath" alt="MyCompanyLogo" class="h-10">
            </div>

            <div class="p-5">
                <label for="email-address" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="text" name="email-address" id="email-address" autocomplete="email"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>


            <div class="p-5">
                <label for="password" class="block text-sm font-medium text-gray-700">Passwort</label>
                <input type="password" name="password" id="password" autocomplete="password"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>

            <div class="px-5 py-5">
                <AppButtonPrimary name="Einloggen" is-active="true">
                </AppButtonPrimary>
            </div>
        </div>
        <div class="col-span-auto">
            <img :src="welcomeImagePath" alt="WelcomeImage" class="w-100">
        </div>
    </div>
</template>


<script lang="ts">
import { ref, defineComponent } from "vue";
import AppButtonPrimary from "../components/AppButtonPrimary.vue";


export default defineComponent({
    name: "Login",
    components: {
        AppButtonPrimary
    },
    data() {
        return {
            logoImagePath: "src/assets/Icons/AppMyCompanyIcon.svg",
            welcomeImagePath: "src/assets/vue.svg"
        }
    }
});
</script>