import axios from 'axios';
import { CachedUser, LoginUser, RegisterUser, ValidatedUser } from './types';
import { useUser } from '../stores/user';

const API_URL = import.meta.env.VITE_GW_USERMANAGEMENT_URL;

class AuthService {
    validatedUser = {} as ValidatedUser;
    //store = useUser();
    //loggedIn = false;
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

        const store = useUser();

        try {
            const response = await axios.post(
                API_URL + 'login', {
                email: user.email,
                password: user.password_hash
            });

            if (response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data));

                let cachedUser: CachedUser = response.data;
                

                // this.validateJWT(cachedUser);
                try {
                    const validate = await axios.post(
                        API_URL + 'validateJWT/?jwt=' + cachedUser.token
                    );
                    this.validatedUser = validate.data;
                    localStorage.setItem('userExpiration', JSON.stringify(this.validatedUser.payload.expires));
                } catch (error) {
                    alert(error);
                    console.log(error);
                }


                store.setLoggedIn(true);                
                
                // Ab Hier nur zum testen:
                //this.checkIfLoggedIn()



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
        // console.log("Hier beginnt validateJWT mit Token: ")
        try {
            // const response = await axios.post(
            //     API_URL + 'validateJWT', {
            //     jwt: cachedUser.token
            // });

            const response = await axios.post(
                API_URL + 'validateJWT/?jwt=' + cachedUser.token
            );

            //console.log("validateJWT RESPONSE: " + response.data )

            if (response.data.result === 1) {
                // console.log("validateJWT return true");
                this.validatedUser = response.data;
                //this.store.validatedUser = response.data;
                console.log("#########ValidatedUser user_ID: " + response.data.payload.user_id)
            }


        } catch (error) {
            // alert(error);
            return false;
            console.log("validateJWT return false");
        }
    }

    // async checkIfLoggedIn() {

    //     var cachedUser: CachedUser = (JSON.parse(localStorage.getItem('user') || '{}'));
    //     await this.validateJWT(cachedUser);

    //     //await this.get_validatedUser()
    //     console.log("validatedUser.result in auth.service = " + this.validatedUser.result)
    //     if (this.validatedUser.result == 1) {
    //         //this.loggedIn = true;
    //          return true;
    //     } else {
    //         //this.loggedIn = false;
    //         return false;
    //     }
    // }
}

export default new AuthService();