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
                state.structuredQuestions.push({
                    id: state.questions[i].id,
                    title: state.questions[i].title,
                    description: state.questions[i].title,
                    listItems: [
                        {
                            type: "normal",
                            text: "Layer " + state.questions[i].layer.toString()
                        },
                        {
                            type: "normal",
                            text: state.questions[i].group
                        }
                    ]
                })
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

/* */