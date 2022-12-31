import {Layer, Group} from "../../../libraries/interfaces"
import { QuestionCategory } from "./questionCategory"

export interface Question {
    question: string,
    description: string,
    layer_id: number,
    id: number,
    category_id: number,
    group_id: number,
    layer: Layer,
    group: Group,
    category: QuestionCategory
}