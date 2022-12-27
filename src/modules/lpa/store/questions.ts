import { defineStore } from "pinia";
import axios from 'axios';
import { Question } from "../interfaces/question";
import authHeader from "../../../services/auth-header";
import {QuestionAndAnswers} from "../interfaces/questionAndAnswers";
import { AnswerByQuestion } from "../interfaces/answerByQuestion";

export const useQuestions = defineStore('Questions', {
    state: () => ({
        questions: [] as Question[],
        questionsAndAnswers: [] as QuestionAndAnswers[],
        numberOfAnswersLoaded: 5
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
        async fetchAnswersPerQuestion() {
            for (let i = 0; i < this.questions.length; i++) {
                var answerByQuestion = {} as AnswerByQuestion;
                try {
                    const response = await axios.get(
                        import.meta.env.VITE_GW_AUDIT_URL + "lpa_question/answers/"+ this.questions[i].id +"?last="+this.numberOfAnswersLoaded,
                        authHeader()
                    );
                    answerByQuestion = response.data;
                } catch (error) {
                    alert(error);
                    console.log(error);
                }
                this.questionsAndAnswers.push({
                    id: this.questions[i].id,
                    answers: answerByQuestion,
                    question: this.questions[i].question,
                    description: this.questions[i].description,
                    layer_id: this.questions[i].layer_id,
                    category_id: this.questions[i].category_id,
                    group_id: this.questions[i].group_id,
                    layer: this.questions[i].layer,
                    group: this.questions[i].group,
                    category: this.questions[i].category
                }
                )
            }
        },
        setQuestions(questions: Question[]) {
            this.questions = questions;
        },
    }
}
)
