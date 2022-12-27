import { Layer } from "../../../interfaces/layer"
import { Group } from "../../../interfaces/group"
import { QuestionCategory } from "./questionCategory"
import { AnswerByQuestion } from "./answerByQuestion"

export interface QuestionAndAnswers {
    question: string,
    description: string,
    layer_id: number,
    id: number,
    category_id: number,
    group_id: number,
    layer: Layer,
    group: Group,
    category: QuestionCategory,
    answers: AnswerByQuestion
}