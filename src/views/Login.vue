<template>
    <div class="flex w-screen h-screen">
        <div class="bg-gray-50 w-1/4 h-screen">

            <div class="px-10 pt-10 pb-5">
                <img :src="logoImagePath" alt="MyCompanyLogo" class="h-10">
            </div>

            <div class="px-10 py-5">
                <AppInputTextField headline="Email" id="email-address" name="email-address" label="email-address"
                    autocomplete="email" type="text" :text="loginUser.email" v-on:input="setLoginUserEmail($event)">
                </AppInputTextField>
            </div>

            <div class="px-10 py-0">
                <AppInputTextField headline="Passwort" id="password" name="password" label="password"
                    autocomplete="password" type="password" :text="loginUser.password_hash"
                    v-on:input="setLoginUserPassword($event)"></AppInputTextField>
            </div>

            <div class="px-10 py-5">
                <AppButtonPrimary name="Einloggen" v-bind:is-active="true" v-on:buttonClick="loginUserFn">
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
import { LoginUser } from "../services/types";
import { useAuth } from "../store/auth";
import AuthService from "../services/auth.service"
import hashCode from "../services/hash";
import router from "../router";



export default defineComponent({
    name: "Login",
    components: {
        AppButtonPrimary,
        AppInputTextField
    },
    // mounted() {
    //     console.log(hashCode("test"));
    // },
    data() {
        return {
            logoImagePath: "src/assets/Icons/AppMyCompanyIcon.svg",
            welcomeImagePath: "src/assets/Pictures/LoginPicture.jpg",
            loginUser: {} as LoginUser
        }
    },
    methods: {
        async loginUserFn() {
            const store = useAuth();
            await store.login(this.loginUser);
            
            
            
            if (store.checkLogin() == true) {
                console.log(AuthService.login(this.loginUser))
                this.$router.push("/lpa/audit")                
            }
            else console.log("FALSCHE ZUGANGSDATEN!!!")
        },
        setLoginUserEmail(event: any) {
            this.loginUser.email = event;
        },
        setLoginUserPassword(event: any) {
            this.loginUser.password_hash = event;
        },
    }
});
</script>