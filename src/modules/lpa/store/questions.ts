import { defineStore } from "pinia";
import axios from 'axios';
import { Question } from "../interfaces/question";
import authHeader from "../../../services/auth-header";

export const useQuestions = defineStore('Questions', {
    state: () => ({
        questions: [] as Question[],
    }),
    getters: {
        getQuestions(state) {
            return state.questions
        },
    },
    actions: {
        async fetchQuestions() {
            try {
                const response = await axios.get(
                    import.meta.env.VITE_GW_AUDIT_URL + "lpa_question",
                    authHeader()
                );
                this.questions = response.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        setQuestions(questions: Question[]) {
            this.questions = questions;
        },
    }
}
)
