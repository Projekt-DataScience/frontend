export interface Audits {
    id: number,
    due_date: Date,
    duration: number,
    recurrent_audit: Boolean,
    questions: Questions[],
    answers: Answers[],
    assigned_group: string,
    assigned_layer: string,
    auditor: Users,
    created_by: Users,
    audited_user: Users
}

import { defineStore } from "pinia";
import axios from 'axios';

import { Questions } from "./questions";
import { Answers } from "./answers";
import { Users } from "../../../store/users";

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
