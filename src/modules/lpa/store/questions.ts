import { defineStore } from "pinia";
import { Questions, StructuredQuestions } from "../types";
import axios from 'axios';

export const useQuestions = defineStore('Questions', {
    state: () => ({
        questions: [] as Questions[],
        structuredQuestions: [] as StructuredQuestions[],
    }),
    getters: {
        getQuestions(state){
            for (let i = 0; i < state.questions.length; i++) {
                state.structuredQuestions[i].id = state.questions[i].id;
                state.structuredQuestions[i].title = state.questions[i].title;
                state.structuredQuestions[i].description = state.questions[i].description;
                state.structuredQuestions[i].listItems[0].type = "normal";
                state.structuredQuestions[i].listItems[0].layer = state.questions[i].layer.toString();
                state.structuredQuestions[i].listItems[1].type = "normal";
                state.structuredQuestions[i].listItems[1].group = state.questions[i].group;
            }

            return state.structuredQuestions
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