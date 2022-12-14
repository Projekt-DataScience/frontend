import { defineStore } from "pinia";
import authService from "../services/authService"; 
import { CachedUser, ValidatedUser } from "../services/types"; 
import { User } from "../interfaces/user"; 
import { Layer } from "../interfaces/layer"; 
import axios from 'axios';
import authHeader from "../services/authHeader"; 
import { Group } from "../interfaces/group"; 

const API_URL = import.meta.env.VITE_GW_USERMANAGEMENT_URL;

export const useUser = defineStore('User', {
    state: () => ({
        loggedIn: {} as Boolean,
        validatedUser: {} as ValidatedUser,
        user: {} as User,
        layers: [] as Layer[],
        groups: [] as Group[],
        toggleSidebarIsActive: true
    }),
    actions: {
        setLoggedIn(bool: boolean) {
            this.loggedIn = bool;
        },
        async fetchUser(){
            var cachedUser = JSON.parse(localStorage.getItem('user') || "{}") as CachedUser;
            try {
                const response = await axios.post(
                    API_URL + "validateJWT?jwt=" + cachedUser.token
                );
                this.validatedUser = response.data;
                try{
                    const response = await axios.get(
                        API_URL + "user/" + this.validatedUser.payload.user_id,
                        authHeader()
                    );
                    this.user = response.data.data;
                }catch(error){
                    console.log(error);
                }
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        async fetchLayers(){
            try{
                const response = await axios.get(
                    API_URL + "layers/",
                    authHeader()
                );
                this.layers = response.data.data;
            }catch(error){
                console.log(error);
            }
        },
        async fetchGroups(){
            try{
                const response = await axios.get(
                    API_URL + "groups/",
                    authHeader()
                );
                this.groups = response.data.data;
            }catch(error){
                console.log(error);
            }
        },
        setToggleSidebarIsActive(status: boolean){
            this.toggleSidebarIsActive = status;
        }
    },
    getters: {
        getIsLoggedIn(state) {
            var cachedUser: CachedUser = (JSON.parse(localStorage.getItem('user') || '{}'));
            authService.validateJWT(cachedUser);
            if (state.validatedUser.result === 1) {
                state.loggedIn = true;
            }
            return state.loggedIn;
        },
    }
}
)
