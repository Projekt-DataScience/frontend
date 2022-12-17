import { defineStore } from "pinia";
import AuthService from "../services/auth.service";
import { CachedUser } from "../services/types";
import { User } from "../interfaces/user";

export const useAuth = defineStore('Auth', {
    state: () => ({
        user: {} as User,
        cachedUser: {} as CachedUser,
        // loggedIn: false,
    }),
    actions: {
        login(cachedUser) {
            return AuthService.login(cachedUser).then(
                user => {
                    // this.loggedIn = true;
                    return Promise.resolve(user);
                },
                error => {
                    // this.loggedIn = false;
                    return Promise.reject(error);
                }
            );
        },
        checkLogin() {
            // this.cachedUser = (JSON.parse(localStorage.getItem('user') || '{}'))
            // AuthService.validateJWT(this.cachedUser);
            // if (AuthService.loggedIn == true) {
            //     console.log("checkLogin return true")
            //     return true;

            // }
            // console.log("checkLogin return false")
            // return false;
            
            if (localStorage.getItem('user') === null) {
                return false;
            }
            return true;
           
            }

    }
}
)
