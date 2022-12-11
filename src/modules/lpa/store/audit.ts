import { defineStore } from "pinia";
import axios from 'axios';

export interface Questions {
    id: number,
    title: string,
    description: string,
    category: string,
    layer: number,
    group: string
}

export const useAudit = defineStore('Audit', {
    state: () => ({
        questions: [] as Questions[],
    }),
    getters: {
        
    },
    actions: {
        async fetchAudit() {
            try {
                const data = await axios.get(
                    "http://localhost:3000/dataQuestions"
                );
                this.questions = data.data.data.questions;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        setQuestions(questions: any) {
            this.questions = questions;
        },
    }
}
)