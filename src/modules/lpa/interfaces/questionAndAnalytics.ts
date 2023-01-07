import {Layer, Group} from "../../../libraries/interfaces"
import { QuestionCategory } from "./questionCategory"
import { AnswerByQuestion } from "./answerByQuestion"

export interface QuestionAndAnalytics {
    question: {  
        question: string,
        description: string,
        layer_id: number,
        id: number,
        category_id: number,
        group_id: number,
        layer: Layer,
        group: Group,
        category: QuestionCategory,
    }
    num_green: number,
    num_yellow: number,
    num_red: number,
    percent_green: number,
    percent_yellow: number,
    percent_red: number
}