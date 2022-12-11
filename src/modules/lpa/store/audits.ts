export interface Audits {
    id: number,
    due_date: Date,
    duration: number,
    recurrent_audit: Boolean,
    questions: any,
    answers: any
    assigned_group: string,
    assigned_layer: number,
    auditor: any,
    created_by: any,
    audited_user: any
}

import { defineStore } from "pinia";
import axios from 'axios';

export const useAudits = defineStore('Audits', {
    state: () => ({
        audits: [] as Audits[],
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
