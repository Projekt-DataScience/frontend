import { defineStore } from "pinia";
import axios from 'axios';
import { Audit } from "../interfaces/audit";
import { User } from "../../../interfaces/user"

export const useAudit = defineStore('Audit', {
    state: () => ({
        audit: [] as Audit[],
        currentAudit: 1,
        audited_user_id: 1,
        audited_user: [] as User[]
    }),
    getters: {
        getListItems(){
            
        }
    },
    actions: {
        async fetchAudit() {
            try {
                const data = await axios.get(
                    "http://localhost:3000/dataAuditByID"
                );
                this.audit = data.data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        async fetchUser() {
            try {
                const data = await axios.get(
                    "http://localhost:3000/dataUserByID"
                );
                this.audited_user = data.data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    }
}
)