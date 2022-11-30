<template>
    <div class="flex items-center px-6 py-4 bg-gray-100 border-b-2 border-gray-200">
        <div>
            <img :src="imagePath" alt="MyCompanyLogo" class="h-10">
        </div>
        <div class="flex-auto">
            <div class="flex justify-end items-center">
                <div class="mr-4">
                    <AppButtonNotification></AppButtonNotification>
                </div>
                <div>
                    <AppButtonProfile></AppButtonProfile>
                </div>
            </div>
        </div>
    </div>
</template>
        
<script lang="ts">
import { ref, defineComponent } from "vue";

import AppButtonProfile from "./AppButtonProfile.vue";
import AppButtonNotification from "./AppButtonNotification.vue";


export default defineComponent({
    name: "MainHeader",
    components: {
        AppButtonNotification,
        AppButtonProfile
    },
    data(){
        return {
            imagePath: "src/assets/Icons/AppMyCompanyIcon.svg"
        }
    }
});
</script>