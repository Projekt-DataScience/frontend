import { defineStore } from "pinia";
import axios from 'axios';
import { Question } from "../interfaces/question";
import { authHeader } from "../../../libraries/services";
import { QuestionAndAnswers } from "../interfaces/questionAndAnswers";
import { AnswerByQuestion } from "../interfaces/answerByQuestion";
import { QuestionCategory } from "../interfaces/questionCategory"

export const useQuestions = defineStore('Questions', {
    state: () => ({
        questions: [] as Question[],
        questionsAndAnswers: [] as QuestionAndAnswers[],
        numberOfAnswersLoaded: 5,
        categorys: [] as QuestionCategory[]
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
                        import.meta.env.VITE_GW_AUDIT_URL + "lpa_question/answers/" + this.questions[i].id + "?last=" + this.numberOfAnswersLoaded,
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
        async fetchCategorys() {
            try {
                const response = await axios.get(
                    import.meta.env.VITE_GW_AUDIT_URL + "lpa_question_category/question_category/",
                    authHeader()
                );
                this.categorys = response.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        async createQuestion(layerID: number, groupID: number, categoryID: number, title: string, description: string) {
            try {
                const response = await axios.post(
                    import.meta.env.VITE_GW_AUDIT_URL + "lpa_question/",
                    {
                        group_id: groupID,
                        layer_id: layerID,
                        category_id: categoryID,
                        question: title,
                        description: description
                    },
                    authHeader()
                );
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
    }
}
)
