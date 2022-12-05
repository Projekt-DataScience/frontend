import { defineStore } from "pinia";
import { Questions } from "./types";
import axios from 'axios';

export const useQuestions = defineStore('Questions', {
    state: () => ({
        questions: [] as Questions[]
    }),
    getters: {
        getUsers: (state) => state.questions,
    },
    actions: {
        async fetchQuestions({ commit }) {
            try {
                const data = await axios.get(
                    "http://localhost:3000/dataQuestions"
                );
                this.questions = data.data;
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