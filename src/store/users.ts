import { defineStore } from "pinia";
import AuthService from "../services/auth.service";
import { CachedUser, ValidatedUser } from "../services/types";
import { User } from "../interfaces/user";

export const useUser = defineStore('User', {
    state: () => ({
        loggedIn: {} as Boolean,
        validatedUser: {} as ValidatedUser
    }),
    actions: {
        setLoggedIn(bool: boolean) {
            this.loggedIn = bool;
        }
    },
    getters: {
        getIsLoggedIn(state) {
            var cachedUser: CachedUser = (JSON.parse(localStorage.getItem('user') || '{}'));
            AuthService.validateJWT(cachedUser);
            if (state.validatedUser.result === 1) {
                state.loggedIn = true;
            }
            return state.loggedIn;
        },
    }
}
)
