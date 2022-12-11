import { defineStore } from "pinia";
import axios from 'axios';
import { Audit } from "../interfaces/audit";

export const useAudit = defineStore('Audit', {
    state: () => ({
        audit: [] as Audit[],
        currentAudit: 1
    }),
    getters: {
        
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
    }
}
)