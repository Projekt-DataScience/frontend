export interface Questions {
    id: number,
    title: string,
    description: string,
    category: string,
    layer: number,
    group: string
}

import { defineStore } from "pinia";
import axios from 'axios';

export const useQuestions = defineStore('Questions', {
    state: () => ({
        questions: [] as Questions[],
    }),
    getters: {
        getQuestions(state) {
            return state.questions
        },
    },
    actions: {
        async fetchQuestions() {
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
