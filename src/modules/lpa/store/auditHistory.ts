import { defineStore } from "pinia";
import axios from 'axios';
import { Audit } from '../interfaces/audit'


export const useAuditHistory = defineStore('AuditHistory', {
    state: () => ({
        audits: [] as Audit[],
    }),
    getters: {
        getAudits(state) {
            return state.audits
        },
    },
    actions: {
        async fetchAudits() {
            try {
                const data = await axios.get(
                    "http://localhost:3000/dataAudits"
                );
                this.audits = data.data.data.audits;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        setaudits(audits: any) {
            this.audits = audits;
        },
    }
}
)
