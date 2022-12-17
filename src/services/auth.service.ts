import axios from 'axios';
import { CachedUser, LoginUser, RegisterUser } from './types';

const API_URL = import.meta.env.VITE_GW_USERMANAGEMENT_URL;

class AuthService {
    loggedIn = false;
    async login(user: LoginUser) {
        // return axios
        //   .post(API_URL + 'login', {
        //     email: user.email,
        //     password: user.password_hash
        //   })
        //   .then(response => {
        //     if (response.data.token) {
        //       localStorage.setItem('user', JSON.stringify(response.data));
        //     }
        //     return response.data
        //     ;
        //   });

        try {
            const response = await axios.post(
                API_URL + 'login', {
                email: user.email,
                password: user.password_hash
            });

            if (response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;

        } catch (error) {
            // alert(error);
            console.log(error);
            return error;
        }
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user: RegisterUser) {
        return axios.post(API_URL + 'register', {
            email: user.email,
            password: user.password_hash

            // HIer müssen alles DAten rein vom RegisterUser


        });
    }

    async validateJWT(cachedUser: CachedUser) {
        console.log("Hier beginnt validateJWT" )
        try {
            const response = await axios.post(
                API_URL + 'validateJWT', {
                jwt: cachedUser.token
            });

            console.log("validateJWT RESPONSE: " + response.data )

            if (response.data.result === 1) {
                console.log("validateJWT return true")
                this.loggedIn = true;
            }
            this.loggedIn = false;

        } catch (error) {
            // alert(error);
            console.log("validateJWT return false");
            this.loggedIn = false;
        }
    }
}

export default new AuthService();