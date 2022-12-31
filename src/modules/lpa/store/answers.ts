import { defineStore } from "pinia";
import axios from 'axios';
import { Answer } from "../interfaces/answer";
import { Question } from "../interfaces/question";
import { authHeader } from "../../../libraries/services";

export const useAnswers = defineStore('Answers', {
    state: () => ({
        answers: [] as Answer[],
    }),
    getters: {
        getAnswers(state) {
            return state.answers
        },
    },
    actions: {
        async fetchAnswers(questions: Question[], x: number) {
            for (let i = 0; i < questions.length; i++) {
                try {
                    const response = await axios.get(
                        import.meta.env.VITE_GW_AUDIT_URL + "lpa_question/answers/" + questions[i].id + "?last=" + x,
                        authHeader()
                    );
                    this.answers = response.data;
                } catch (error) {
                    alert(error);
                    console.log(error);
                }
            }
        },
        setAnswers(questions: any) {
            this.answers = questions;
        },
    }
}
)
