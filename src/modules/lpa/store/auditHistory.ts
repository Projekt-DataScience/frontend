import { defineStore } from "pinia";
import axios from 'axios';
import { Audit } from '../interfaces/audit'
import { authHeader } from "../../../libraries/services";


export const useAuditHistory = defineStore('AuditHistory', {
    state: () => ({
        audits: [] as Audit[],
    }),
    getters: {
        getCompletedAudits(state) {
            return state.audits
        },
    },
    actions: {
        async fetchCompletedAudits() {
            try {
                const response = await axios.get(
                    import.meta.env.VITE_GW_AUDIT_URL + "lpa_audit/complete",
                    authHeader()
                );
                this.audits = response.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        setaudits(audits: Audit[]) {
            this.audits = audits;
        },
    }
}
)
